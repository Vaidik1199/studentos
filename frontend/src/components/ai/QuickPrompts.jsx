const prompts = [
  {
    title: "📚 Generate Notes",
    prompt: "Generate complete revision notes on ",
  },
  {
    title: "📝 Create MCQs",
    prompt: "Generate 10 MCQs on ",
  },
  {
    title: "💻 Explain Code",
    prompt: "Explain this code:\n",
  },
  {
    title: "🎯 Interview Questions",
    prompt: "Generate interview questions for ",
  },
  {
    title: "📖 Summarize Topic",
    prompt: "Summarize ",
  },
  {
    title: "📅 Create Study Plan",
    prompt: "Create a 7-day study plan for ",
  },
];

function QuickPrompts({ onSelect }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {prompts.map((item) => (
        <button
          key={item.title}
          onClick={() => onSelect(item.prompt)}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left transition hover:border-indigo-500 hover:bg-slate-800"
        >
          <h3 className="font-semibold text-white">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Click to start
          </p>
        </button>
      ))}
    </div>
  );
}

export default QuickPrompts;