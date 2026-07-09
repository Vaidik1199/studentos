import {
  Brain,
  NotebookPen,
  ClipboardCheck,
  BarChart3,
  CalendarDays,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Study Assistant",
    description:
      "Generate study plans, summaries, explanations and smart revision material instantly using AI.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: NotebookPen,
    title: "Smart Notes",
    description:
      "Capture, organize and revisit your notes anytime with a clean and distraction-free workspace.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: ClipboardCheck,
    title: "Assignment Manager",
    description:
      "Track assignments, deadlines and priorities so you never miss an important submission.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: GraduationCap,
    title: "Attendance Tracker",
    description:
      "Monitor subject-wise attendance, identify shortages early and stay above your attendance target.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Visualize academic performance with beautiful charts and actionable insights to improve every semester.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    icon: CalendarDays,
    title: "Study Planner",
    description:
      "Create personalized study schedules based on your exams, subjects and daily study hours.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-40 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-400">
            EVERYTHING YOU NEED
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">
            Built Around Your
            <span className="text-indigo-500">
              {" "}
              Student Journey
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            StudentOS combines productivity, AI and
            organization into one modern academic workspace
            designed specifically for college students.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500"
              >
                {/* Glow */}

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/5 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/15" />

                {/* Icon */}

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${feature.bg}`}
                >
                  <Icon
                    size={32}
                    className={feature.color}
                  />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-slate-400">
                  {feature.description}
                </p>

                {/* Bottom Line */}

                <div className="mt-8 h-1 w-14 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300 group-hover:w-full" />

              </div>
            );
          })}

        </div>

        {/* Bottom Text */}

        <div className="mt-20 text-center">

          <p className="text-lg text-slate-400">
            Everything you need to stay
            <span className="font-semibold text-white">
              {" "}
              organized,
            </span>
            <span className="font-semibold text-indigo-400">
              {" "}
              productive
            </span>
            {" "}and
            <span className="font-semibold text-emerald-400">
              {" "}
              academically ahead.
            </span>
          </p>

        </div>

      </div>
    </section>
  );
}

export default Features;