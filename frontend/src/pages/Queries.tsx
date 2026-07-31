import { useEffect, useState } from "react";
import { PlusCircle } from "../components/Icons";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";
import { showToast } from "../components/ui/Toast";

type Query = {
  id: number;
  guestName: string;
  query: string;
  status: string;
};

type QueriesProps = {
  darkMode: boolean;
};

function Queries({ darkMode }: QueriesProps) {
  const [queries, setQueries] = useState<Query[]>([]);
  const [loading, setLoading] = useState(true);
  const [guestName, setGuestName] = useState("");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("pending");

const [showDeleteModal, setShowDeleteModal] = useState(false);
const [selectedId, setSelectedId] = useState<number | null>(null);

  const fetchQueries = () => {
    const token = localStorage.getItem("token");

    fetch(`${import.meta.env.VITE_API_URL}/api/queries`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Unauthorized");
        }

        return res.json();
      })
      .then((data) => {
        setQueries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  const addQuery = async () => {
    // Input Validation
    if (!guestName.trim() || !query.trim()) {
      showToast({ message: "Please fill all fields.", variant: "error" });
      return;
    }
    
    await fetch(`${import.meta.env.VITE_API_URL}/api/queries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        guestName,
        query,
        status,
      }),
    });

    setGuestName("");
    setQuery("");
    setStatus("pending");

    fetchQueries();
  };

  const updateStatus = async (
    id: number,
    currentStatus: string
  ) => {
    const newStatus =
      currentStatus === "pending"
        ? "answered"
        : "pending";

    await fetch(
      `${import.meta.env.VITE_API_URL}/api/queries/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      }
    );

    fetchQueries();
  };

  const deleteQuery = async () => {
    if (selectedId === null) return;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/queries/${selectedId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete query");
      }

      showToast({
        variant: "success",
        message: "Query deleted successfully!",
      });

      setShowDeleteModal(false);
      setSelectedId(null);

      fetchQueries();
    } catch (err: any) {
      showToast({
        variant: "error",
        message: err.message || "Something went wrong!",
      });
    }
  };

  return (
    <>

      <main className="container-max p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-extrabold">Guest Queries</h1>
          <div className="text-sm text-gray-400">Manage guest messages and responses</div>
        </div>

        <section className="glass rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Add Guest Query</h2>
            <div className="text-sm text-gray-400">Tip: keep queries short and actionable</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
            <input type="text" placeholder="Guest Name" value={guestName} onChange={(e) => setGuestName(e.target.value)} className="form-input w-full" />
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-input w-full">
              <option value="pending">Pending</option>
              <option value="answered">Answered</option>
            </select>
            <button onClick={addQuery} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 rounded-lg">
              <PlusCircle size={16} /> Add Query
            </button>
          </div>

          <textarea placeholder="Guest Query" value={query} onChange={(e) => setQuery(e.target.value)} className="form-input w-full h-28 mt-2" />
        </section>

        {loading ? (
          <div className="flex justify-center py-10"><Loader /></div>
        ) : queries.length === 0 ? (
          <div className="rounded-xl p-10 text-center glass">
            <h2 className="text-2xl font-bold">No Guest Queries</h2>
            <p className="mt-2 text-sm text-gray-400">Add your first guest query above.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {queries.map((q) => (
              <div key={q.id} className="glass p-4 rounded-lg flex flex-col sm:flex-row sm:justify-between gap-3">
                <div>
                  <div className="text-sm text-gray-400">{q.guestName}</div>
                  <p className="font-medium mt-1">{q.query}</p>
                </div>

                <div className="flex flex-col sm:items-end gap-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${q.status === "answered" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`}>
                    {q.status}
                  </span>

                  <div className="flex gap-2">
                    <button onClick={() => updateStatus(q.id, q.status)} className="px-3 py-2 rounded bg-yellow-500 text-white">Change Status</button>
                    <button onClick={() => {
                      setSelectedId(q.id);
                      setShowDeleteModal(true);
                    }} className="px-3 py-2 rounded bg-red-600 text-white">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>

      <Footer darkMode={darkMode} />
            {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div
            className={`w-96 rounded-xl p-6 shadow-xl ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <h2 className="text-2xl font-bold mb-3">
              Delete Query
            </h2>

            <p className="mb-6">
              Are you sure you want to delete this guest query?
              This action cannot be undone.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedId(null);
                }}
                className="px-5 py-2 rounded-lg border"
              >
                Cancel
              </button>

              <button
                onClick={deleteQuery}
                className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Queries;