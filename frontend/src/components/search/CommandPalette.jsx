import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pages = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "Attendance",
    path: "/attendance",
  },
  {
    title: "Assignments",
    path: "/assignments",
  },
  {
    title: "Notes",
    path: "/notes",
  },
  {
    title: "Analytics",
    path: "/analytics",
  },
  {
    title: "AI Assistant",
    path: "/ai",
  },
  {
    title: "Study Planner",
    path: "/study-planner",
  },
  {
    title: "Saved Study Plans",
    path: "/study-plans",
  },
];

function CommandPalette() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openCommand = () => setOpen(true);

    window.addEventListener("open-command-palette", openCommand);

    return () =>
      window.removeEventListener("open-command-palette", openCommand);
  }, []);

  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = pages.filter((page) =>
    page.title.toLowerCase().includes(query.toLowerCase()),
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 pt-32 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-xl rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative border-b border-slate-800">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            autoFocus
            placeholder="Search StudentOS..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent py-5 pl-14 pr-6 text-lg text-white outline-none"
          />
        </div>

        <div className="max-h-96 overflow-y-auto">
          {filtered.map((page) => (
            <button
              key={page.path}
              onClick={() => {
                navigate(page.path);
                setOpen(false);
                setQuery("");
              }}
              className="flex w-full items-center justify-between border-b border-slate-800 px-6 py-5 text-left transition hover:bg-slate-800"
            >
              <span className="font-medium text-white">{page.title}</span>

              <span className="text-sm text-slate-500">{page.path}</span>
            </button>
          ))}

          {filtered.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              No results found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;
