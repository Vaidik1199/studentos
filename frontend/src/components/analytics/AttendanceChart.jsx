import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function AttendanceChart({ attendance }) {
  const percentage = attendance.averageAttendance || 0;

  const data = [
    {
      name: "Attendance",
      value: percentage,
      fill:
        percentage >= 75
          ? "#22C55E"
          : percentage >= 60
          ? "#F59E0B"
          : "#EF4444",
    },
  ];

  const getStatus = () => {
    if (percentage >= 90) return "Excellent";
    if (percentage >= 75) return "Good";
    if (percentage >= 60) return "Warning";
    return "Critical";
  };

  const getStatusColor = () => {
    if (percentage >= 90) return "text-emerald-400";
    if (percentage >= 75) return "text-green-400";
    if (percentage >= 60) return "text-amber-400";
    return "text-red-400";
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Attendance Overview
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Your overall attendance performance.
        </p>
      </div>

      {attendance.totalClasses === 0 ? (
        <div className="flex h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950">
          <div className="text-6xl">📚</div>

          <h3 className="mt-5 text-xl font-semibold text-white">
            No Attendance Records
          </h3>

          <p className="mt-2 max-w-xs text-center text-slate-400">
            Start adding your subjects to track attendance.
          </p>
        </div>
      ) : (
        <>
          <div className="relative mx-auto h-[280px] w-full max-w-sm">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                innerRadius="70%"
                outerRadius="95%"
                barSize={16}
                data={data}
                startAngle={90}
                endAngle={-270}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  tick={false}
                />

                <RadialBar
                  background={{
                    fill: "#1e293b",
                  }}
                  dataKey="value"
                  cornerRadius={20}
                />
              </RadialBarChart>
            </ResponsiveContainer>

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-5xl font-bold text-white">
                {percentage.toFixed(1)}%
              </h2>

              <p className={`mt-2 text-lg font-semibold ${getStatusColor()}`}>
                {getStatus()}
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-5 text-center">
              <h3 className="text-3xl font-bold text-indigo-400">
                {attendance.attendedClasses}
              </h3>

              <p className="mt-1 text-sm text-slate-300">
                Present Classes
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">
                {attendance.totalClasses}
              </h3>

              <p className="mt-1 text-sm text-slate-300">
                Total Classes
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-center">
            <p className="text-sm text-slate-400">
              Required Attendance
            </p>

            <h3 className="mt-2 text-2xl font-bold text-indigo-400">
              75%
            </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default AttendanceChart;