import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Query = {
  id: number;
  guestName: string;
  query: string;
  status: string;
};

type QueriesProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

function Queries({ darkMode, toggleDarkMode }: QueriesProps) {
  const [queries, setQueries] = useState<Query[]>([]);
  const [loading, setLoading] = useState(true);

  const [guestName, setGuestName] = useState("");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("pending");

  const fetchQueries = () => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/queries", {
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
    await fetch("http://localhost:5000/api/queries", {
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
      `http://localhost:5000/api/queries/${id}`,
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

  const deleteQuery = async (id: number) => {
    await fetch(
      `http://localhost:5000/api/queries/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    fetchQueries();
  };

  return (
    <>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">
          Guest Queries
        </h1>

        <div
          className={
            darkMode
              ? "bg-gray-800 p-6 rounded-lg mb-8"
              : "bg-gray-100 p-6 rounded-lg mb-8"
          }
        >
          <h2 className="text-2xl font-bold mb-4">
            Add Guest Query
          </h2>

          <input
            type="text"
            placeholder="Guest Name"
            value={guestName}
            onChange={(e) =>
              setGuestName(e.target.value)
            }
            className="border p-2 rounded w-full mb-3 text-black"
          />

          <input
            type="text"
            placeholder="Guest Query"
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            className="border p-2 rounded w-full mb-3 text-black"
          />

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="border p-2 rounded w-full mb-3 text-black"
          >
            <option value="pending">Pending</option>
            <option value="answered">Answered</option>
          </select>

          <button
            onClick={addQuery}
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            Add Query
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {Array.isArray(queries) && queries.map((q) => (
              <div
                key={q.id}
                className={
                  darkMode
                    ? "bg-gray-800 p-4 rounded-lg"
                    : "bg-gray-100 p-4 rounded-lg"
                }
              >
                <h2 className="font-bold">
                  {q.guestName}
                </h2>

                <p>{q.query}</p>

                <p className="mt-2 mb-4">
                  Status: {q.status}
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      updateStatus(q.id, q.status)
                    }
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                  >
                    Change Status
                  </button>

                  <button
                    onClick={() => deleteQuery(q.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default Queries;