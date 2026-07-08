import { useEffect, useState } from "react";
import { getAssignments } from "../../services/assignmentService";
import {
  CheckCircle2,
  Clock3,
  AlertTriangle,
  ListTodo,
} from "lucide-react";

function AssignmentInsights() {
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    overdue: 0,
    high: 0,
  });

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await getAssignments();

      const assignments = response.data;

      const today = new Date();

      const completed = assignments.filter(
        (a) => a.status === "Completed"
      ).length;

      const pending = assignments.filter(
        (a) => a.status === "Pending"
      ).length;

      const overdue = assignments.filter(
        (a) =>
          a.status === "Pending" &&
          new Date(a.dueDate) < today
      ).length;

      const high = assignments.filter(
        (a) => a.priority === "High"
      ).length;

      setStats({
        total: assignments.length,
        completed,
        pending,
        overdue,
        high,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const completion =
    stats.total === 0
      ? 0
      : Math.round((stats.completed / stats.total) * 100);

  const cards = [
    {
      title: "Completed",
      value: stats.completed,
      icon: CheckCircle2,
      color: "emerald",
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: Clock3,
      color: "yellow",
    },
    {
      title: "High Priority",
      value: stats.high,
      icon: AlertTriangle,
      color: "red",
    },
    {
      title: "Overdue",
      value: stats.overdue,
      icon: ListTodo,
      color: "indigo",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          📋 Assignment Insights
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Overview of your assignment progress.
        </p>
      </div>

      <div className="space-y-4">

        {cards.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-800/60 p-4 transition hover:border-slate-700"
            >
              <div className="flex items-center gap-4">

                <div className={`rounded-xl bg-${item.color}-500/10 p-3`}>
                  <Icon className={`text-${item.color}-400`} size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    {item.title}
                  </p>

                  <h3 className="text-lg font-semibold text-white">
                    {item.value}
                  </h3>
                </div>

              </div>
            </div>
          );
        })}

      </div>

      <div className="mt-8 border-t border-slate-800 pt-6">

        <div className="mb-3 flex items-center justify-between">

          <span className="font-medium text-white">
            Completion Rate
          </span>

          <span className="font-bold text-indigo-400">
            {completion}%
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 transition-all duration-700"
            style={{
              width: `${completion}%`,
            }}
          />

        </div>

        <p className="mt-4 text-sm text-slate-400">
          {stats.total === 0
            ? "No assignments available."
            : completion >= 80
            ? "🎉 Excellent progress! Keep it up."
            : completion >= 50
            ? "👍 You're making good progress."
            : "⚠️ Try completing more pending assignments."}
        </p>

      </div>

    </div>
  );
}

export default AssignmentInsights;