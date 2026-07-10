import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
    description: "View your academic overview",
    to: "/dashboard",
    icon: LayoutDashboard,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    title: "AI Assistant",
    description: "Ask AI anything instantly",
    to: "/ai",
    icon: Bot,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    title: "Study Planner",
    description: "Generate personalized plans",
    to: "/study-planner",
    icon: BrainCircuit,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Settings",
    description: "Manage your account",
    to: "/settings",
    icon: Settings,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

function QuickActions() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
      className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl"
    >
      {/* Header */}

      <div className="border-b border-slate-800 p-6">
        <h2 className="text-2xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="mt-2 text-slate-400">
          Jump to your most-used features.
        </p>
      </div>

      {/* Cards */}

      <div className="space-y-4 p-6">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <motion.div
              key={action.title}
              variants={fadeUp}
            >
              <Link
                to={action.to}
                className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                {/* Glow */}

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Shine */}

                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
                </div>

                <div className="relative flex items-center gap-4">
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.12,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${action.bg}`}
                  >
                    <Icon
                      size={24}
                      className={action.color}
                    />
                  </motion.div>

                  <div>
                    <h3 className="font-semibold text-white">
                      {action.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {action.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                  className="relative"
                >
                  <ArrowRight
                    size={20}
                    className="text-slate-500 transition group-hover:text-indigo-400"
                  />
                </motion.div>

                {/* Bottom Accent */}

                <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default QuickActions;