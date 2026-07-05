import { useRef, useState, useEffect } from "react";
import toast from "react-hot-toast";
import SuggestedQuestions from "../../components/ai/SuggestedQuestions";
import DashboardLayout from "../../components/layout/DashboardLayout";
import ChatMessage from "../../components/ai/ChatMessage";
import { askAI } from "../../services/aiService";
import QuickPrompts from "../../components/ai/QuickPrompts";
import TypingIndicator from "../../components/ai/TypingIndicator";
import PageTransition from "../../components/common/PageTransition";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PromptTemplates from "../../components/ai/PromptTemplates";

<PromptTemplates
  onSelect={(text) => setPrompt(text)}
/>

function AI() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("studentos-ai-chat");
    return saved ? JSON.parse(saved) : [];
  });

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastPrompt, setLastPrompt] = useState("");

  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);

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

  const handleAskAI = async (customPrompt = null) => {
    if (
      customPrompt &&
      typeof customPrompt !== "string"
    ) {
      customPrompt = null;
    }

    const question = customPrompt ?? prompt;

    if (!question.trim()) {
      toast.error("Please enter a question.");
      return;
    }

    const userMessage = {
      role: "user",
      content: question,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setPrompt("");
    setLoading(true);
    setLastPrompt(question);

    try {
      const history = updatedMessages.map((message) => ({
        role: message.role === "user" ? "user" : "model",
        parts: [
          {
            text: message.content,
          },
        ],
      }));

      const result = await askAI(question, history);

      const aiMessage = {
        role: "assistant",
        content: result.data,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      toast.error(
      error.response?.data?.message ||
      "Failed to generate AI response."
    );
    } finally {
      setLoading(false);
    }
  };

  const exportChat = async () => {
    if (!chatRef.current) return;

    const canvas = await html2canvas(chatRef.current, {
      scale: 2,
      backgroundColor: "#020617",
      useCORS: true,
      scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      position,
      imgWidth,
      imgHeight
    );

    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;

      pdf.addPage();

      pdf.addImage(
        imgData,
        "PNG",
        0,
        position,
        imgWidth,
        imgHeight
      );

      heightLeft -= pdfHeight;
    }

    pdf.save("StudentOS_AI_Chat.pdf");
  };

  return (
    <DashboardLayout>
      <PageTransition>
        <div
          ref={chatRef}
          className="mx-auto flex min-h-[calc(100vh-140px)] max-w-5xl flex-col"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white">
                🤖 AI Study Assistant
              </h1>

              <p className="mt-2 text-slate-400">
                Ask questions, generate notes, solve coding doubts and prepare
                for interviews.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={exportChat}
                disabled={messages.length === 0}
                className="rounded-xl border border-indigo-500 px-4 py-2 text-indigo-400 hover:bg-indigo-500 hover:text-white disabled:opacity-50"
              >
                Export PDF
              </button>

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
          </div>

          <div className="flex-1 overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950 p-6">
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

            <div className="space-y-5">
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  role={message.role}
                  content={message.content}
                  isLast={index === messages.length - 1}
                  loading={loading}
                  onRegenerate={() => handleAskAI(lastPrompt)}
                />
              ))}

              {loading && <TypingIndicator />}

              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="sticky bottom-0 mt-6 border-t border-slate-800 bg-slate-950 pt-4">
            <div className="flex gap-3">
              <textarea
                rows={2}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask StudentOS AI anything..."
                className="flex-1 resize-none rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-indigo-500"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleAskAI();
                  }
                }}
              />

              <button
                onClick={() => handleAskAI()}
                disabled={loading}
                className="rounded-xl bg-indigo-600 px-8 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}

export default AI;