import { useEffect, useState } from "react";
import { getAssignments } from "../../services/assignmentService";

function UpcomingAssignments() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await getAssignments();

      const upcoming = response.data
        .filter((item) => item.status === "Pending")
        .sort(
          (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
        )
        .slice(0, 5);

      setAssignments(upcoming);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          📅 Upcoming Assignments
        </h2>

        <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
          {assignments.length}
        </span>
      </div>

      {assignments.length === 0 ? (
        <div className="rounded-xl bg-slate-800 p-5 text-center">
          <p className="text-slate-400">
            🎉 No pending assignments.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {assignments.map((item) => (
            <div
              key={item._id}
              className="rounded-xl border border-slate-800 bg-slate-800 p-4 transition hover:border-indigo-500"
            >
              <h3 className="font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                {item.subject}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.priority === "High"
                      ? "bg-red-500/20 text-red-400"
                      : item.priority === "Medium"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-emerald-500/20 text-emerald-400"
                  }`}
                >
                  {item.priority}
                </span>

                <span className="text-xs text-indigo-400">
                  {new Date(item.dueDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UpcomingAssignments;