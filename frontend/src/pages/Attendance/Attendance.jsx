import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import { getAttendance } from "../../services/attendanceService";

function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await getAttendance();

      console.log("Full Response:", response);
      console.log("Attendance Array:", response.data);
      console.log("Is Array?", Array.isArray(response.data));

      setAttendance(response.data);
    } catch (error) {
      console.error("❌ Attendance Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Attendance
          </h1>

          <p className="mt-2 text-slate-400">
            Manage your subject attendance.
          </p>
        </div>

        {loading ? (
          <p className="text-slate-400">Loading attendance...</p>
        ) : attendance.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h2 className="text-xl font-semibold text-white">
              No Attendance Records
            </h2>

            <p className="mt-2 text-slate-400">
              Add your first subject to get started.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {attendance.map((item) => {
              const percentage =
                item.totalClasses === 0
                  ? 0
                  : (
                      (item.attendedClasses / item.totalClasses) *
                      100
                    ).toFixed(1);

              return (
                <div
                  key={item._id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                >
                  <h2 className="text-xl font-semibold text-white">
                    {item.subject}
                  </h2>

                  <p className="mt-3 text-slate-400">
                    {item.attendedClasses} / {item.totalClasses} Classes
                  </p>

                  <p className="mt-4 text-3xl font-bold text-indigo-400">
                    {percentage}%
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Attendance;