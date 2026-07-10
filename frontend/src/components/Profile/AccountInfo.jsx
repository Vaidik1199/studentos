import {
  User,
  Mail,
  CalendarDays,
  ShieldCheck,
  GraduationCap,
  BookOpen,
} from "lucide-react";

function AccountInfo({ user }) {
  return (
    <div className="overflow-hidden rounded-[30px] border border-slate-800/80 bg-slate-900/70 shadow-2xl backdrop-blur-xl">

      {/* Header */}

      <div className="border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800/60 p-7">

        <h2 className="text-3xl font-black tracking-tight text-white">
          Account Information
        </h2>

        <p className="mt-2 max-w-xl text-slate-400">
          Your personal details and StudentOS account information.
        </p>

      </div>

      {/* Body */}

      <div className="grid gap-6 p-7 md:grid-cols-2">

        {/* Name */}

        <div className="group rounded-3xl border border-slate-800 bg-slate-950/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10">

          <div className="mb-5 flex items-center gap-4">

            <div className="rounded-2xl bg-indigo-500/10 p-3">

              <User
                size={22}
                className="text-indigo-400"
              />

            </div>

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Full Name
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                {user?.fullName || "Loading..."}
              </h3>

            </div>

          </div>

        </div>

        {/* Email */}

        <div className="group rounded-3xl border border-slate-800 bg-slate-950/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">

          <div className="mb-5 flex items-center gap-4">

            <div className="rounded-2xl bg-cyan-500/10 p-3">

              <Mail
                size={22}
                className="text-cyan-400"
              />

            </div>

            <div className="min-w-0 flex-1">

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Email Address
              </p>

              <h3 className="mt-1 break-all text-lg font-bold text-white">
                {user?.email || "Loading..."}
              </h3>

            </div>

          </div>

        </div>

        {/* Member Since */}

        <div className="group rounded-3xl border border-slate-800 bg-slate-950/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10">

          <div className="mb-5 flex items-center gap-4">

            <div className="rounded-2xl bg-violet-500/10 p-3">

              <CalendarDays
                size={22}
                className="text-violet-400"
              />

            </div>

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Member Since
              </p>

              <h3 className="mt-1 text-lg font-bold text-white">
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "Loading..."}
              </h3>

            </div>

          </div>

        </div>
        {/* Status */}

        <div className="group rounded-3xl border border-slate-800 bg-slate-950/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10">

          <div className="mb-5 flex items-center gap-4">

            <div className="rounded-2xl bg-emerald-500/10 p-3">

              <ShieldCheck
                size={22}
                className="text-emerald-400"
              />

            </div>

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Account Status
              </p>

              <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-400">

                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                Active

              </span>

            </div>

          </div>

        </div>

        {/* Account Type */}

        <div className="group rounded-3xl border border-slate-800 bg-slate-950/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10">

          <div className="mb-5 flex items-center gap-4">

            <div className="rounded-2xl bg-amber-500/10 p-3">

              <GraduationCap
                size={22}
                className="text-amber-400"
              />

            </div>

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Account Type
              </p>

              <h3 className="mt-1 text-lg font-bold text-white">
                Student
              </h3>

            </div>

          </div>

        </div>

        {/* Workspace */}

        <div className="group rounded-3xl border border-slate-800 bg-slate-950/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10">

          <div className="mb-5 flex items-center gap-4">

            <div className="rounded-2xl bg-indigo-500/10 p-3">

              <BookOpen
                size={22}
                className="text-indigo-400"
              />

            </div>

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Workspace
              </p>

              <h3 className="mt-1 text-lg font-bold text-white">
                StudentOS
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AccountInfo;