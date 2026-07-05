import { useEffect, useState } from "react";
import { getAttendance } from "../../services/attendanceService";

function AttendanceAlert() {
  const [lowAttendance, setLowAttendance] = useState([]);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await getAttendance();

      const alerts = response.data.filter((subject) => {
        const percentage =
          subject.totalClasses === 0
            ? 0
            : (subject.attendedClasses / subject.totalClasses) * 100;

        return percentage < 75;
      });

      setLowAttendance(alerts);
    } catch (error) {
      console.error(error);
    }
  };

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
        <div className="rounded-xl bg-slate-800 p-5 text-center">
          <p className="text-emerald-400 font-medium">
            🎉 Great! All subjects are above 75%.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {lowAttendance.map((subject) => {
            const percentage =
              subject.totalClasses === 0
                ? 0
                : (
                    (subject.attendedClasses /
                      subject.totalClasses) *
                    100
                  ).toFixed(1);

            return (
              <div
                key={subject._id}
                className="rounded-xl border border-red-500/30 bg-slate-800 p-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">
                    {subject.subject}
                  </h3>

                  <span className="text-red-400 font-bold">
                    {percentage}%
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-400">
                  {subject.attendedClasses} / {subject.totalClasses} Classes
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