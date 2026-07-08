function AttendanceAlert({ attendance = [] }) {
  if (attendance.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            ⚠️ Attendance Alert
          </h2>

          <span className="rounded-full bg-slate-700 px-3 py-1 text-xs font-semibold text-white">
            0
          </span>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5 text-center">
          <h3 className="text-lg font-semibold text-slate-300">
            📚 No Attendance Data
          </h3>

          <p className="mt-2 text-slate-400">
            Add your subjects to start tracking attendance.
          </p>
        </div>
      </div>
    );
  }

  const lowAttendance = attendance.filter((subject) => {
    const percentage =
      subject.totalClasses === 0
        ? 0
        : (subject.attendedClasses / subject.totalClasses) * 100;

    return percentage < 75;
  });

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          ⚠️ Attendance Alert
        </h2>

        <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
          {lowAttendance.length}
        </span>
      </div>

      {lowAttendance.length === 0 ? (
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-center">
          <h3 className="text-lg font-semibold text-emerald-400">
            🎉 Excellent!
          </h3>

          <p className="mt-2 text-slate-300">
            All your subjects are above the required attendance.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {lowAttendance.map((subject) => {
            const percentage = (
              (subject.attendedClasses / subject.totalClasses) *
              100
            ).toFixed(1);

            return (
              <div
                key={subject._id}
                className="rounded-xl border border-red-500/30 bg-red-500/5 p-4 transition hover:border-red-500"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">
                    {subject.subject}
                  </h3>

                  <span className="font-bold text-red-400">
                    {percentage}%
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-400">
                  Present
                  <span className="mx-1 font-semibold text-white">
                    {subject.attendedClasses}
                  </span>
                  /
                  <span className="mx-1 font-semibold text-white">
                    {subject.totalClasses}
                  </span>
                  Classes
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AttendanceAlert;