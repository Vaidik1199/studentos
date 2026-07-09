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
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur">
      {/* Header */}

      <div className="border-b border-slate-800 p-6">
        <h2 className="text-2xl font-bold text-white">
          Account Information
        </h2>

        <p className="mt-2 text-slate-400">
          Personal information associated with your StudentOS account.
        </p>
      </div>

      {/* Body */}

      <div className="grid gap-5 p-6 md:grid-cols-2">
        {/* Name */}

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <div className="mb-3 flex items-center gap-3">
            <User size={18} className="text-indigo-400" />

            <p className="text-sm text-slate-400">
              Full Name
            </p>
          </div>

          <h3 className="text-lg font-semibold text-white">
            {user?.fullName || "Loading..."}
          </h3>
        </div>

        {/* Email */}

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <div className="mb-3 flex items-center gap-3">
            <Mail size={18} className="text-indigo-400" />

            <p className="text-sm text-slate-400">
              Email
            </p>
          </div>

          <h3 className="break-all text-lg font-semibold text-white">
            {user?.email || "Loading..."}
          </h3>
        </div>

        {/* Member Since */}

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <div className="mb-3 flex items-center gap-3">
            <CalendarDays size={18} className="text-indigo-400" />

            <p className="text-sm text-slate-400">
              Member Since
            </p>
          </div>

          <h3 className="text-lg font-semibold text-white">
            {user?.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : "Loading..."}
          </h3>
        </div>

        {/* Status */}

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <div className="mb-3 flex items-center gap-3">
            <ShieldCheck size={18} className="text-emerald-400" />

            <p className="text-sm text-slate-400">
              Account Status
            </p>
          </div>

          <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-400">
            Active
          </span>
        </div>

        {/* Account Type */}

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <div className="mb-3 flex items-center gap-3">
            <GraduationCap size={18} className="text-violet-400" />

            <p className="text-sm text-slate-400">
              Account Type
            </p>
          </div>

          <h3 className="text-lg font-semibold text-white">
            Student
          </h3>
        </div>

        {/* Workspace */}

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <div className="mb-3 flex items-center gap-3">
            <BookOpen size={18} className="text-cyan-400" />

            <p className="text-sm text-slate-400">
              Workspace
            </p>
          </div>

          <h3 className="text-lg font-semibold text-white">
            StudentOS
          </h3>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;