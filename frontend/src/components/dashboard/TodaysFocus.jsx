import { useEffect, useState } from "react";
import { getAssignments } from "../../services/assignmentService";
import { getAttendance } from "../../services/attendanceService";
import { getNotes } from "../../services/noteService";

function TodaysFocus() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [assignmentRes, attendanceRes, notesRes] =
        await Promise.all([
          getAssignments(),
          getAttendance(),
          getNotes(),
        ]);

      const list = [];

      // Overdue Assignments
      assignmentRes.data.forEach((item) => {
        if (
          item.status === "Pending" &&
          new Date(item.dueDate) < new Date()
        ) {
          list.push({
            type: "🔴",
            text: `${item.title} is overdue`,
          });
        }
      });

      // Low Attendance
      attendanceRes.data.forEach((item) => {
        const percentage =
          item.totalClasses === 0
            ? 0
            : (item.attendedClasses /
                item.totalClasses) *
              100;

        if (percentage < 75) {
          list.push({
            type: "⚠️",
            text: `${item.subject} attendance is ${percentage.toFixed(1)}%`,
          });
        }
      });

      // Pinned Notes
      const pinned = notesRes.data.filter(
        (note) => note.pinned
      );

      if (pinned.length > 0) {
        list.push({
          type: "📌",
          text: `${pinned.length} pinned note(s)`,
        });
      }

      setTasks(list);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <h2 className="mb-5 text-xl font-bold text-white">
        🎯 Today's Focus
      </h2>

      {tasks.length === 0 ? (
        <p className="text-emerald-400">
          🎉 Everything looks good today!
        </p>
      ) : (
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="rounded-xl bg-slate-800 p-4"
            >
              <span className="font-semibold text-white">
                {task.type} {task.text}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TodaysFocus;