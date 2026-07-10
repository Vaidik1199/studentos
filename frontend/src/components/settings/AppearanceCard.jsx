import { Palette, Moon, Sun, Monitor, Sparkles } from "lucide-react";

function AppearanceCard() {
  return (
    <div className="overflow-hidden rounded-[30px] border border-slate-800 bg-slate-900/70 shadow-2xl backdrop-blur-xl">

      {/* Header */}

      <div className="relative overflow-hidden border-b border-slate-800 p-8">

        {/* Glow */}

        <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 ring-1 ring-violet-500/20">

            <Palette
              size={30}
              className="text-violet-400"
            />

          </div>

          <div>

            <h2 className="text-3xl font-black tracking-tight text-white">
              Appearance
            </h2>

            <p className="mt-2 max-w-xl leading-7 text-slate-400">
              Personalize the appearance of StudentOS. More customization
              options will be available in upcoming updates.
            </p>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="space-y-6 p-7">

        {/* Dark Theme */}

        <div className="group flex flex-col gap-5 rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 p-6 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-xl hover:shadow-indigo-500/10 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-5">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900">

              <Moon
                size={24}
                className="text-indigo-400"
              />

            </div>

            <div>

              <div className="flex items-center gap-2">

                <h3 className="text-lg font-bold text-white">
                  Dark Theme
                </h3>

                <Sparkles
                  size={16}
                  className="text-indigo-400"
                />

              </div>

              <p className="mt-1 text-sm text-slate-400">
                Optimized for comfortable day and night use.
              </p>

            </div>

          </div>

          <span className="rounded-full bg-emerald-500/20 px-5 py-2 text-sm font-semibold text-emerald-400">
            Active
          </span>

        </div>

        {/* Light Theme */}

        <div className="group flex flex-col gap-5 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 transition-all duration-300 hover:border-yellow-500/30 hover:bg-slate-900 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-5">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800">

              <Sun
                size={24}
                className="text-yellow-400"
              />

            </div>

            <div>

              <h3 className="text-lg font-bold text-white">
                Light Theme
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Bright interface for daylight productivity.
              </p>

            </div>

          </div>

          <button
            disabled
            className="cursor-not-allowed rounded-2xl bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-500"
          >
            Coming Soon
          </button>

        </div>

        {/* System Theme */}

        <div className="group flex flex-col gap-5 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-900 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-5">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800">

              <Monitor
                size={24}
                className="text-cyan-400"
              />

            </div>

            <div>

              <h3 className="text-lg font-bold text-white">
                System Theme
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Automatically match your operating system theme.
              </p>

            </div>

          </div>

          <button
            disabled
            className="cursor-not-allowed rounded-2xl bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-500"
          >
            Coming Soon
          </button>

        </div>

      </div>

    </div>
  );
}

export default AppearanceCard;