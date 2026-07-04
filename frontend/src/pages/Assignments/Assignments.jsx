import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import AssignmentForm from "../../components/assignments/AssignmentForm";
import AssignmentCard from "../../components/assignments/AssignmentCard";

import toast from "react-hot-toast";

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

    await fetchAssignments();
  } catch (error) {
    console.error(error);
    toast.error("Failed to create assignment.");
  }
  };

  const handleUpdateAssignment = async (data) => {
  try {
    await updateAssignment(editingAssignment._id, data);

    toast.success("Assignment updated successfully.");

    setEditingAssignment(null);

    await fetchAssignments();
  } catch (error) {
    console.error(error);
    toast.error("Failed to update assignment.");
  }
  };

 const handleToggleStatus = async (assignment) => {
  try {
    await updateAssignment(assignment._id, {
      ...assignment,
      status:
        assignment.status === "Pending"
          ? "Completed"
          : "Pending",
    });

    toast.success(
      assignment.status === "Pending"
        ? "Assignment marked as completed."
        : "Assignment marked as pending."
    );

    await fetchAssignments();
  } catch (error) {
    console.error(error);
    toast.error("Failed to update assignment.");
  }
  };

  const handleDeleteAssignment = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this assignment?"
  );

  if (!confirmed) return;

  try {
    await deleteAssignment(id);

    toast.success("Assignment deleted successfully.");

    await fetchAssignments();
  } catch (error) {
    console.error(error);
    toast.error("Failed to delete assignment.");
  }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Assignments
          </h1>

          <p className="mt-2 text-slate-400">
            Manage your assignments and deadlines.
          </p>
        </div>

        <AssignmentForm
          onSubmit={
            editingAssignment
              ? handleUpdateAssignment
              : handleCreateAssignment
          }
          editingAssignment={editingAssignment}
          cancelEdit={() => setEditingAssignment(null)}
        />

        {loading ? (
          <p className="text-slate-400">
            Loading assignments...
          </p>
        ) : assignments.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h2 className="text-xl font-semibold text-white">
              No Assignments Found
            </h2>

            <p className="mt-2 text-slate-400">
              Create your first assignment.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {assignments.map((assignment) => (
              <AssignmentCard
                key={assignment._id}
                assignment={assignment}
                onEdit={setEditingAssignment}
                onDelete={handleDeleteAssignment}
                onToggleStatus={handleToggleStatus}
              />
            ))}
          </div>
        )}

      </div>
    </DashboardLayout>
  );
}

export default Assignments;