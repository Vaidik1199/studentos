import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import toast from "react-hot-toast";
import { Copy, Save } from "lucide-react";

import { saveAINote } from "../../services/noteService";

import { RotateCcw } from "lucide-react";

function ChatMessage({
  role,
  content,
  isLast,
  onRegenerate,
  loading,
  }) {
  const handleSave = async () => {
    if (role !== "assistant") return;

    try {
      await saveAINote(
        `AI Note - ${new Date().toLocaleDateString()}`,
        content
      );

      toast.success("Saved to Notes");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save note.");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      toast.success("Copied to clipboard");
    } catch (error) {
      console.error(error);
      toast.error("Failed to copy.");
    }
  };

  return (
    <div
      className={`flex ${
        role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-5 py-4 shadow-lg ${
          role === "user"
            ? "bg-indigo-600 text-white"
            : "border border-slate-800 bg-slate-900 text-slate-200"
        }`}
      >
        {/* Header */}
        <div className="mb-3 flex items-center justify-between">
          {role === "user" ? (
            <span className="text-sm font-semibold">
              👤 You
            </span>
          ) : (
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600">
                🤖
              </div>

              <span className="text-sm font-semibold">
                StudentOS AI
              </span>
            </div>
          )}

          <span className="text-xs text-slate-400">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        {/* Markdown */}
        <div className="prose prose-invert max-w-none overflow-x-auto">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              table: ({ children }) => (
                <div className="my-4 overflow-x-auto rounded-xl border border-slate-700">
                  <table className="w-full border-collapse">
                    {children}
                  </table>
                </div>
              ),

              thead: ({ children }) => (
                <thead className="bg-slate-800">
                  {children}
                </thead>
              ),

              th: ({ children }) => (
                <th className="border border-slate-700 px-4 py-2 text-left">
                  {children}
                </th>
              ),

              td: ({ children }) => (
                <td className="border border-slate-700 px-4 py-2 align-top">
                  {children}
                </td>
              ),

              p: ({ children }) => (
                <p className="mb-4 leading-8">
                  {children}
                </p>
              ),

              ul: ({ children }) => (
                <ul className="mb-4 list-disc space-y-2 pl-6">
                  {children}
                </ul>
              ),

              ol: ({ children }) => (
                <ol className="mb-4 list-decimal space-y-2 pl-6">
                  {children}
                </ol>
              ),

              h1: ({ children }) => (
                <h1 className="mb-4 mt-6 text-3xl font-bold">
                  {children}
                </h1>
              ),

              h2: ({ children }) => (
                <h2 className="mb-3 mt-6 text-2xl font-bold">
                  {children}
                </h2>
              ),

              h3: ({ children }) => (
                <h3 className="mb-3 mt-5 text-xl font-semibold">
                  {children}
                </h3>
              ),

              code({
                inline,
                className,
                children,
                ...props
              }) {
                const match = /language-(\w+)/.exec(
                  className || ""
                );

                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{
                      borderRadius: "12px",
                      padding: "18px",
                      marginTop: "16px",
                      marginBottom: "16px",
                    }}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    className="rounded bg-slate-800 px-1.5 py-1 text-indigo-300"
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        {/* Actions */}
        {role === "assistant" && (
  <div className="mt-6 flex flex-wrap justify-end gap-3">

    <button
      onClick={handleCopy}
      className="flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600"
    >
      <Copy size={16} />
      Copy
    </button>

    <button
      onClick={handleSave}
      className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
    >
      <Save size={16} />
      Save
    </button>

    {isLast && (
      <button
        onClick={onRegenerate}
        disabled={loading}
        className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
      <RotateCcw
        size={16}
        className={loading ? "animate-spin" : ""}
      />
      {loading ? "Generating..." : "Regenerate"}
    </button>
  )}

    </div>
    )}
      </div>
    </div>
  );
}

export default ChatMessage;