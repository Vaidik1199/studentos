import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import NoteForm from "../../components/notes/NoteForm";
import NoteCard from "../../components/notes/NoteCard";

import toast from "react-hot-toast";
import ConfirmModal from "../../components/ui/ConfirmModal";
import PageTransition from "../../components/common/PageTransition";
import SkeletonCard from "../../components/common/SkeletonCard";

import Modal from "../../components/ui/Modal";
import NoteSummary from "../../components/notes/NoteSummary";
import { Plus } from "lucide-react";

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
  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [showFormModal, setShowFormModal] = useState(false);

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

      toast.success("Note created successfully.");
      setEditingNote(null);
      setShowFormModal(false);

      await fetchNotes();
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message ||
          "Failed to create note."
      );
    }
  };

  const handleUpdateNote = async (data) => {
    try {
      await updateNote(editingNote._id, data);

      toast.success("Note updated successfully.");
      setEditingNote(null);
      setShowFormModal(false);

      await fetchNotes();
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message ||
          "Failed to update note."
      );
    }
  };

  const handleTogglePin = async (note) => {
    try {
      await updateNote(note._id, {
        ...note,
        pinned: !note.pinned,
      });

      toast.success(
        note.pinned ? "Note unpinned." : "Note pinned."
      );

      await fetchNotes();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update note.");
    }
  };

  const handleDeleteNote = async () => {
    try {
      await deleteNote(deleteId);

      toast.success("Note deleted successfully.");

      setShowDeleteModal(false);
      setDeleteId(null);

      await fetchNotes();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete note.");
    }
  };

  const filteredNotes = [...notes]
    .filter((note) =>
      note.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return new Date(a.updatedAt) - new Date(b.updatedAt);

        case "az":
          return a.title.localeCompare(b.title);

        case "za":
          return b.title.localeCompare(a.title);

        default:
          return new Date(b.updatedAt) - new Date(a.updatedAt);
      }
    });

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-white">Notes</h1>

            <p className="mt-2 text-slate-400">
              Organize your study notes in one place.
            </p>
          </div>

          <NoteSummary notes={filteredNotes} />

          <div className="mb-6 flex flex-col gap-4 lg:flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search notes..."
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-indigo-500"
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 text-white"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="az">A → Z</option>
              <option value="za">Z → A</option>
            </select>
          </div>

          {loading ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : filteredNotes.length === 0 ? (
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
              {filteredNotes.map((note) => (
                <NoteCard
                  key={note._id}
                  note={note}
                  onEdit={(note) => {
                    setEditingNote(note);
                    setShowFormModal(true);
                  }}
                  onDelete={(id) => {
                    setDeleteId(id);
                    setShowDeleteModal(true);
                  }}
                  onTogglePin={handleTogglePin}
                />
              ))}
            </div>
          )}
        </div>

        <Modal
          isOpen={showFormModal}
          title={editingNote ? "Update Note" : "Add Note"}
          onClose={() => {
            setEditingNote(null);
            setShowFormModal(false);
          }}
        >
          <NoteForm
            onSubmit={
              editingNote
                ? handleUpdateNote
                : handleCreateNote
            }
            editingNote={editingNote}
            cancelEdit={() => {
              setEditingNote(null);
              setShowFormModal(false);
            }}
          />
        </Modal>

        <button
          onClick={() => {
            setEditingNote(null);
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
          title="Delete Note"
          message="Are you sure you want to delete this note?"
          onConfirm={handleDeleteNote}
          onCancel={() => {
            setShowDeleteModal(false);
            setDeleteId(null);
          }}
        />
      </PageTransition>
    </DashboardLayout>
  );
}

export default Notes;