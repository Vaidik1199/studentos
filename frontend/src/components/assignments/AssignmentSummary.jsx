import {
  ClipboardList,
  Clock3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

function AssignmentSummary({
  assignments = [],
}) {
  const total = assignments.length;

  const completed = assignments.filter(
    (a) => a.status === "Completed"
  ).length;

  const pending = assignments.filter(
    (a) => a.status === "Pending"
  ).length;

  const overdue = assignments.filter((a) => {
    if (a.status === "Completed") return false;

    return new Date(a.dueDate) < new Date();
  }).length;

  const cards = [
    {
      title: "Total",
      value: total,
      icon: <ClipboardList size={24} />,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
    },
    {
      title: "Completed",
      value: completed,
      icon: <CheckCircle2 size={24} />,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Pending",
      value: pending,
      icon: <Clock3 size={24} />,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Overdue",
      value: overdue,
      icon: <AlertTriangle size={24} />,
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-indigo-500"
        >
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl ${card.bg} ${card.color}`}
          >
            {card.icon}
          </div>

          <p className="mt-5 text-sm text-slate-400">
            {card.title}
          </p>

          <h2
            className={`mt-2 text-3xl font-bold ${card.color}`}
          >
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default AssignmentSummary;