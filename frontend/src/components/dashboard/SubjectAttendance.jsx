const subjects = [
  {
    name: "Database Management",
    attendance: 92,
  },
  {
    name: "Operating Systems",
    attendance: 84,
  },
  {
    name: "Computer Networks",
    attendance: 74,
  },
  {
    name: "Software Engineering",
    attendance: 68,
  },
];

function SubjectAttendance() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Subject-wise Attendance
      </h2>

      <div className="space-y-5">
        {subjects.map((subject) => (
          <div key={subject.name}>
            <div className="mb-2 flex justify-between">
              <span className="text-white">
                {subject.name}
              </span>

              <span
                className={`font-semibold ${
                  subject.attendance >= 75
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                {subject.attendance}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  subject.attendance >= 75
                    ? "bg-emerald-500"
                    : "bg-red-500"
                }`}
                style={{
                  width: `${subject.attendance}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectAttendance;