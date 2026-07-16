import { Link } from "react-router-dom";

function AttendanceAlert({ attendance = [] }) {
  if (attendance.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Attendance Alerts
            </h2>

            <p className="text-sm text-slate-400">
              Subjects that require your attention.
            </p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-lg">
            📚
          </div>
        </div>

        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-800/40 p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-3xl">
            📖
          </div>

          <h3 className="text-xl font-semibold text-white">
            No Attendance Data
          </h3>

          <p className="mt-2 text-slate-400">
            Add your subjects to start monitoring attendance.
          </p>
        </div>
      </div>
    );
  }

  const lowAttendance = attendance
    .filter((subject) => {
      const percentage =
        subject.totalClasses === 0
          ? 0
          : (subject.attendedClasses / subject.totalClasses) * 100;

      return percentage < 75;
    })
    .sort((a, b) => {
      const aPercentage =
        a.totalClasses === 0
          ? 0
          : (a.attendedClasses / a.totalClasses) * 100;

      const bPercentage =
        b.totalClasses === 0
          ? 0
          : (b.attendedClasses / b.totalClasses) * 100;

      return aPercentage - bPercentage; // Lowest attendance first
    });

  const criticalSubjects = lowAttendance.slice(0, 2);

  return (
  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
    {/* Header */}

    <div className="mb-6 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Attendance Alerts
        </h2>

        <p className="text-sm text-slate-400">
          Subjects below the 75% attendance requirement.
        </p>
      </div>

      <div
        className={`flex h-11 min-w-[44px] items-center justify-center rounded-2xl px-3 font-bold ${
          lowAttendance.length === 0
            ? "bg-emerald-500/20 text-emerald-400"
            : "bg-red-500/20 text-red-400"
        }`}
      >
        {lowAttendance.length}
      </div>
    </div>

    {lowAttendance.length === 0 ? (
      <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-green-500/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-3xl">
          🎉
        </div>

        <h3 className="text-xl font-bold text-emerald-400">
          Excellent Attendance
        </h3>

        <p className="mt-2 text-slate-300">
          Every subject is above the required attendance percentage.
        </p>
      </div>
    ) : (
      <>
        <div className="space-y-5">
          {criticalSubjects.map((subject) => {
            const percentage =
              subject.totalClasses === 0
                ? 0
                : Number(
                    (
                      (subject.attendedClasses /
                        subject.totalClasses) *
                      100
                    ).toFixed(1)
                  );

            const color =
              percentage >= 60
                ? "bg-yellow-500"
                : "bg-red-500";

            return (
              <div
                key={subject._id}
                className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5 transition-all duration-300 hover:border-red-400 hover:bg-slate-800"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {subject.subject}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {subject.attendedClasses} / {subject.totalClasses} classes
                      attended
                    </p>
                  </div>

                  <span className="rounded-xl bg-red-500/15 px-3 py-1 text-sm font-bold text-red-400">
                    {percentage}%
                  </span>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-700">
                  <div
                    className={`h-full rounded-full ${color} transition-all duration-700`}
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>

                <p className="mt-4 text-xs text-slate-400">
                  {percentage >= 60
                    ? "⚠️ Attend upcoming lectures to safely cross 75%."
                    : "🚨 Attendance is critically low. Prioritize this subject."}
                </p>
              </div>
            );
          })}
        </div>

        {lowAttendance.length > 2 && (
          <Link
            to="/attendance"
            className="mt-5 block text-center text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
          >
            Showing the 2 most critical subjects • View all{" "}
            {lowAttendance.length} alerts →
          </Link>
        )}
      </>
    )}
  </div>
);
}
export default AttendanceAlert;