import {
  FolderOpen,
  Brain,
  Clock3,
  BarChart3,
} from "lucide-react";

const problems = [
  {
    icon: FolderOpen,
    title: "Everything in One Place",
    description:
      "Stop switching between multiple apps. Manage attendance, assignments, notes and study plans from one workspace.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Brain,
    title: "Study Smarter with AI",
    description:
      "Generate summaries, study plans and explanations instantly with your personal AI learning assistant.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Clock3,
    title: "Never Miss Deadlines",
    description:
      "Track assignments, attendance and upcoming exams before they become a problem.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: BarChart3,
    title: "Understand Your Progress",
    description:
      "Visual dashboards help you identify weak subjects and improve academic performance.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

function WhyStudentOS() {
  return (
    <section className="relative py-28">

      <div className="absolute left-1/2 top-40 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-400">
            WHY STUDENTOS?
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">

            Designed Around
            <span className="text-indigo-500">
              {" "}
              Student Life
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            StudentOS isn't just another productivity app.
            It's an academic operating system that keeps
            every important part of your college life
            connected in one place.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {problems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg}`}
                >
                  <Icon
                    className={item.color}
                    size={30}
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default WhyStudentOS;