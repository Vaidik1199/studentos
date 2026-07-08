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

      setStats({
        total: assignments.length,
        completed: assignments.filter(
          (a) => a.status === "Completed"
        ).length,
        pending: assignments.filter(
          (a) => a.status === "Pending"
        ).length,
        overdue: assignments.filter(
          (a) =>
            a.status === "Pending" &&
            new Date(a.dueDate) < today
        ).length,
        high: assignments.filter(
          (a) => a.priority === "High"
        ).length,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const items = [
    {
      title: "Completed",
      value: stats.completed,
      icon: <CheckCircle2 size={22} />,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: <Clock3 size={22} />,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      title: "High Priority",
      value: stats.high,
      icon: <AlertTriangle size={22} />,
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
    {
      title: "Overdue",
      value: stats.overdue,
      icon: <ListTodo size={22} />,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold text-white">
        📋 Assignment Insights
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className={`rounded-xl ${item.bg} p-5`}
          >
            <div className={`${item.color}`}>
              {item.icon}
            </div>

            <p className="mt-3 text-sm text-slate-400">
              {item.title}
            </p>

            <h3
              className={`mt-1 text-3xl font-bold ${item.color}`}
            >
              {item.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignmentInsights;