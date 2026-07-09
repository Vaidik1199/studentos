import { UserCircle2, BadgeCheck, Pencil } from "lucide-react";

function ProfileHeader({ user, onEdit }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur">

      {/* Cover */}

      <div className="relative h-40 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500">

        <div className="absolute -bottom-12 left-8 flex h-24 w-24 items-center justify-center rounded-full border-4 border-slate-900 bg-slate-800 shadow-xl">
          <UserCircle2
            size={60}
            className="text-indigo-400"
          />
        </div>

      </div>

      {/* Content */}

      <div className="px-8 pb-8 pt-16">

        {/* Top Row */}

        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">

          {/* Left */}

          <div className="min-w-0 flex-1">

            <div className="flex flex-wrap items-center gap-3">

              <h1 className="break-words text-3xl font-extrabold text-white md:text-4xl">
                {user?.fullName || "Loading..."}
              </h1>

              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-400">
                Active
              </span>

            </div>

            <p className="mt-3 break-all text-slate-400">
              {user?.email || "Loading..."}
            </p>

          </div>

          {/* Right */}

          <div className="flex flex-wrap items-center gap-4">

            <button
              onClick={onEdit}
              className="flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              <Pencil size={18} />
              Edit Profile
            </button>

            <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 px-5 py-4">

              <div className="flex items-center gap-3">

                <BadgeCheck
                  size={22}
                  className="text-indigo-400"
                />

                <div>

                  <p className="text-sm text-slate-400">
                    Account Type
                  </p>

                  <h3 className="font-semibold text-white">
                    Student Account
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProfileHeader;