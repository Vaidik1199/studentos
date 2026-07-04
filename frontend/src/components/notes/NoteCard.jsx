function NoteCard({
  note,
  onEdit,
  onDelete,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-indigo-500">
      <div className="flex items-start justify-between">
        <h2 className="text-2xl font-bold text-white">
          {note.title}
        </h2>

        {note.pinned && (
          <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-semibold text-yellow-400">
            📌 Pinned
          </span>
        )}
      </div>

      <p className="mt-4 whitespace-pre-line text-slate-300">
        {note.content}
      </p>

      <p className="mt-6 text-sm text-slate-500">
        Updated:{" "}
        {new Date(note.updatedAt).toLocaleString()}
      </p>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => onEdit(note)}
          className="flex-1 rounded-xl bg-amber-500 py-2 font-semibold text-white transition hover:bg-amber-600"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(note._id)}
          className="flex-1 rounded-xl bg-red-600 py-2 font-semibold text-white transition hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCard;