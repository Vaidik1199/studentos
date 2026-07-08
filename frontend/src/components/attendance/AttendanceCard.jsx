import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Pencil,
  Trash2,
} from "lucide-react";

function AttendanceCard({
  item,
  onEdit,
  onDelete,
}) {
  const percentage =
    item.totalClasses === 0
      ? 0
      : Number(
          (
            (item.attendedClasses /
              item.totalClasses) *
            100
          ).toFixed(1)
        );

  const progressColor =
    percentage >= 75
      ? "bg-emerald-500"
      : percentage >= 60
      ? "bg-yellow-500"
      : "bg-red-500";

  const status =
    percentage >= 75
      ? {
          icon: (
            <CheckCircle2
              size={18}
              className="text-emerald-400"
            />
          ),
          text: "Excellent",
          color: "text-emerald-400",
        }
      : percentage >= 60
      ? {
          icon: (
            <AlertTriangle
              size={18}
              className="text-yellow-400"
            />
          ),
          text: "Need Improvement",
          color: "text-yellow-400",
        }
      : {
          icon: (
            <XCircle
              size={18}
              className="text-red-400"
            />
          ),
          text: "Critical",
          color: "text-red-400",
        };

  let helperText = "";

  if (percentage >= 75) {
    const canMiss = Math.floor(
      (item.attendedClasses -
        0.75 * item.totalClasses) /
        0.75
    );

    helperText =
      canMiss <= 0
        ? "Don't miss the next class."
        : `You can miss ${canMiss} class${
            canMiss > 1 ? "es" : ""
          }.`;
  } else {
    const needAttend = Math.ceil(
      (0.75 * item.totalClasses -
        item.attendedClasses) /
        0.25
    );

    helperText = `Attend next ${needAttend} class${
      needAttend > 1 ? "es" : ""
    }.`;
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-indigo-500/10">

      <div className="flex items-start justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            {item.subject}
          </h2>

          <p className="mt-1 text-slate-400">
            {item.attendedClasses} / {item.totalClasses} Classes
          </p>
        </div>

        <span className="rounded-xl bg-slate-800 px-3 py-2 text-lg font-bold text-white">
          {percentage}%
        </span>

      </div>

      <div className="mt-6">

        <div className="mb-2 flex justify-between text-sm">

          <span className="text-slate-400">
            Attendance
          </span>

          <span className="font-semibold text-white">
            {percentage}%
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-800">

          <div
            className={`${progressColor} h-full rounded-full transition-all duration-700`}
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>

      <div className="mt-5 rounded-xl bg-slate-800 p-4">

        <div className="flex items-center gap-2">

          {status.icon}

          <span
            className={`font-semibold ${status.color}`}
          >
            {status.text}
          </span>

        </div>

        <p className="mt-3 text-sm text-slate-400">
          {helperText}
        </p>

      </div>

      <div className="mt-6 flex gap-3">

        <button
          onClick={onEdit}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 font-semibold text-white transition hover:bg-amber-600"
        >
          <Pencil size={18} />
          Edit
        </button>

        <button
          onClick={onDelete}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          <Trash2 size={18} />
          Delete
        </button>

      </div>

    </div>
  );
}

export default AttendanceCard;