import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cpu, Clock, CheckCircle, MessageSquare } from "../components/Icons";

import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";

type DashboardProps = {
  darkMode: boolean;
};

type GuestQuery = {
  id: number;
  guestName: string;
  query: string;
  status: string;
  createdAt: string;
};

function Dashboard({ darkMode }: DashboardProps) {
  const [queries, setQueries] = useState<GuestQuery[]>([]);
  const [loading, setLoading] = useState(true);

  const email = localStorage.getItem("email") || "Guest User";

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/queries", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        setQueries(data);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const pending = queries.filter(
    (q) => q.status.toLowerCase() === "pending"
  ).length;

  const resolved = queries.filter(
    (q) => q.status.toLowerCase() === "resolved"
  ).length;

  return (
    <>

      <main className={`min-h-screen pt-28 pb-12 ${darkMode ? "bg-slate-900 text-white" : "bg-slate-50 text-black"}`}>
        <div className="container-max">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-extrabold mb-1">Welcome back, {email}</h1>
              <p className="text-sm text-gray-400">Overview of your guest interactions and AI assistant</p>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/ai" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow card hover:scale-[1.01] transition">
                <Cpu size={16} /> Open AI Assistant
              </Link>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-16"><Loader size={56} /></div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="glass card rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm text-gray-400">Total Queries</h3>
                      <p className="text-3xl font-bold mt-2">{queries.length}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/6">
                      <MessageSquare size={20} />
                    </div>
                  </div>
                </div>

                <div className="glass card rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm text-gray-400">Pending</h3>
                      <p className="text-3xl font-bold mt-2">{pending}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/6">
                      <Clock size={20} />
                    </div>
                  </div>
                </div>

                <div className="glass card rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm text-gray-400">Resolved</h3>
                      <p className="text-3xl font-bold mt-2">{resolved}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/6">
                      <CheckCircle size={20} />
                    </div>
                  </div>
                </div>

                <Link to="/queries" className="glass card rounded-xl p-6 flex items-center justify-between hover:shadow-lg transition">
                  <div>
                    <h3 className="text-sm text-gray-400">Manage Queries</h3>
                    <p className="text-lg font-semibold mt-1">Open →</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/6">
                    <MessageSquare size={20} />
                  </div>
                </Link>
              </div>

              <section className="glass rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Guest Queries</h2>

                {queries.length === 0 ? (
                  <div className="p-8 text-center text-sm">No guest queries available.</div>
                ) : (
                  <div className="space-y-4">
                    {queries.slice(0, 5).map((q) => (
                      <div key={q.id} className="flex flex-col sm:flex-row sm:justify-between gap-3 p-4 rounded-lg border border-white/4">
                        <div>
                          <div className="text-sm text-gray-400">{new Date(q.createdAt).toLocaleString()}</div>
                          <h3 className="font-semibold">{q.guestName}</h3>
                          <p className="mt-1 text-sm">{q.query}</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${q.status.toLowerCase() === 'resolved' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                            {q.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </>
          )}
        </div>
      </main>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default Dashboard;