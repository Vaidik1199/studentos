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

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold text-white">
        📚 Subject-wise Attendance
      </h2>

      <div className="space-y-5">
        {subjects.map((item) => {
          const percentage =
            item.totalClasses === 0
              ? 0
              : Number(
                  (
                    (item.attendedClasses /
                      item.totalClasses) *
                    100
                  ).toFixed(1)
                );

          return (
            <div key={item._id}>
              <div className="mb-2 flex justify-between">
                <span className="font-medium text-white">
                  {item.subject}
                </span>

                <span
                  className={`font-bold ${
                    percentage >= 75
                      ? "text-emerald-400"
                      : percentage >= 60
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {percentage}%
                </span>
              </div>

              <div className="h-3 rounded-full bg-slate-800">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    percentage >= 75
                      ? "bg-emerald-500"
                      : percentage >= 60
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
            </div>
          );
        })}

        {subjects.length === 0 && (
          <p className="text-center text-slate-400">
            No attendance data available.
          </p>
        )}
      </div>
    </div>
  );
}

export default SubjectAttendance;