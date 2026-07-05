function RecentNotes({ notes = [] }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          📝 Recent Notes
        </h2>

        <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
          {notes.length}
        </span>
      </div>

      {notes.length === 0 ? (
        <div className="rounded-xl bg-slate-800 p-5 text-center">
          <p className="text-slate-400">
            No notes available.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {notes.map((note) => (
            <div
              key={note._id}
              className="rounded-xl border border-slate-800 bg-slate-800 p-4 transition hover:border-indigo-500"
            >
              <h3 className="font-semibold text-white">
                {note.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                {note.content}
              </p>

              <p className="mt-3 text-xs text-slate-500">
                {new Date(note.updatedAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentNotes;