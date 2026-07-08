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
            : (
                (item.attendedClasses /
                  item.totalClasses) *
                100
              ).toFixed(1),
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
          : ((attended / total) * 100).toFixed(1);

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

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold text-white">
        📊 Performance Summary
      </h2>

      <div className="space-y-5">

        <div className="flex items-center gap-4 rounded-xl bg-slate-800 p-4">
          <Trophy className="text-yellow-400" />
          <div>
            <p className="text-sm text-slate-400">
              Best Subject
            </p>

            <h3 className="font-bold text-white">
              {summary.best?.subject || "--"}
            </h3>

            <span className="text-emerald-400">
              {summary.best?.percentage || 0}%
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-slate-800 p-4">
          <AlertTriangle className="text-red-400" />
          <div>
            <p className="text-sm text-slate-400">
              Needs Attention
            </p>

            <h3 className="font-bold text-white">
              {summary.worst?.subject || "--"}
            </h3>

            <span className="text-red-400">
              {summary.worst?.percentage || 0}%
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-slate-800 p-4">
          <Target className="text-indigo-400" />
          <div>
            <p className="text-sm text-slate-400">
              Overall Attendance
            </p>

            <h3 className="font-bold text-white">
              {summary.average}%
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-slate-800 p-4">
          <BookOpen className="text-cyan-400" />
          <div>
            <p className="text-sm text-slate-400">
              Classes Attended
            </p>

            <h3 className="font-bold text-white">
              {summary.attended} / {summary.total}
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PerformanceSummary;