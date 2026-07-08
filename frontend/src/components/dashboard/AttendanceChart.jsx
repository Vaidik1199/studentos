import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
} from "recharts";

import { getAttendance } from "../../services/attendanceService";

function AttendanceChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await getAttendance();

      const chartData = response.data.map((item) => ({
        subject: item.subject,
        attendance:
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

      setData(chartData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

      <h2 className="mb-6 text-xl font-bold text-white">
        📈 Subject Attendance
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="subject"
              stroke="#94a3b8"
            />

            <YAxis
              domain={[0, 100]}
              stroke="#94a3b8"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="attendance"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{
                r: 5,
              }}
              activeDot={{
                r: 8,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default AttendanceChart;