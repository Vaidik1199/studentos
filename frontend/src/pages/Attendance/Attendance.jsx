import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import AttendanceForm from "../../components/attendance/AttendanceForm";

import toast from "react-hot-toast";
import ConfirmModal from "../../components/ui/ConfirmModal";
import PageTransition from "../../components/common/PageTransition";
import SkeletonCard from "../../components/common/SkeletonCard";
import Modal from "../../components/ui/Modal";
import { Plus } from "lucide-react";
import AttendanceSummary from "../../components/attendance/AttendanceSummary";
import AttendanceCard from "../../components/attendance/AttendanceCard";

import {
  getAttendance,
  createAttendance,
  updateAttendance,
  deleteAttendance,
} from "../../services/attendanceService";

function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [filterBy, setFilterBy] = useState("all");
  const [loading, setLoading] = useState(true);
  const [editingAttendance, setEditingAttendance] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await getAttendance();
      setAttendance(response.data);
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Failed to load attendance.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAttendance = async (data) => {
    try {
      await createAttendance(data);

      toast.success("Attendance added successfully.");

      setShowFormModal(false); // Close modal
      setEditingAttendance(null);

      await fetchAttendance();
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to create attendance.",
      );
    }
  };

  const handleUpdateAttendance = async (data) => {
    try {
      await updateAttendance(editingAttendance._id, data);

      toast.success("Attendance updated successfully.");

      setEditingAttendance(null);
      setShowFormModal(false); // Close modal

      await fetchAttendance();
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to update attendance.",
      );
    }
  };

  const handleDeleteAttendance = async () => {
    try {
      await deleteAttendance(deleteId);

      toast.success("Attendance deleted successfully.");

      setShowDeleteModal(false);
      setDeleteId(null);

      await fetchAttendance();
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to delete attendance.",
      );
    }
  };

  const filteredAttendance = attendance
    .filter((item) => item.subject.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => {
      const percentage =
        item.totalClasses === 0
          ? 0
          : (item.attendedClasses / item.totalClasses) * 100;

      if (filterBy === "safe") return percentage >= 75;

      if (filterBy === "warning") return percentage >= 60 && percentage < 75;

      if (filterBy === "critical") return percentage < 60;

      return true;
    })
    .sort((a, b) => {
      const pa =
        a.totalClasses === 0 ? 0 : (a.attendedClasses / a.totalClasses) * 100;

      const pb =
        b.totalClasses === 0 ? 0 : (b.attendedClasses / b.totalClasses) * 100;

      switch (sortBy) {
        case "highest":
          return pb - pa;

        case "lowest":
          return pa - pb;

        case "az":
          return a.subject.localeCompare(b.subject);

        case "za":
          return b.subject.localeCompare(a.subject);

        default:
          return 0;
      }
    });

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="space-y-8">
          {/* Heading */}

          <div>
            <h1 className="text-4xl font-bold text-white">Attendance</h1>

            <p className="mt-2 text-slate-400">
              Manage your subject attendance.
            </p>
          </div>

          <AttendanceSummary attendance={filteredAttendance} />

          {/* Search */}

          <div className="mb-6 flex flex-col gap-4 lg:flex-row">
            <input
              type="text"
              placeholder="Search subject..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-indigo-500"
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 text-white"
            >
              <option value="default">Sort</option>
              <option value="highest">Highest %</option>
              <option value="lowest">Lowest %</option>
              <option value="az">A → Z</option>
              <option value="za">Z → A</option>
            </select>

            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 text-white"
            >
              <option value="all">All</option>
              <option value="safe">Safe</option>
              <option value="warning">Warning</option>
              <option value="critical">Critical</option>
            </select>
          </div>

          {/* Form */}

          {/* Cards */}
          {loading ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : filteredAttendance.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
              <h2 className="text-xl font-semibold text-white">
                No Attendance Records
              </h2>

              <p className="mt-2 text-slate-400">
                Start tracking your attendance by adding your first subject.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredAttendance.map((item) => (
                <AttendanceCard
                  key={item._id}
                  item={item}
                  onEdit={() => {
                    setEditingAttendance(item);
                    setShowFormModal(true);
                  }}
                  onDelete={() => {
                    setDeleteId(item._id);
                    setShowDeleteModal(true);
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <Modal
          isOpen={showFormModal}
          title={editingAttendance ? "Update Attendance" : "Add Attendance"}
          onClose={() => {
            setShowFormModal(false);
            setEditingAttendance(null);
          }}
        >
          <AttendanceForm
            onSubmit={
              editingAttendance
                ? handleUpdateAttendance
                : handleCreateAttendance
            }
            editingAttendance={editingAttendance}
            cancelEdit={() => {
              setEditingAttendance(null);
              setShowFormModal(false);
            }}
          />
        </Modal>

        <button
          onClick={() => {
            setEditingAttendance(null);
            setShowFormModal(true);
          }}
          className="group fixed bottom-8 right-8 z-40 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:rounded-full"
        >
          <Plus
            size={30}
            strokeWidth={3}
            className="text-white transition-transform duration-300 group-hover:rotate-90"
          />
        </button>

        <ConfirmModal
          isOpen={showDeleteModal}
          title="Delete Attendance"
          message="Are you sure you want to delete this attendance record?"
          onConfirm={handleDeleteAttendance}
          onCancel={() => {
            setShowDeleteModal(false);
            setDeleteId(null);
          }}
        />
      </PageTransition>
    </DashboardLayout>
  );
}

export default Attendance;
