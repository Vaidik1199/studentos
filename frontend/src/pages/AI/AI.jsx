import { useRef, useState, useEffect } from "react";
import toast from "react-hot-toast";
import SuggestedQuestions from "../../components/ai/SuggestedQuestions";
import DashboardLayout from "../../components/layout/DashboardLayout";
import ChatMessage from "../../components/ai/ChatMessage";
import { askAI } from "../../services/aiService";
import QuickPrompts from "../../components/ai/QuickPrompts";
import TypingIndicator from "../../components/ai/TypingIndicator";

function AI() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("studentos-ai-chat");
    return saved ? JSON.parse(saved) : [];
  });
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastPrompt, setLastPrompt] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(
        "studentos-ai-chat",
        JSON.stringify(messages)
        );
    }, [messages]);


  const handleAskAI = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a question.");
      return;
    }

    const userMessage = {
      role: "user",
      content: prompt,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentPrompt = prompt;
    setPrompt("");
    setLoading(true);
    setLastPrompt(currentPrompt);

    try {
      const history = messages.map((message) => ({
        role: message.role === "user" ? "user" : "model",
        parts: [
        {
            text: message.content,
        },
    ],
    }));

    const result = await askAI(
        currentPrompt,
        history
    );

      const aiMessage = {
        role: "assistant",
        content: result.data,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      toast.error("Failed to get AI response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mx-auto flex min-h-[calc(100vh-140px)] max-w-5xl flex-col">

        <div className="mb-6 flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold text-white">
              🤖 AI Study Assistant
            </h1>

            <p className="mt-2 text-slate-400">
              Ask questions, generate notes, solve coding doubts and prepare for interviews.
            </p>
          </div>

          <button
            onClick={() => {
              setMessages([]);
              localStorage.removeItem("studentos-ai-chat");
            }}
            className="rounded-xl border border-red-500 px-4 py-2 text-red-400 hover:bg-red-500 hover:text-white"
          >
            Clear Chat
          </button>

        </div>

        <div className="flex-1 space-y-5 rounded-2xl border border-slate-800 bg-slate-950 p-6">

          {messages.length === 0 && (
            <>
              <QuickPrompts
                onSelect={(text) => setPrompt(text)}
              />
              <SuggestedQuestions
                onSelect={(text) => setPrompt(text)}
              />
            </>
          )}

          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              role={message.role}
              content={message.content}
            />
          ))}

          {loading && <TypingIndicator />}

          <div ref={messagesEndRef} />

        </div>

        <div className="mt-6 flex gap-4">

          <textarea
            rows={2}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 resize-none rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-indigo-500"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleAskAI();
              }
            }}
          />

          <button
            onClick={handleAskAI}
            disabled={loading}
            className="rounded-xl bg-indigo-600 px-8 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50"
          >
            Send
          </button>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default AI;