import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  AlertTriangle,
  Trash2,
  ShieldAlert,
  Lock,
} from "lucide-react";

import { deleteAccount } from "../../services/userService";

function DangerZone() {
  const navigate = useNavigate();

  const { user } = useAuth();

  const isGoogleUser = user?.provider === "google";

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!isGoogleUser && !password) {
      return toast.error("Please enter your password.");
    }

    const confirmDelete = window.confirm(
      "This will permanently delete your StudentOS account. Continue?"
    );

    if (!confirmDelete) return;

    try {
      setLoading(true);

      const response = await deleteAccount(password);

      toast.success(response.message);

      localStorage.removeItem("token");

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to delete account."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-[30px] border border-red-500/20 bg-slate-900/70 shadow-2xl backdrop-blur-xl">

      {/* Header */}

      <div className="relative overflow-hidden border-b border-red-500/20 p-8">

        <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-red-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500/20 to-rose-500/20 ring-1 ring-red-500/20">

            <AlertTriangle
              size={30}
              className="text-red-400"
            />

          </div>

          <div>

            <h2 className="text-3xl font-black tracking-tight text-white">
              Danger Zone
            </h2>

            <p className="mt-2 max-w-xl leading-7 text-slate-400">
              These actions are permanent and cannot be undone. Please proceed
              only if you're absolutely sure.
            </p>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="space-y-7 p-7">

        {/* Warning */}

        <div className="rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-500/10 to-transparent p-6">

          <div className="flex items-start gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">

              <ShieldAlert
                size={24}
                className="text-red-400"
              />

            </div>

            <div>

              <h3 className="text-lg font-bold text-red-300">
                Permanent Account Deletion
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Deleting your account will permanently remove your
                <span className="font-semibold text-white">
                  {" "}notes
                </span>,
                <span className="font-semibold text-white">
                  {" "}attendance
                </span>,
                <span className="font-semibold text-white">
                  {" "}assignments
                </span>,
                <span className="font-semibold text-white">
                  {" "}study plans
                </span>,
                <span className="font-semibold text-white">
                  {" "}analytics
                </span>
                {" "}and all associated data from StudentOS.
              </p>

            </div>

          </div>

        </div>

        {/* Password */}

        {!isGoogleUser ? (

          <div>

            <label className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-300">

              <Lock
                size={16}
                className="text-red-400"
              />

              Confirm your password

            </label>

            <input
              type="password"
              placeholder="Enter your password to continue"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
            />

          </div>

        ) : (

          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">

            <p className="leading-7 text-slate-300">

              Your account is authenticated through

              <span className="font-semibold text-white">
                {" "}Google Sign-In
              </span>.

              <br /><br />

              No password confirmation is required.

              Deleting your StudentOS account will
              <span className="font-semibold text-red-300">
                {" "}NOT
              </span>
              delete your Google account.

            </p>

          </div>

        )}

        {/* Delete Button */}

        <button
          onClick={handleDelete}
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 py-4 text-base font-bold text-white shadow-xl shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-red-500/40 disabled:cursor-not-allowed disabled:opacity-60"
        >

          <Trash2 size={20} />

          {loading
            ? "Deleting Account..."
            : isGoogleUser
              ? "Delete StudentOS Account"
              : "Delete My Account"}

        </button>

      </div>

    </div>
  );
}

export default DangerZone;