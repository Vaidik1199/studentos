import { Target } from "lucide-react";

function WeeklyGoals() {
  const goals = [
    {
      title: "Attendance Above 75%",
      progress: 78,
      color: "bg-emerald-500",
    },
    {
      title: "Assignments Completed",
      progress: 60,
      color: "bg-indigo-500",
    },
    {
      title: "Notes Created",
      progress: 40,
      color: "bg-yellow-500",
    },
    {
      title: "Study Goal",
      progress: 85,
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="mb-6 flex items-center gap-3">
        <Target className="text-indigo-400" />
        <h2 className="text-xl font-bold text-white">
          Weekly Goals
        </h2>
      </div>

      <div className="space-y-5">
        {goals.map((goal) => (
          <div key={goal.title}>
            <div className="mb-2 flex justify-between">
              <span className="text-slate-300">
                {goal.title}
              </span>

              <span className="font-semibold text-white">
                {goal.progress}%
              </span>
            </div>

            <div className="h-3 rounded-full bg-slate-800">
              <div
                className={`${goal.color} h-full rounded-full transition-all`}
                style={{
                  width: `${goal.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyGoals;