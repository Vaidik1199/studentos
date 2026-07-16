import { X } from "lucide-react";

function EditProfileModal({
  open,
  onClose,
  fullName,
  setFullName,
  email,
  setEmail,
  onSave,
  loading,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            Edit Profile
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-800"
          >
            <X size={22} />
          </button>

        </div>

        <div className="space-y-6">

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Full Name
            </label>

            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-indigo-500"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Email Address
            </label>

            <input
              value={email}
              disabled
              readOnly
              className="w-full cursor-not-allowed rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-400"
            />

            <p className="mt-2 text-xs text-slate-500">
              Your email address cannot be changed. Email change will be available with
              verification in a future update.
            </p>

          </div>

          <div className="flex justify-end gap-4">

            <button
              onClick={onClose}
              className="rounded-xl border border-slate-700 px-6 py-3"
            >
              Cancel
            </button>

            <button
              onClick={onSave}
              disabled={loading}
              className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default EditProfileModal;