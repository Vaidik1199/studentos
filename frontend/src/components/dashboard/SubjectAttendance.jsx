import { useEffect, useState } from "react";
import { getAttendance } from "../../services/attendanceService";

function SubjectAttendance() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
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
        📚 Subject Attendance
      </h2>

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

          return (
            <div key={subject._id}>
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium text-white">
                  {subject.subject}
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

              <div className="h-3 overflow-hidden rounded-full bg-slate-800">
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
            No attendance records found.
          </p>
        )}
      </div>
    </div>
  );
}

export default SubjectAttendance;