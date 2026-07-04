import { useEffect, useState } from "react";

function AssignmentForm({
  onSubmit,
  editingAssignment = null,
  cancelEdit,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  useEffect(() => {
    if (editingAssignment) {
      setTitle(editingAssignment.title);
      setDescription(editingAssignment.description);
      setDueDate(
        editingAssignment.dueDate
          ? editingAssignment.dueDate.slice(0, 10)
          : ""
      );
      setPriority(editingAssignment.priority);
    } else {
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("Medium");
    }
  }, [editingAssignment]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      title,
      description,
      dueDate,
      priority,
    });

    if (!editingAssignment) {
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("Medium");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-6"
    >
      <h2 className="text-2xl font-semibold text-white">
        {editingAssignment
          ? "Edit Assignment"
          : "Add Assignment"}
      </h2>

      <input
        type="text"
        placeholder="Assignment Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none focus:border-indigo-500"
      />

      <textarea
        rows="4"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none focus:border-indigo-500"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none focus:border-indigo-500"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none focus:border-indigo-500"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          {editingAssignment
            ? "Update Assignment"
            : "Add Assignment"}
        </button>

        {editingAssignment && (
          <button
            type="button"
            onClick={cancelEdit}
            className="flex-1 rounded-xl bg-slate-700 py-3 font-semibold text-white transition hover:bg-slate-600"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default AssignmentForm;