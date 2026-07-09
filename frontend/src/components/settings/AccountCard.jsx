import { User, Mail, CalendarDays, Pencil } from "lucide-react";

function AccountCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur">

      {/* Header */}

      <div className="border-b border-slate-800 p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10">

            <User
              size={28}
              className="text-indigo-400"
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              Account Information
            </h2>

            <p className="mt-1 text-slate-400">
              Your StudentOS profile details.
            </p>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="grid gap-6 p-6 md:grid-cols-2">

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">

          <p className="mb-2 text-sm text-slate-500">
            Full Name
          </p>

          <div className="flex items-center gap-3">

            <User
              size={18}
              className="text-indigo-400"
            />

            <span className="font-semibold text-white">
              Vaidik Choudhary
            </span>

          </div>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">

          <p className="mb-2 text-sm text-slate-500">
            Email
          </p>

          <div className="flex items-center gap-3">

            <Mail
              size={18}
              className="text-indigo-400"
            />

            <span className="font-semibold text-white">
              studentos.web@gmail.com
            </span>

          </div>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">

          <p className="mb-2 text-sm text-slate-500">
            Member Since
          </p>

          <div className="flex items-center gap-3">

            <CalendarDays
              size={18}
              className="text-indigo-400"
            />

            <span className="font-semibold text-white">
              Coming Soon
            </span>

          </div>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">

          <p className="mb-2 text-sm text-slate-500">
            Profile
          </p>

          <button
            disabled
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-indigo-500/20 px-4 py-2 font-semibold text-indigo-300 opacity-70"
          >

            <Pencil size={18} />

            Edit Profile

          </button>

        </div>

      </div>

    </div>
  );
}

export default AccountCard;