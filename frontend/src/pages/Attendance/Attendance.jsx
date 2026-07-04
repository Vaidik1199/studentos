import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import AttendanceForm from "../../components/attendance/AttendanceForm";

import {
  getAttendance,
  createAttendance,
  updateAttendance,
  deleteAttendance,
} from "../../services/attendanceService";

function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingAttendance, setEditingAttendance] = useState(null);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await getAttendance();
      setAttendance(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAttendance = async (data) => {
    try {
      await createAttendance(data);
      await fetchAttendance();
    } catch (error) {
      console.error(error);
      alert("Failed to create attendance.");
    }
  };

  const handleUpdateAttendance = async (data) => {
    try {
      await updateAttendance(editingAttendance._id, data);

      setEditingAttendance(null);

      await fetchAttendance();
    } catch (error) {
      console.error(error);
      alert("Failed to update attendance.");
    }
  };

  const handleDeleteAttendance = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this attendance record?"
    );

    if (!confirmed) return;

    try {
      await deleteAttendance(id);
      await fetchAttendance();
    } catch (error) {
      console.error(error);
      alert("Failed to delete attendance.");
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Heading */}
        <div>
          <h1 className="text-4xl font-bold text-white">
            Attendance
          </h1>

          <p className="mt-2 text-slate-400">
            Manage your subject attendance.
          </p>
        </div>

        {/* Form */}
        <AttendanceForm
          onSubmit={
            editingAttendance
              ? handleUpdateAttendance
              : handleCreateAttendance
          }
          editingAttendance={editingAttendance}
          cancelEdit={() => setEditingAttendance(null)}
        />

        {/* Cards */}
        {loading ? (
          <p className="text-slate-400">
            Loading attendance...
          </p>
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
                  : Number(
                      (
                        (item.attendedClasses /
                          item.totalClasses) *
                        100
                      ).toFixed(1)
                    );

              return (
                <div
                  key={item._id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-indigo-500"
                >
                  <h2 className="text-2xl font-bold text-white">
                    {item.subject}
                  </h2>

                  <p className="mt-3 text-lg text-slate-300">
                    {item.attendedClasses} / {item.totalClasses} Classes
                  </p>

                  {/* Progress */}
                  <div className="mt-6">
                    <div className="mb-2 flex justify-between">
                      <span className="text-slate-400">
                        Attendance
                      </span>

                      <span className="font-bold text-white">
                        {percentage}%
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className={`h-full transition-all duration-500 ${
                          percentage >= 75
                            ? "bg-emerald-500"
                            : percentage >= 60
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{
                          width: `${percentage}%`,
                        }}
                      />
                    </div>

                    <p
                      className={`mt-4 font-semibold ${
                        percentage >= 75
                          ? "text-emerald-400"
                          : percentage >= 60
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {percentage >= 75
                        ? "🟢 Excellent Attendance"
                        : percentage >= 60
                        ? "🟡 Need Improvement"
                        : "🔴 Attendance Critical"}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => setEditingAttendance(item)}
                      className="flex-1 rounded-xl bg-amber-500 py-2 font-semibold text-white transition hover:bg-amber-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDeleteAttendance(item._id)
                      }
                      className="flex-1 rounded-xl bg-red-600 py-2 font-semibold text-white transition hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
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