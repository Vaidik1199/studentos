function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[150px]" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        {/* Badge */}

        <div className="mb-8 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-400">
          🚀 AI Powered Student Workspace
        </div>

        {/* Heading */}

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          Everything You Need
          <br />
          <span className="text-indigo-500">
            To Succeed In College.
          </span>
        </h1>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          Organize your notes, manage attendance, track assignments,
          plan your semester and generate AI-powered study summaries —
          all from one beautiful workspace.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <button className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-600/30">
            Get Started
          </button>

          <button className="rounded-xl border border-slate-700 bg-slate-900 px-8 py-4 font-semibold text-white transition hover:border-slate-600">
            View Demo
          </button>

        </div>

        {/* Dashboard Preview */}

        <div className="mt-24 w-full max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

          {/* Browser Bar */}

          <div className="mb-8 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>

          {/* Dashboard */}

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

              <h3 className="mb-6 text-lg font-semibold">
                Today's Schedule
              </h3>

              <div className="space-y-4 text-left">

                <div className="rounded-xl bg-slate-900 p-4">
                  <p className="font-medium">DBMS Lecture</p>
                  <span className="text-sm text-slate-400">
                    10:00 AM
                  </span>
                </div>

                <div className="rounded-xl bg-slate-900 p-4">
                  <p className="font-medium">AI Practical</p>
                  <span className="text-sm text-slate-400">
                    1:00 PM
                  </span>
                </div>

              </div>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

              <h3 className="mb-6 text-lg font-semibold">
                Attendance
              </h3>

              <p className="text-6xl font-bold text-indigo-500">
                92%
              </p>

              <p className="mt-4 text-slate-400">
                You're doing great this semester.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

              <h3 className="mb-6 text-lg font-semibold">
                Upcoming Assignment
              </h3>

              <div className="rounded-xl bg-slate-900 p-4 text-left">

                <p className="font-medium">
                  Operating Systems Report
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Due Tomorrow
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;