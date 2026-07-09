import {
  UserPlus,
  FolderKanban,
  BrainCircuit,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Account",
    description:
      "Sign up in seconds and unlock your personalized academic workspace.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: FolderKanban,
    title: "Organize Your Semester",
    description:
      "Track attendance, notes, assignments and study plans from one dashboard.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: BrainCircuit,
    title: "Study Smarter with AI",
    description:
      "Generate summaries, study plans and instant explanations whenever you need them.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-32 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-400">
            HOW IT WORKS
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">
            Three Simple Steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            StudentOS helps you organize your academic life in just a few
            simple steps.
          </p>

        </div>

        {/* Timeline */}

        <div className="mt-20 grid gap-10 lg:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500"
              >
                {/* Number */}

                <div className="absolute right-6 top-6 text-6xl font-black text-slate-800">
                  0{index + 1}
                </div>

                {/* Icon */}

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${step.bg}`}
                >
                  <Icon
                    size={30}
                    className={step.color}
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <div className="mt-8 hidden justify-center lg:flex">
                    <ArrowDown
                      size={26}
                      className="rotate-[-90deg] text-slate-600"
                    />
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;