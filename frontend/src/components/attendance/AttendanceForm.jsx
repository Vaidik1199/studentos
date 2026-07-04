import { useEffect, useState } from "react";

function AttendanceForm({
  onSubmit,
  editingAttendance = null,
  cancelEdit,
}) {
  const [subject, setSubject] = useState("");
  const [attendedClasses, setAttendedClasses] = useState("");
  const [totalClasses, setTotalClasses] = useState("");

  useEffect(() => {
    if (editingAttendance) {
      setSubject(editingAttendance.subject);
      setAttendedClasses(editingAttendance.attendedClasses);
      setTotalClasses(editingAttendance.totalClasses);
    } else {
      setSubject("");
      setAttendedClasses("");
      setTotalClasses("");
    }
  }, [editingAttendance]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      subject,
      attendedClasses: Number(attendedClasses),
      totalClasses: Number(totalClasses),
    });

    if (!editingAttendance) {
      setSubject("");
      setAttendedClasses("");
      setTotalClasses("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-6"
    >
      <h2 className="text-2xl font-semibold text-white">
        {editingAttendance ? "Edit Attendance" : "Add Attendance"}
      </h2>

      <input
        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
        placeholder="Subject Name"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <input
        type="number"
        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
        placeholder="Attended Classes"
        value={attendedClasses}
        onChange={(e) => setAttendedClasses(e.target.value)}
      />

      <input
        type="number"
        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
        placeholder="Total Classes"
        value={totalClasses}
        onChange={(e) => setTotalClasses(e.target.value)}
      />

      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 rounded-xl bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          {editingAttendance ? "Update Attendance" : "Add Attendance"}
        </button>

        {editingAttendance && (
          <button
            type="button"
            onClick={cancelEdit}
            className="flex-1 rounded-xl bg-slate-700 py-3 font-semibold text-white hover:bg-slate-600"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default AttendanceForm;