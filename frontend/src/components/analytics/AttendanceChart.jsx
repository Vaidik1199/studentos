import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

function AttendanceChart({ attendance }) {
  const data = [
    {
      name: "Attendance",
      value: attendance.averageAttendance,
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Attendance
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />

          <Bar
            dataKey="value"
            fill="#6366f1"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AttendanceChart;