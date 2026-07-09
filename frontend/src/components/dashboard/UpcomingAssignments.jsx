function UpcomingAssignments({ assignments = [] }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Upcoming Assignments
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Stay ahead of your deadlines.
          </p>
        </div>

        <div className="flex h-11 min-w-[44px] items-center justify-center rounded-2xl bg-pink-500/20 px-3 font-bold text-pink-400">
          {assignments.length}
        </div>
      </div>

      {assignments.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-800/40 p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-3xl">
            📅
          </div>

          <h3 className="text-xl font-semibold text-white">
            No Upcoming Assignments
          </h3>

          <p className="mt-2 text-slate-400">
            You're all caught up. Great work!
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {assignments.map((assignment) => {
            const today = new Date();
            const dueDate = new Date(assignment.dueDate);

            const daysLeft = Math.ceil(
              (dueDate - today) / (1000 * 60 * 60 * 24)
            );

            let borderColor = "border-l-4 border-l-emerald-500";
            let badgeStyle = "bg-emerald-500/15 text-emerald-400";

            if (assignment.priority === "Medium") {
              borderColor = "border-l-4 border-l-yellow-500";
              badgeStyle = "bg-yellow-500/15 text-yellow-400";
            }

            if (assignment.priority === "High") {
              borderColor = "border-l-4 border-l-red-500";
              badgeStyle = "bg-red-500/15 text-red-400";
            }

            return (
              <div
                key={assignment._id}
                className={`group rounded-2xl border border-slate-700 ${borderColor} bg-slate-800/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/10`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-lg font-semibold text-white">
                      {assignment.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      Due on{" "}
                      <span className="font-medium text-slate-300">
                        {dueDate.toLocaleDateString()}
                      </span>
                    </p>
                  </div>

                  <span
                    className={`self-start rounded-xl px-3 py-1 text-xs font-semibold ${badgeStyle}`}
                  >
                    {assignment.priority}
                  </span>
                </div>

                {/* Progress Line */}

                <div className="mt-5 h-1 overflow-hidden rounded-full bg-slate-700">
                  <div
                    className={`h-full ${
                      assignment.priority === "High"
                        ? "bg-red-500"
                        : assignment.priority === "Medium"
                        ? "bg-yellow-500"
                        : "bg-emerald-500"
                    }`}
                    style={{
                      width:
                        assignment.priority === "High"
                          ? "100%"
                          : assignment.priority === "Medium"
                          ? "70%"
                          : "40%",
                    }}
                  />
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {daysLeft > 1
                      ? `${daysLeft} days remaining`
                      : daysLeft === 1
                      ? "Due Tomorrow"
                      : daysLeft === 0
                      ? "Due Today"
                      : `${Math.abs(daysLeft)} days overdue`}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      daysLeft < 0
                        ? "bg-red-500/15 text-red-400"
                        : daysLeft <= 2
                        ? "bg-yellow-500/15 text-yellow-400"
                        : "bg-indigo-500/15 text-indigo-400"
                    }`}
                  >
                    {daysLeft < 0
                      ? "Overdue"
                      : daysLeft <= 2
                      ? "Urgent"
                      : "Upcoming"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default UpcomingAssignments;