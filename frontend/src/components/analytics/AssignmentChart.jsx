import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function AssignmentChart({ assignments }) {
  const completed = assignments.completed || 0;
  const pending = assignments.pending || 0;
  const total = completed + pending;

  const data = [
    {
      name: "Completed",
      value: completed,
    },
    {
      name: "Pending",
      value: pending,
    },
  ];

  const COLORS = ["#22C55E", "#F59E0B"];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Assignment Progress
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Overview of your completed and pending assignments.
        </p>
      </div>

      {total === 0 ? (
        <div className="flex h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950">
          <div className="text-6xl">📝</div>

          <h3 className="mt-5 text-xl font-semibold text-white">
            No Assignments Yet
          </h3>

          <p className="mt-2 max-w-xs text-center text-slate-400">
            Create your first assignment to start tracking your academic
            progress.
          </p>
        </div>
      ) : (
        <>
          <div className="relative mx-auto h-[280px] w-full max-w-sm">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={78}
                  outerRadius={105}
                  paddingAngle={5}
                  cornerRadius={8}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{
                    background: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-5xl font-bold text-white">
                {total}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Total
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-center">
              <div className="mx-auto mb-3 h-3 w-3 rounded-full bg-emerald-500" />

              <h3 className="text-3xl font-bold text-emerald-400">
                {completed}
              </h3>

              <p className="mt-1 text-sm text-slate-300">
                Completed
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5 text-center">
              <div className="mx-auto mb-3 h-3 w-3 rounded-full bg-amber-500" />

              <h3 className="text-3xl font-bold text-amber-400">
                {pending}
              </h3>

              <p className="mt-1 text-sm text-slate-300">
                Pending
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-center">
            <p className="text-sm text-slate-400">
              Completion Rate
            </p>

            <h3 className="mt-2 text-2xl font-bold text-indigo-400">
              {Math.round((completed / total) * 100)}%
            </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default AssignmentChart;