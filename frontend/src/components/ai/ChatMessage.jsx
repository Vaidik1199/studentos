import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ChatMessage({ role, content }) {
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
        <div className="mb-2 text-sm font-semibold">
          {role === "user" ? "👤 You" : "🤖 StudentOS AI"}
        </div>

        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
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
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;