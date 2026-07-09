import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  BrainCircuit,
  Bot,
  Settings,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Dashboard",
    description: "Go to your dashboard",
    to: "/dashboard",
    icon: LayoutDashboard,
    color: "bg-indigo-500/10 text-indigo-400",
  },
  {
    title: "AI Assistant",
    description: "Ask AI anything",
    to: "/ai",
    icon: Bot,
    color: "bg-violet-500/10 text-violet-400",
  },
  {
    title: "Study Planner",
    description: "Generate study plans",
    to: "/study-planner",
    icon: BrainCircuit,
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    title: "Settings",
    description: "Manage your account",
    to: "/settings",
    icon: Settings,
    color: "bg-amber-500/10 text-amber-400",
  },
];

function QuickActions() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur">

      {/* Header */}

      <div className="border-b border-slate-800 p-6">

        <h2 className="text-2xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="mt-2 text-slate-400">
          Jump to your most-used features.
        </p>

      </div>

      {/* Actions */}

      <div className="space-y-4 p-6">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.to}
              className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500"
            >
              <div className="flex items-center gap-4">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${action.color}`}
                >
                  <Icon size={22} />
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    {action.title}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {action.description}
                  </p>

                </div>

              </div>

              <ArrowRight
                size={20}
                className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-indigo-400"
              />

            </Link>
          );
        })}

      </div>

    </div>
  );
}

export default QuickActions;