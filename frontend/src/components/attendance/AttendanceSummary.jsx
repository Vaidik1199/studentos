import {
  Percent,
  Trophy,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";

function AttendanceSummary({ attendance = [] }) {
  const totalClasses = attendance.reduce(
    (sum, item) => sum + item.totalClasses,
    0
  );

  const attendedClasses = attendance.reduce(
    (sum, item) => sum + item.attendedClasses,
    0
  );

  const overall =
    totalClasses === 0
      ? 0
      : Number(
          (
            (attendedClasses / totalClasses) *
            100
          ).toFixed(1)
        );

  const bestSubject =
    attendance.length === 0
      ? null
      : [...attendance].sort((a, b) => {
          const pa =
            a.totalClasses === 0
              ? 0
              : (a.attendedClasses / a.totalClasses) *
                100;

          const pb =
            b.totalClasses === 0
              ? 0
              : (b.attendedClasses / b.totalClasses) *
                100;

          return pb - pa;
        })[0];

  const lowAttendance = attendance.filter((item) => {
    const percentage =
      item.totalClasses === 0
        ? 0
        : (item.attendedClasses /
            item.totalClasses) *
          100;

    return percentage < 75;
  }).length;

  const safeSubjects =
    attendance.length - lowAttendance;

  const cards = [
    {
      title: "Overall Attendance",
      value: `${overall}%`,
      icon: <Percent size={26} />,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Best Subject",
      value: bestSubject
        ? bestSubject.subject
        : "--",
      icon: <Trophy size={26} />,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Need Attention",
      value: lowAttendance,
      icon: <AlertTriangle size={26} />,
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
    {
      title: "Safe Subjects",
      value: safeSubjects,
      icon: <ShieldCheck size={26} />,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-indigo-500"
        >
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl ${card.bg} ${card.color}`}
          >
            {card.icon}
          </div>

          <p className="mt-5 text-sm text-slate-400">
            {card.title}
          </p>

          <h2
            className={`mt-2 text-3xl font-bold ${card.color}`}
          >
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default AttendanceSummary;