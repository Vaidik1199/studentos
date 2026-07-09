import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AlertTriangle, Trash2 } from "lucide-react";

import { deleteAccount } from "../../services/userService";

function DangerZone() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!password) {
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
    <div className="overflow-hidden rounded-3xl border border-red-500/20 bg-red-500/5">

      <div className="border-b border-red-500/20 p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">

            <AlertTriangle
              size={28}
              className="text-red-400"
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              Danger Zone
            </h2>

            <p className="mt-1 text-slate-400">
              Permanently delete your StudentOS account.
            </p>

          </div>

        </div>

      </div>

      <div className="space-y-6 p-6">

        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5">

          <h3 className="font-semibold text-red-300">
            This action cannot be undone.
          </h3>

          <p className="mt-2 text-slate-300">
            All your notes, attendance, assignments,
            study plans and analytics will be permanently removed.
          </p>

        </div>

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Confirm your password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-red-500"
          />

        </div>

        <button
          onClick={handleDelete}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700 disabled:opacity-60"
        >

          <Trash2 size={18} />

          {loading ? "Deleting..." : "Delete My Account"}

        </button>

      </div>

    </div>
  );
}

export default DangerZone;