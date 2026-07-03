const actions = [
  {
    title: "Create Note",
    emoji: "📝",
  },
  {
    title: "Upload PDF",
    emoji: "📄",
  },
  {
    title: "AI Summary",
    emoji: "🤖",
  },
  {
    title: "Add Task",
    emoji: "📅",
  },
];

function QuickActions() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <button
            key={action.title}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5 transition-all duration-300 hover:border-indigo-500 hover:bg-slate-900"
          >
            <div className="text-3xl">
              {action.emoji}
            </div>

            <p className="mt-3 font-medium text-white">
              {action.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;