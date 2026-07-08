import {
  CalendarDays,
  Pencil,
  Trash2,
  CheckCircle2,
  Clock3,
  AlertTriangle,
} from "lucide-react";

function AssignmentCard({
  assignment,
  onEdit,
  onDelete,
  onToggleStatus,
}) {
  const priorityColor = {
    High: "bg-red-500/20 text-red-400",
    Medium: "bg-yellow-500/20 text-yellow-400",
    Low: "bg-emerald-500/20 text-emerald-400",
  };

  const statusColor = {
    Pending: "bg-orange-500/20 text-orange-400",
    Completed: "bg-emerald-500/20 text-emerald-400",
  };

  const dueDate = new Date(assignment.dueDate);
  dueDate.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffDays = Math.ceil(
    (dueDate - today) / (1000 * 60 * 60 * 24)
  );
  const isOverdue =
    diffDays < 0 &&
    assignment.status === "Pending";
  const isToday =
    diffDays === 0 &&
    assignment.status === "Pending";

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-indigo-500/10">

      <div className="flex items-start justify-between">

        <h2 className="text-2xl font-bold text-white">
          {assignment.title}
        </h2>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${priorityColor[assignment.priority]}`}
        >
          {assignment.priority}
        </span>

      </div>

      <p className="mt-4 line-clamp-3 text-slate-400">
        {assignment.description || "No description provided."}
      </p>

      <div className="mt-5 flex items-center justify-between">

        <div className="flex items-center gap-2 text-slate-400">

          <CalendarDays size={18} />

          <span>
            {new Date(
              assignment.dueDate
            ).toLocaleDateString()}
          </span>

        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${statusColor[assignment.status]}`}
        >
          {assignment.status}
        </span>

      </div>

      <div
        className={`mt-5 rounded-xl p-3 text-sm font-semibold ${
          assignment.status === "Completed"
            ? "bg-emerald-500/10 text-emerald-400"
            : isOverdue
            ? "bg-red-500/10 text-red-400"
            : isToday
            ? "bg-yellow-500/10 text-yellow-400"
            : "bg-indigo-500/10 text-indigo-400"
        }`}
      >
        {assignment.status === "Completed"
          ? "✅ Completed"
          : isOverdue
          ? `🔴 ${Math.abs(diffDays)} day(s) overdue`
          : isToday
          ? "🟡 Due Today"
          : `📅 ${diffDays} day(s) remaining`}
      </div>

      <div className="mt-6 flex gap-2">

        <button
          onClick={() => onEdit(assignment)}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-500 py-2 font-semibold text-white hover:bg-amber-600"
        >
          <Pencil size={18} />
          Edit
        </button>

        <button
          onClick={() => onToggleStatus(assignment)}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2 font-semibold text-white ${
            assignment.status === "Pending"
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "bg-orange-600 hover:bg-orange-700"
          }`}
        >
          <CheckCircle2 size={18} />
          {assignment.status === "Pending"
            ? "Complete"
            : "Pending"}
        </button>

        <button
          onClick={() => onDelete(assignment._id)}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 py-2 font-semibold text-white hover:bg-red-700"
        >
          <Trash2 size={18} />
          Delete
        </button>

      </div>
    </div>
  );
}

export default AssignmentCard;