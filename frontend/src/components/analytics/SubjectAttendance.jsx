import { useEffect, useState } from "react";
import { getAttendance } from "../../services/attendanceService";

function SubjectAttendance() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await getAttendance();
      setSubjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getStatus = (percentage) => {
    if (percentage >= 90) {
      return {
        text: "Excellent",
        badge:
          "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        bar: "from-emerald-500 to-green-400",
      };
    }

    if (percentage >= 75) {
      return {
        text: "Good",
        badge:
          "bg-green-500/10 text-green-400 border-green-500/20",
        bar: "from-green-500 to-lime-400",
      };
    }

    if (percentage >= 60) {
      return {
        text: "Warning",
        badge:
          "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
        bar: "from-yellow-500 to-amber-400",
      };
    }

    return {
      text: "Critical",
      badge:
        "bg-red-500/10 text-red-400 border-red-500/20",
      bar: "from-red-500 to-rose-400",
    };
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Subject-wise Attendance
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Attendance overview for every tracked subject.
        </p>
      </div>

      {subjects.length === 0 ? (
        <div className="flex h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950">
          <div className="text-6xl">📚</div>

          <h3 className="mt-5 text-xl font-semibold text-white">
            No Subjects Added
          </h3>

          <p className="mt-2 max-w-sm text-center text-slate-400">
            Start tracking your attendance to view detailed analytics.
          </p>
        </div>
      ) : (
        <div className="space-y-5">

          {subjects.map((subject) => {
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

            const status = getStatus(percentage);

            return (
              <div
                key={subject._id}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-all duration-300 hover:border-indigo-500 hover:shadow-xl"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  <div className="min-w-0 flex-1">

                    <div className="flex flex-wrap items-center gap-3">

                      <h3 className="truncate text-lg font-semibold text-white">
                        {subject.subject}
                      </h3>

                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${status.badge}`}
                      >
                        {status.text}
                      </span>

                    </div>

                    <div className="mt-4">

                      <div className="mb-2 flex items-center justify-between text-sm">

                        <span className="text-slate-400">
                          Attendance Progress
                        </span>

                        <span className="font-semibold text-white">
                          {percentage}%
                        </span>

                      </div>

                      <div className="h-3 overflow-hidden rounded-full bg-slate-800">

                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${status.bar} transition-all duration-700`}
                          style={{
                            width: `${percentage}%`,
                          }}
                        />

                      </div>

                    </div>

                  </div>

                  <div className="grid grid-cols-2 gap-3 lg:w-56">

                    <div className="rounded-xl bg-slate-800 p-4 text-center">
                      <p className="text-xs text-slate-400">
                        Present
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-emerald-400">
                        {subject.attendedClasses}
                      </h3>
                    </div>

                    <div className="rounded-xl bg-slate-800 p-4 text-center">
                      <p className="text-xs text-slate-400">
                        Total
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-indigo-400">
                        {subject.totalClasses}
                      </h3>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}

export default SubjectAttendance;