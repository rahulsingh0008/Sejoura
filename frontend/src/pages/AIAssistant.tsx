import { useState } from "react";
import Loader from "../components/ui/Loader";
import setToast from "../components/ui/Toast";

interface Props {
  darkMode: boolean;
}

function AIAssistant({ darkMode }: Props) {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!message.trim()) {
      alert("Please enter a question.");
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/ai/chat", {
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
      setToast({
        type: "error",
        message: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen p-8 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          🤖 Sejoura AI Assistant
        </h1>

        <textarea
          className="w-full border rounded-lg p-4 h-40 text-black"
          placeholder="Ask anything about travel, homestays, nearby attractions..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={askAI}
          disabled={loading}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {loading && (
          <div className="mt-6 flex justify-center">
            <Loader />
          </div>
        )}

        {response && (
          <div className="mt-8 border rounded-lg p-4 bg-gray-50 text-black">
            <h2 className="font-bold mb-2">AI Response</h2>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AIAssistant;