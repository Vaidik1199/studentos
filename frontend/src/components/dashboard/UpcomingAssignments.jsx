function UpcomingAssignments({
  assignments = [],
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-xl font-bold text-white">
          📅 Upcoming Assignments
        </h2>

        <span className="rounded-full bg-pink-600 px-3 py-1 text-xs font-semibold text-white">
          {assignments.length}
        </span>

      </div>

      {assignments.length === 0 ? (
        <div className="rounded-xl bg-slate-800 p-5 text-center">
          <p className="text-slate-400">
            No upcoming assignments.
          </p>
        </div>
      ) : (
        <div className="space-y-4">

          {assignments.map((assignment) => (

            <div
              key={assignment._id}
              className="rounded-xl border border-slate-800 bg-slate-800 p-4 transition hover:border-pink-500"
            >

              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-white">
                  {assignment.title}
                </h3>

                <span
                  className={`rounded-full px-2 py-1 text-xs font-semibold ${
                    assignment.priority === "High"
                      ? "bg-red-500/20 text-red-400"
                      : assignment.priority === "Medium"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-emerald-500/20 text-emerald-400"
                  }`}
                >
                  {assignment.priority}
                </span>

              </div>

              <p className="mt-3 text-sm text-slate-400">
                Due{" "}
                {new Date(
                  assignment.dueDate
                ).toLocaleDateString()}
              </p>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default UpcomingAssignments;