const tips = [
  "📚 Revise one difficult topic for 30 minutes today.",
  "📝 Solve at least one previous year question paper.",
  "💧 Stay hydrated while studying.",
  "🎯 Focus on understanding concepts instead of memorizing.",
  "💻 Practice one coding problem every day.",
  "📖 Review your notes before going to bed.",
  "⏰ Use the Pomodoro Technique (25 min study + 5 min break).",
  "🧠 Teach a concept to someone else to improve retention.",
  "📅 Plan tomorrow's study goals before sleeping.",
  "🔥 Consistency beats studying for long hours once in a while.",
];

function AITip() {
  const tip =
    tips[new Date().getDate() % tips.length];

  return (
    <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-indigo-900/40 to-slate-900 p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          🤖 AI Study Tip
        </h2>

        <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
          Today
        </span>
      </div>

      <div className="rounded-xl border border-indigo-500/20 bg-slate-800/70 p-5">
        <p className="text-lg leading-8 text-slate-200">
          {tip}
        </p>
      </div>

      <p className="mt-5 text-sm text-slate-400">
        Come back tomorrow for a new study tip.
      </p>
    </div>
  );
}

export default AITip;