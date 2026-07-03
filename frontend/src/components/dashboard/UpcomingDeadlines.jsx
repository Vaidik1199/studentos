const deadlines = [
  {
    subject: "Database Management",
    task: "Assignment 3",
    due: "Tomorrow",
  },
  {
    subject: "Operating Systems",
    task: "Quiz",
    due: "2 Days",
  },
  {
    subject: "Software Engineering",
    task: "Mini Project",
    due: "5 Days",
  },
];

function UpcomingDeadlines() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Upcoming Deadlines
      </h2>

      <div className="space-y-4">
        {deadlines.map((item) => (
          <div
            key={item.task}
            className="rounded-xl border border-slate-800 p-4 transition hover:border-slate-700"
          >
            <h3 className="font-semibold text-white">
              {item.task}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              {item.subject}
            </p>

            <span className="mt-3 inline-block rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
              Due: {item.due}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingDeadlines;