import { ShieldCheck, KeyRound, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

function SecurityCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur">

      {/* Header */}

      <div className="border-b border-slate-800 p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">

            <ShieldCheck
              size={28}
              className="text-emerald-400"
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              Security
            </h2>

            <p className="mt-1 text-slate-400">
              Manage your account security.
            </p>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="space-y-5 p-6">

        {/* Forgot Password */}

        <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5 md:flex-row md:items-center md:justify-between">

          <div>

            <h3 className="font-semibold text-white">
              Forgot Password
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Reset your password using email verification.
            </p>

          </div>

          <Link
            to="/forgot-password"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >

            <KeyRound size={18} />

            Reset Password

          </Link>

        </div>

        {/* Change Password */}

        <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5 md:flex-row md:items-center md:justify-between">

          <div>

            <h3 className="font-semibold text-white">
              Change Password
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Change your current password securely.
            </p>

          </div>

          <button
            disabled
            className="cursor-not-allowed rounded-xl bg-slate-800 px-5 py-3 font-semibold text-slate-500"
          >
            Coming Soon
          </button>

        </div>

        {/* Logout */}

        <div className="flex flex-col gap-4 rounded-2xl border border-red-500/20 bg-red-500/5 p-5 md:flex-row md:items-center md:justify-between">

          <div>

            <h3 className="font-semibold text-white">
              Logout
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Sign out from your current device.
            </p>

          </div>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
          >

            <LogOut size={18} />

            Logout

          </button>

        </div>

      </div>

    </div>
  );
}

export default SecurityCard;