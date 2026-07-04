import { useEffect, useState } from "react";

function NoteForm({
  onSubmit,
  editingNote = null,
  cancelEdit,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      title,
      content,
    });

    if (!editingNote) {
      setTitle("");
      setContent("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-6"
    >
      <h2 className="text-2xl font-semibold text-white">
        {editingNote ? "Edit Note" : "Add Note"}
      </h2>

      <input
        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        rows="6"
        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 rounded-xl bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          {editingNote ? "Update Note" : "Add Note"}
        </button>

        {editingNote && (
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

export default NoteForm;