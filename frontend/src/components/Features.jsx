const features = [
  {
    icon: "🧠",
    title: "AI Learning Companion",
    description:
      "Ask questions, generate revision notes, create personalized study plans and get instant explanations powered by AI.",
  },
  {
    icon: "🎯",
    title: "Academic Command Center",
    description:
      "Manage attendance, assignments, notes and study plans from one organized workspace built specifically for college students.",
  },
  {
    icon: "📊",
    title: "Smart Progress Tracking",
    description:
      "Visualize attendance trends, monitor pending assignments and stay on top of your academic performance with real-time analytics.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="text-center">
        <p className="font-medium text-indigo-500">
          FEATURES
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Everything You Need.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          StudentOS combines productivity, organization and AI
          into one modern workspace built specifically for students.
        </p>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-indigo-500"
          >
            <div className="mb-6 text-5xl">
              {feature.icon}
            </div>

            <h3 className="mb-4 text-2xl font-semibold">
              {feature.title}
            </h3>

            <p className="leading-8 text-slate-400">
              {feature.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Features;