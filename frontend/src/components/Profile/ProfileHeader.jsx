import { UserCircle2, BadgeCheck } from "lucide-react";

function ProfileHeader({ user }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur">
      <div className="relative h-40 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500">
        <div className="absolute -bottom-12 left-8 flex h-24 w-24 items-center justify-center rounded-full border-4 border-slate-900 bg-slate-800 shadow-xl">
          <UserCircle2 size={60} className="text-indigo-400" />
        </div>
      </div>

      <div className="px-8 pb-8 pt-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-extrabold text-white">
                {user?.fullName || "Loading..."}
              </h1>

              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-400">
                Active
              </span>
            </div>

            <p className="mt-2 text-lg text-slate-400">
              {user?.email || "Loading..."}
            </p>
          </div>

          <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <BadgeCheck size={22} className="text-indigo-400" />

              <div>
                <p className="text-sm text-slate-400">Account Type</p>

                <h3 className="font-semibold text-white">Student Account</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
