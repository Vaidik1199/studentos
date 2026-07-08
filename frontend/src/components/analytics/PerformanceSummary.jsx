import { useEffect, useState } from "react";
import { getAttendance } from "../../services/attendanceService";
import {
  Trophy,
  AlertTriangle,
  Target,
  BookOpen,
} from "lucide-react";

function PerformanceSummary() {
  const [summary, setSummary] = useState({
    best: null,
    worst: null,
    average: 0,
    attended: 0,
    total: 0,
  });

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {
      const response = await getAttendance();

      const attendance = response.data;

      if (attendance.length === 0) return;

      const subjects = attendance.map((item) => ({
        ...item,
        percentage:
          item.totalClasses === 0
            ? 0
            : Number(
                (
                  (item.attendedClasses /
                    item.totalClasses) *
                  100
                ).toFixed(1)
              ),
      }));

      const best = [...subjects].sort(
        (a, b) => b.percentage - a.percentage
      )[0];

      const worst = [...subjects].sort(
        (a, b) => a.percentage - b.percentage
      )[0];

      const attended = attendance.reduce(
        (sum, item) => sum + item.attendedClasses,
        0
      );

      const total = attendance.reduce(
        (sum, item) => sum + item.totalClasses,
        0
      );

      const average =
        total === 0
          ? 0
          : Number(
              (
                (attended / total) *
                100
              ).toFixed(1)
            );

      setSummary({
        best,
        worst,
        average,
        attended,
        total,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const cards = [
    {
      title: "Best Subject",
      value: summary.best?.subject || "--",
      extra: `${summary.best?.percentage || 0}%`,
      icon: Trophy,
      color:
        "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
      title: "Needs Attention",
      value: summary.worst?.subject || "--",
      extra: `${summary.worst?.percentage || 0}%`,
      icon: AlertTriangle,
      color:
        "bg-red-500/10 text-red-400 border-red-500/20",
    },
    {
      title: "Overall Attendance",
      value: `${summary.average}%`,
      extra:
        summary.average >= 75
          ? "On Track"
          : "Needs Improvement",
      icon: Target,
      color:
        "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    },
    {
      title: "Classes Attended",
      value: `${summary.attended}/${summary.total}`,
      extra: "Present / Total",
      icon: BookOpen,
      color:
        "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Performance Summary
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Quick overview of your academic performance.
        </p>
      </div>

      {summary.total === 0 ? (
        <div className="flex h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950">

          <div className="text-6xl">📈</div>

          <h3 className="mt-5 text-xl font-semibold text-white">
            No Performance Data
          </h3>

          <p className="mt-2 text-center text-slate-400">
            Add attendance records to view your performance summary.
          </p>

        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-sm text-slate-400">
                      {card.title}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {card.value}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {card.extra}
                    </p>

                  </div>

                  <div
                    className={`rounded-2xl border p-3 ${card.color}`}
                  >
                    <Icon size={24} />
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}

export default PerformanceSummary;