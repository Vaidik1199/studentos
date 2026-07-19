import { ShieldCheck, KeyRound, LogOut, Eye, EyeOff } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import { changePassword } from "../../services/authService";
import { useAuth } from "../../contexts/AuthContext";
function SecurityCard() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const isGoogleUser = user?.provider === "google";

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);
  return (
    <div className="overflow-hidden rounded-[30px] border border-slate-800 bg-slate-900/70 shadow-2xl backdrop-blur-xl">

      {/* Header */}

      <div className="relative overflow-hidden border-b border-slate-800 p-8">

        {/* Glow */}

        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 ring-1 ring-emerald-500/20">

            <ShieldCheck
              size={32}
              className="text-emerald-400"
            />

          </div>

          <div>

            <h2 className="text-3xl font-black tracking-tight text-white">
              Security Center
            </h2>

            <p className="mt-2 max-w-xl leading-7 text-slate-400">
              Keep your StudentOS account protected by managing your password,
              authentication and active sessions.
            </p>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="space-y-6 p-7">
        {isGoogleUser ? (

          <div className="rounded-[28px] border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-cyan-500/5 p-8">

            <div className="flex items-start gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-500/10">

                <ShieldCheck
                  size={30}
                  className="text-blue-400"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Google Protected Account
                </h3>

                <p className="mt-3 max-w-2xl leading-8 text-slate-400">
                  Your StudentOS account uses Google Sign-In.
                  Password changes, password reset and authentication
                  are securely managed by Google.
                </p>

              </div>

            </div>

          </div>

        ) : (
          <>
            {/* Forgot Password */}

            < div className="group flex flex-col gap-5 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 transition-all duration-300 hover:border-indigo-500/40 hover:bg-slate-900 md:flex-row md:items-center md:justify-between">

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10">

                  <KeyRound
                    size={24}
                    className="text-indigo-400"
                  />

                </div>

                <div>

                  <h3 className="text-lg font-bold text-white">
                    Forgot your password?
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                    Receive a password reset link on your registered email address and
                    regain access securely.
                  </p>

                </div>

              </div>

              <Link
                to="/forgot-password"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40"
              >
                <KeyRound size={18} />

                Reset Password
              </Link>

            </div>
            {/* Change Password */}

            <div className="rounded-[28px] border border-slate-800 bg-slate-950/70 p-7">

              <div className="mb-8">

                <h3 className="text-2xl font-bold text-white">
                  Change Password
                </h3>

                <p className="mt-2 text-slate-400">
                  Use a strong password that you don't use anywhere else.
                </p>

              </div>

              <div className="space-y-6">

                {/* Current Password */}

                <div>

                  <label className="mb-3 block text-sm font-medium text-slate-300">
                    Current Password
                  </label>

                  <div className="relative">

                    <input
                      type={showCurrent ? "text" : "password"}
                      placeholder="Enter current password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 pr-14 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowCurrent(!showCurrent)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                    >
                      {showCurrent ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>

                  </div>

                </div>

                {/* New Password */}

                <div>

                  <label className="mb-3 block text-sm font-medium text-slate-300">
                    New Password
                  </label>

                  <div className="relative">

                    <input
                      type={showNew ? "text" : "password"}
                      placeholder="Create a new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 pr-14 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowNew(!showNew)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                    >
                      {showNew ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>

                  </div>

                </div>

                {/* Confirm Password */}

                <div>

                  <label className="mb-3 block text-sm font-medium text-slate-300">
                    Confirm Password
                  </label>

                  <div className="relative">

                    <input
                      type={showConfirm ? "text" : "password"}
                      placeholder="Confirm your new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 pr-14 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                    >
                      {showConfirm ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>

                  </div>

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
                        "Failed to change password."
                      );
                    } finally {
                      setLoading(false);
                    }
                  }}
                  disabled={loading}
                  className="mt-3 flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 py-4 text-base font-bold text-white shadow-xl shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Updating Password..." : "Update Password"}
                </button>

              </div>

            </div>
            {/* Current Session */}

            <div className="rounded-[28px] border border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-transparent to-transparent p-6">

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                {/* Left */}

                <div className="flex items-start gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10">

                    <LogOut
                      size={26}
                      className="text-amber-400"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-white">
                      Current Session
                    </h3>

                    <p className="mt-2 max-w-lg leading-7 text-slate-400">
                      You're currently signed in to StudentOS on this device. Logging out
                      will securely end this session and require you to sign in again.
                    </p>

                  </div>

                </div>

                {/* Right */}

                <button
                  onClick={() => {
                    logout();
                    navigate("/login", { replace: true });
                  }}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 px-7 py-4 font-semibold text-white shadow-xl shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-red-500/40"
                >

                  <LogOut size={18} />

                  Logout

                </button>

              </div>

            </div>
          </>
        )}    </div>
    </div >
  );
}

export default SecurityCard;
