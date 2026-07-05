function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4">
        <div className="mb-2 text-sm font-semibold text-white">
          🤖 StudentOS AI
        </div>

        <div className="flex gap-2">
          <span className="h-3 w-3 animate-bounce rounded-full bg-indigo-500"></span>

          <span
            className="h-3 w-3 animate-bounce rounded-full bg-indigo-500"
            style={{ animationDelay: "0.2s" }}
          ></span>

          <span
            className="h-3 w-3 animate-bounce rounded-full bg-indigo-500"
            style={{ animationDelay: "0.4s" }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default TypingIndicator;