function RecentNotes({ notes = [] }) {
  const getDateLabel = (date) => {
    const today = new Date();
    const updated = new Date(date);

    const diff = Math.floor(
      (today - updated) / (1000 * 60 * 60 * 24)
    );

    if (diff === 0) return "Today";
    if (diff === 1) return "Yesterday";

    return updated.toLocaleDateString();
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Recent Notes
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Recently updated study notes.
          </p>
        </div>

        <div className="flex h-11 min-w-[44px] items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500/20 to-violet-500/20 px-3 font-bold text-indigo-300">
          {notes.length}
        </div>
      </div>

      {notes.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-800/40 p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-3xl">
            📝
          </div>

          <h3 className="text-xl font-semibold text-white">
            No Notes Yet
          </h3>

          <p className="mt-2 text-slate-400">
            Create your first note to keep everything organized.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {notes.map((note) => (
            <div
              key={note._id}
              className="group rounded-2xl border border-slate-700 border-l-4 border-l-indigo-500 bg-slate-800/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              {/* Top */}

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-lg">
                      📄
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-semibold text-white">
                        {note.title}
                      </h3>

                      <p className="text-xs text-slate-500">
                        Last updated
                      </p>
                    </div>
                  </div>
                </div>

                <span className="self-start rounded-xl bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-300">
                  {getDateLabel(note.updatedAt)}
                </span>
              </div>

              {/* Preview */}

              <p className="mt-5 line-clamp-3 text-sm leading-7 text-slate-400">
                {note.content}
              </p>

              {/* Bottom */}

              <div className="mt-5 flex items-center justify-between border-t border-slate-700 pt-4">
                <span className="text-xs text-slate-500">
                  {new Date(note.updatedAt).toLocaleDateString()}
                </span>

                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                  Study Note
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentNotes;