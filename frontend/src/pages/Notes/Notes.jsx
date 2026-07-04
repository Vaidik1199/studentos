import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import NoteForm from "../../components/notes/NoteForm";
import NoteCard from "../../components/notes/NoteCard";

import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../../services/noteService";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await getNotes();
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNote = async (data) => {
    try {
      await createNote(data);
      await fetchNotes();
    } catch (error) {
      console.error(error);
      alert("Failed to create note.");
    }
  };

  const handleUpdateNote = async (data) => {
    try {
      await updateNote(editingNote._id, data);

      setEditingNote(null);

      await fetchNotes();
    } catch (error) {
      console.error(error);
      alert("Failed to update note.");
    }
  };

  const handleDeleteNote = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirmed) return;

    try {
      await deleteNote(id);
      await fetchNotes();
    } catch (error) {
      console.error(error);
      alert("Failed to delete note.");
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Notes
          </h1>

          <p className="mt-2 text-slate-400">
            Organize your study notes in one place.
          </p>
        </div>

        <NoteForm
          onSubmit={
            editingNote
              ? handleUpdateNote
              : handleCreateNote
          }
          editingNote={editingNote}
          cancelEdit={() => setEditingNote(null)}
        />

        {loading ? (
          <p className="text-slate-400">
            Loading notes...
          </p>
        ) : notes.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h2 className="text-xl font-semibold text-white">
              No Notes Found
            </h2>

            <p className="mt-2 text-slate-400">
              Create your first note to get started.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {notes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                onEdit={setEditingNote}
                onDelete={handleDeleteNote}
              />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Notes;