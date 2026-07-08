import {
  NotebookPen,
  Pin,
  FileText,
  Clock3,
} from "lucide-react";

function NoteSummary({ notes = [] }) {
  const total = notes.length;

  const pinned = notes.filter(
    (note) => note.pinned
  ).length;

  const totalCharacters = notes.reduce(
    (sum, note) => sum + note.content.length,
    0
  );

  const recentlyUpdated = notes.filter((note) => {
    const updated = new Date(note.updatedAt);
    const now = new Date();

    return (
      now - updated <
      1000 * 60 * 60 * 24
    );
  }).length;

  const cards = [
    {
      title: "Total Notes",
      value: total,
      icon: <NotebookPen size={24} />,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
    },
    {
      title: "Pinned",
      value: pinned,
      icon: <Pin size={24} />,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Characters",
      value: totalCharacters.toLocaleString(),
      icon: <FileText size={24} />,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Updated Today",
      value: recentlyUpdated,
      icon: <Clock3 size={24} />,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-indigo-500"
        >
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl ${card.bg} ${card.color}`}
          >
            {card.icon}
          </div>

          <p className="mt-5 text-sm text-slate-400">
            {card.title}
          </p>

          <h2
            className={`mt-2 text-3xl font-bold ${card.color}`}
          >
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default NoteSummary;