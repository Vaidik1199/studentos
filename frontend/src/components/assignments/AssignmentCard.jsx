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

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-indigo-500">
      <div className="flex items-start justify-between">
        <h2 className="text-2xl font-bold text-white">
          {assignment.title}
        </h2>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            priorityColor[assignment.priority]
          }`}
        >
          {assignment.priority}
        </span>
      </div>

      <p className="mt-4 whitespace-pre-line text-slate-300">
        {assignment.description || "No description provided."}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm text-slate-400">
          Due: {new Date(assignment.dueDate).toLocaleDateString()}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            statusColor[assignment.status]
          }`}
        >
          {assignment.status}
        </span>
      </div>

      <div className="mt-6 flex gap-2">
        <button
          onClick={() => onEdit(assignment)}
          className="flex-1 rounded-xl bg-amber-500 py-2 font-semibold text-white hover:bg-amber-600"
        >
          Edit
        </button>

        <button
          onClick={() => onToggleStatus(assignment)}
          className={`flex-1 rounded-xl py-2 font-semibold text-white ${
            assignment.status === "Pending"
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "bg-orange-600 hover:bg-orange-700"
          }`}
        >
          {assignment.status === "Pending"
            ? "Complete"
            : "Pending"}
        </button>

        <button
          onClick={() => onDelete(assignment._id)}
          className="flex-1 rounded-xl bg-red-600 py-2 font-semibold text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default AssignmentCard;