import { useState } from "react";
import { Cpu, Zap } from "../components/Icons";
import Loader from "../components/ui/Loader";
import { showToast } from "../components/ui/Toast";

interface Props {
  darkMode: boolean;
}

function AIAssistant({ darkMode }: Props) {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!message.trim()) {
      showToast({ message: "Please enter a question.", variant: "error" });
      return;
    }
    setLoading(true);
    setResponse("");

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/ai/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setResponse(data.response);
    } catch (err: any) {
      showToast({ message: err.message || "Something went wrong", variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen p-8 ${darkMode ? "bg-slate-900 text-white" : "bg-slate-50 text-black"}`}>
      <div className="container-max max-w-3xl mx-auto glass rounded-xl shadow-lg p-6 fade-in">
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-md p-2 bg-white/6"><Cpu size={20} /></div>
          <h1 className="text-2xl font-extrabold">Sejoura AI Assistant</h1>
        </div>

        <p className="text-sm text-gray-400 mb-6">Your intelligent travel and guest support companion</p>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Try asking:</h3>
          <ul className="text-sm text-gray-400 list-disc pl-5">
            <li>Suggest a 2-day itinerary for Dehradun</li>
            <li>Best eco-tourism places near Mussoorie</li>
            <li>How should I welcome first-time guests?</li>
          </ul>
        </div>

        <textarea
          className="w-full h-44 resize-none rounded-xl form-input text-sm shadow-sm mb-4 input-focus"
          placeholder="Ask anything about travel, homestays, nearby attractions..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={askAI}
            disabled={loading}
            className={`sm:col-span-2 py-3 rounded-lg text-white transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-purple-600 to-indigo-500"}`}>
            {loading ? "Generating Response..." : "✨ Ask Sejoura AI"}
          </button>

          <button
            onClick={() => {
              setMessage("");
              setResponse("");
            }}
            className="py-3 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
          >
            Clear
          </button>
        </div>

        {loading && (
          <div className="mt-6 flex justify-center"><Loader size={40} /></div>
        )}

        {response && (
          <div className="mt-6 glass rounded-xl p-5 border text-sm">
            <div className="flex items-center gap-2 mb-3"><Zap size={16} /> <strong>Sejoura AI</strong></div>
            <div className="whitespace-pre-wrap leading-7">{response}</div>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(response);
                showToast({ message: "Copied to clipboard", variant: "success" });
                }}
                className="px-4 py-2 rounded bg-green-600 text-white"
              >
                Copy Response
              </button>

              <button
                onClick={() => {
                  setResponse("");
                }}
                className="px-4 py-2 rounded border"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AIAssistant;


