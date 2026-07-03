const activities = [
  {
    title: "AI generated DBMS Notes",
    time: "2 min ago",
  },
  {
    title: "Uploaded HCI PDF",
    time: "20 min ago",
  },
  {
    title: "Assignment submitted",
    time: "1 hour ago",
  },
  {
    title: "Attendance updated",
    time: "Today",
  },
];

function RecentActivity() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl border border-slate-800 p-4 transition hover:border-slate-700"
          >
            <p className="font-medium text-white">
              {activity.title}
            </p>

            <span className="text-sm text-slate-400">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;