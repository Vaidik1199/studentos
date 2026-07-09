import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import AssignmentForm from "../../components/assignments/AssignmentForm";
import AssignmentCard from "../../components/assignments/AssignmentCard";

import toast from "react-hot-toast";
import ConfirmModal from "../../components/ui/ConfirmModal";
import PageTransition from "../../components/common/PageTransition";
import SkeletonCard from "../../components/common/SkeletonCard";

import Modal from "../../components/ui/Modal";
import AssignmentSummary from "../../components/assignments/AssignmentSummary";
import { Plus } from "lucide-react";

import {
  getAssignments,
  createAssignment,
  updateAssignment,
  deleteAssignment,
} from "../../services/assignmentService";

function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingAssignment, setEditingAssignment] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [filterBy, setFilterBy] = useState("all");
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await getAssignments();
      setAssignments(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAssignment = async (data) => {
    try {
      await createAssignment(data);

      toast.success("Assignment created successfully.");
      setShowFormModal(false);

      await fetchAssignments();
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to create assignment.",
      );
    }
  };

  const handleUpdateAssignment = async (data) => {
    try {
      await updateAssignment(editingAssignment._id, data);

      toast.success("Assignment updated successfully.");
      setShowFormModal(false);

      setEditingAssignment(null);

      await fetchAssignments();
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Failed to update assignment.",
      );
    }
  };

  const handleToggleStatus = async (assignment) => {
    try {
      await updateAssignment(assignment._id, {
        ...assignment,
        status: assignment.status === "Pending" ? "Completed" : "Pending",
      });

      toast.success(
        assignment.status === "Pending"
          ? "Assignment marked as completed."
          : "Assignment marked as pending.",
      );

      await fetchAssignments();
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to update assignment.",
      );
    }
  };

  const handleDeleteAssignment = async () => {
    try {
      await deleteAssignment(deleteId);

      toast.success("Assignment deleted successfully.");

      setShowDeleteModal(false);
      setDeleteId(null);

      await fetchAssignments();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete assignment.");
    }
  };

  const filteredAssignments = assignments
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => {
      if (filterBy === "pending") return item.status === "Pending";

      if (filterBy === "completed") return item.status === "Completed";

      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "priority":
          return (
            ["High", "Medium", "Low"].indexOf(a.priority) -
            ["High", "Medium", "Low"].indexOf(b.priority)
          );

        case "duedate":
          return new Date(a.dueDate) - new Date(b.dueDate);

        case "az":
          return a.title.localeCompare(b.title);

        default:
          return 0;
      }
    });

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Assignments
            </h1>

            <p className="mt-2 text-slate-400">
              Manage your assignments and deadlines.
            </p>
          </div>

          <AssignmentSummary assignments={filteredAssignments} />

          <div className="mt-8 mb-8 flex flex-col gap-4 md:flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search assignments..."
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-indigo-500"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-4 text-white"
            >
              <option value="default">Sort</option>
              <option value="priority">Priority</option>
              <option value="duedate">Due Date</option>
              <option value="az">A → Z</option>
            </select>
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-4 text-white"
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {loading ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : filteredAssignments.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/60 p-10 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-3xl">
                📋
              </div>

              <h2 className="text-2xl font-bold text-white">
                No Assignments Found
              </h2>

              <p className="mt-3 text-slate-400">
                Create your first assignment and stay on top of your deadlines.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredAssignments.map((assignment) => (
                <AssignmentCard
                  key={assignment._id}
                  assignment={assignment}
                  onEdit={(assignment) => {
                    setEditingAssignment(assignment);
                    setShowFormModal(true);
                  }}
                  onDelete={(id) => {
                    setDeleteId(id);
                    setShowDeleteModal(true);
                  }}
                  onToggleStatus={handleToggleStatus}
                />
              ))}
            </div>
          )}
        </div>

        <Modal
          isOpen={showFormModal}
          title={editingAssignment ? "Update Assignment" : "Add Assignment"}
          onClose={() => {
            setEditingAssignment(null);
            setShowFormModal(false);
          }}
        >
          <AssignmentForm
            onSubmit={
              editingAssignment
                ? handleUpdateAssignment
                : handleCreateAssignment
            }
            editingAssignment={editingAssignment}
            cancelEdit={() => {
              setEditingAssignment(null);
              setShowFormModal(false);
            }}
          />
        </Modal>

        <button
          onClick={() => {
            setEditingAssignment(null);
            setShowFormModal(true);
          }}
          className="group fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:rounded-full"
        >
          <Plus
            size={30}
            strokeWidth={3}
            className="text-white transition-transform duration-300 group-hover:rotate-90"
          />
        </button>

        <ConfirmModal
          isOpen={showDeleteModal}
          title="Delete Assignment"
          message="Are you sure you want to delete this assignment?"
          onConfirm={handleDeleteAssignment}
          onCancel={() => {
            setShowDeleteModal(false);
            setDeleteId(null);
          }}
        />
      </PageTransition>
    </DashboardLayout>
  );
}

export default Assignments;
