import { TrendingUp } from "lucide-react";

function AnalyticsCard({
  title,
  value,
  subtitle,
  color = "text-indigo-400",
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-indigo-500/20">

      {/* Background Glow */}
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-indigo-500/10 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/20" />

      <div className="relative z-10">

        <div className="flex items-start justify-between">

          <div>

            <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
              {title}
            </p>

            <h2 className={`mt-4 text-4xl font-bold ${color}`}>
              {value}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {subtitle}
            </p>

          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-500/20">
            <TrendingUp size={24} />
          </div>

        </div>

      </div>
    </div>
  );
}

export default AnalyticsCard;