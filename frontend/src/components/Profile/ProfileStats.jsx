import {
  NotebookPen,
  ClipboardList,
  BookOpen,
  BrainCircuit,
} from "lucide-react";

const stats = [
  {
    title: "Notes",
    value: "0",
    icon: NotebookPen,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Assignments",
    value: "0",
    icon: ClipboardList,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    title: "Attendance",
    value: "0%",
    icon: BookOpen,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Study Plans",
    value: "0",
    icon: BrainCircuit,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

function ProfileStats() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur">

      {/* Header */}

      <div className="border-b border-slate-800 p-6">

        <h2 className="text-2xl font-bold text-white">
          Statistics
        </h2>

        <p className="mt-2 text-slate-400">
          A quick overview of your StudentOS activity.
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 gap-5 p-6">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500"
            >

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
              >

                <Icon
                  size={22}
                  className={item.color}
                />

              </div>

              <h3 className="mt-5 text-3xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {item.title}
              </p>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default ProfileStats;