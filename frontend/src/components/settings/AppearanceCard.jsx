import { Palette, Moon, Sun, Monitor } from "lucide-react";

function AppearanceCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur">

      {/* Header */}

      <div className="border-b border-slate-800 p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10">

            <Palette
              size={28}
              className="text-violet-400"
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              Appearance
            </h2>

            <p className="mt-1 text-slate-400">
              Customize how StudentOS looks.
            </p>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="space-y-5 p-6">

        {/* Dark Theme */}

        <div className="flex items-center justify-between rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-5">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900">

              <Moon
                size={22}
                className="text-indigo-400"
              />

            </div>

            <div>

              <h3 className="font-semibold text-white">
                Dark Theme
              </h3>

              <p className="text-sm text-slate-400">
                Currently active.
              </p>

            </div>

          </div>

          <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-400">
            Active
          </span>

        </div>

        {/* Light Theme */}

        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-5">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">

              <Sun
                size={22}
                className="text-yellow-400"
              />

            </div>

            <div>

              <h3 className="font-semibold text-white">
                Light Theme
              </h3>

              <p className="text-sm text-slate-400">
                Available in a future update.
              </p>

            </div>

          </div>

          <button
            disabled
            className="cursor-not-allowed rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-500"
          >
            Coming Soon
          </button>

        </div>

        {/* System Theme */}

        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-5">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">

              <Monitor
                size={22}
                className="text-cyan-400"
              />

            </div>

            <div>

              <h3 className="font-semibold text-white">
                System Theme
              </h3>

              <p className="text-sm text-slate-400">
                Automatically follow your device theme.
              </p>

            </div>

          </div>

          <button
            disabled
            className="cursor-not-allowed rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-500"
          >
            Coming Soon
          </button>

        </div>

      </div>

    </div>
  );
}

export default AppearanceCard;