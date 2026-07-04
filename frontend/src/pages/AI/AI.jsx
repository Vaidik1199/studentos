import { useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/layout/DashboardLayout";
import { askAI } from "../../services/aiService";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function AI() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a question.");
      return;
    }

    try {
      setLoading(true);

      const result = await askAI(prompt);

      setResponse(result.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to get AI response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-5xl space-y-6">

        <div>
          <h1 className="text-4xl font-bold text-white">
            🤖 AI Study Assistant
          </h1>

          <p className="mt-2 text-slate-400">
            Ask anything about programming, college, interviews or exams.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <textarea
            rows={6}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask AI anything..."
            className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-indigo-500"
          />

          <button
            onClick={handleAskAI}
            disabled={loading}
            className="mt-5 rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Thinking..." : "Ask AI"}
          </button>

        </div>

        {response && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="mb-4 text-2xl font-bold text-indigo-400">
              AI Response
            </h2>

            <div className="prose prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {response}
                </ReactMarkdown>
            </div>

          </div>
        )}

      </div>
    </DashboardLayout>
  );
}

export default AI;