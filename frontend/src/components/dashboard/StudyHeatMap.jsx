import { useEffect, useState } from "react";
import { getNotes } from "../../services/noteService";
import { getAssignments } from "../../services/assignmentService";
import { getAttendance } from "../../services/attendanceService";

function StudyHeatMap() {
  const [stats, setStats] = useState({
    notes: 0,
    assignments: 0,
    attendance: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [notesRes, assignmentRes, attendanceRes] =
        await Promise.all([
          getNotes(),
          getAssignments(),
          getAttendance(),
        ]);

      const attendancePercentage =
        attendanceRes.data.length === 0
          ? 0
          : (
              attendanceRes.data.reduce(
                (sum, item) =>
                  sum +
                  (item.totalClasses === 0
                    ? 0
                    : (item.attendedClasses /
                        item.totalClasses) *
                      100),
                0
              ) / attendanceRes.data.length
            ).toFixed(1);

      setStats({
        notes: notesRes.data.length,
        assignments: assignmentRes.data.length,
        attendance: attendancePercentage,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const cards = [
    {
      title: "Notes",
      value: stats.notes,
      color: "from-indigo-500 to-violet-500",
      icon: "📝",
    },
    {
      title: "Assignments",
      value: stats.assignments,
      color: "from-emerald-500 to-green-500",
      icon: "📚",
    },
    {
      title: "Attendance",
      value: `${stats.attendance}%`,
      color: "from-orange-500 to-red-500",
      icon: "🎯",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold text-white">
        📊 Study Overview
      </h2>

      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`rounded-2xl bg-gradient-to-r ${card.color} p-5`}
          >
            <div className="text-4xl">
              {card.icon}
            </div>

            <p className="mt-3 text-sm text-white/80">
              {card.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              {card.value}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyHeatMap;