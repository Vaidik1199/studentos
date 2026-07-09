import { ShieldCheck, KeyRound, LogOut, Eye, EyeOff } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import { changePassword } from "../../services/authService";
import { useAuth } from "../../contexts/AuthContext";
function SecurityCard() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur">
      {/* Header */}

      <div className="border-b border-slate-800 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
            <ShieldCheck size={28} className="text-emerald-400" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Security</h2>

            <p className="mt-1 text-slate-400">Manage your account security.</p>
          </div>
        </div>
      </div>

      {/* Body */}

      <div className="space-y-5 p-6">
        {/* Forgot Password */}

        <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-semibold text-white">Forgot Password</h3>

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

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
          <h3 className="font-semibold text-white">Change Password</h3>

          <p className="mt-1 text-sm text-slate-400">
            Update your account password.
          </p>

          <div className="mt-6 space-y-4">
            {/* Current Password */}

            <div className="relative">
              <input
                type={showCurrent ? "text" : "password"}
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 pr-12 text-white outline-none focus:border-indigo-500"
              />

              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* New Password */}

            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 pr-12 text-white outline-none focus:border-indigo-500"
              />

              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Confirm Password */}

            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 pr-12 text-white outline-none focus:border-indigo-500"
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              onClick={async () => {
                if (!currentPassword || !newPassword || !confirmPassword) {
                  return toast.error("Please fill all fields.");
                }

                if (newPassword !== confirmPassword) {
                  return toast.error("Passwords do not match.");
                }

                try {
                  setLoading(true);

                  const response = await changePassword({
                    currentPassword,
                    newPassword,
                  });

                  toast.success(response.message);

                  logout();

                  navigate("/login");
                } catch (error) {
                  toast.error(
                    error.response?.data?.message ||
                      "Failed to change password.",
                  );
                } finally {
                  setLoading(false);
                }
              }}
              disabled={loading}
              className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Updating..." : "Change Password"}
            </button>
          </div>
        </div>

        {/* Logout */}

        <div className="flex flex-col gap-4 rounded-2xl border border-red-500/20 bg-red-500/5 p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-semibold text-white">Logout</h3>

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
