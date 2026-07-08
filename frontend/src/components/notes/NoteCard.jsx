import { useState } from "react";
import {
  Pencil,
  Trash2,
  Pin,
  Copy,
  CalendarDays,
  FileText,
} from "lucide-react";
import toast from "react-hot-toast";

function NoteCard({
  note,
  onEdit,
  onDelete,
  onTogglePin,
}) {
  const [expanded, setExpanded] = useState(false);

  const preview =
    note.content.length > 220 && !expanded
      ? note.content.slice(0, 220) + "..."
      : note.content;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(note.content);
    toast.success("Note copied.");
  };

  const updated = new Date(note.updatedAt);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-indigo-500/10">

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white break-words">
            {note.title}
          </h2>

          <div className="mt-2 flex items-center gap-3 text-sm text-slate-400">

            <span className="flex items-center gap-1">
              <CalendarDays size={15} />
              {updated.toLocaleDateString()}
            </span>

            <span className="flex items-center gap-1">
              <FileText size={15} />
              {note.content.length} chars
            </span>

          </div>

        </div>

        {note.pinned && (
          <div className="rounded-full bg-yellow-500/20 p-2">
            <Pin
              size={18}
              className="text-yellow-400"
            />
          </div>
        )}

      </div>

      <p className="mt-5 whitespace-pre-wrap text-slate-300 leading-7">
        {preview}
      </p>

      {note.content.length > 220 && (
        <button
          onClick={() =>
            setExpanded(!expanded)
          }
          className="mt-3 text-sm font-medium text-indigo-400 hover:text-indigo-300"
        >
          {expanded
            ? "Show Less"
            : "Read More"}
        </button>
      )}

      <div className="mt-6 grid grid-cols-2 gap-2">

  <button
    onClick={() => onTogglePin(note)}
    className={`flex items-center justify-center gap-2 rounded-xl py-2 font-semibold text-white transition ${
      note.pinned
        ? "bg-yellow-500 hover:bg-yellow-600"
        : "bg-slate-700 hover:bg-slate-600"
    }`}
  >
    <Pin size={18} />
    {note.pinned ? "Unpin" : "Pin"}
  </button>

  <button
    onClick={() => onEdit(note)}
    className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 py-2 font-semibold text-white hover:bg-amber-600"
  >
    <Pencil size={18} />
    Edit
  </button>

  <button
    onClick={handleCopy}
    className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-2 font-semibold text-white hover:bg-indigo-700"
  >
    <Copy size={18} />
    Copy
  </button>

  <button
    onClick={() => onDelete(note._id)}
    className="flex items-center justify-center gap-2 rounded-xl bg-red-600 py-2 font-semibold text-white hover:bg-red-700"
  >
    <Trash2 size={18} />
    Delete
  </button>

</div>

    </div>
  );
}

export default NoteCard;