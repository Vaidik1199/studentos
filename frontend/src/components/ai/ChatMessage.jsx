import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import toast from "react-hot-toast";
import { saveAINote } from "../../services/noteService";

function ChatMessage({ role, content }) {
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
        className={`max-w-[80%] rounded-2xl px-5 py-4 shadow-lg ${
          role === "user"
            ? "bg-indigo-600 text-white"
            : "border border-slate-800 bg-slate-900 text-slate-200"
        }`}
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold">
            {role === "user" ? "👤 You" : "🤖 StudentOS AI"}
          </span>

          <span className="text-xs text-slate-400">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        <div className="prose prose-invert max-w-none overflow-x-auto">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              table: ({ children }) => (
                <div className="my-4 overflow-x-auto">
                  <table className="w-full border-collapse border border-slate-700">
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
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    className="rounded bg-slate-800 px-1 py-0.5"
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

        {role === "assistant" && (
          <div className="mt-5 flex flex-wrap justify-end gap-3">
            <button
              onClick={handleCopy}
              className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-600"
            >
              📋 Copy
            </button>

            <button
              onClick={handleSave}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              💾 Save to Notes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;