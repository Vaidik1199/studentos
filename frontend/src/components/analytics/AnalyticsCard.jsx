function AnalyticsCard({
  title,
  value,
  subtitle,
  color = "text-indigo-400",
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-indigo-500">
      <h3 className="text-lg font-medium text-slate-400">
        {title}
      </h3>

      <p className={`mt-3 text-4xl font-bold ${color}`}>
        {value}
      </p>

      <p className="mt-2 text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}

export default AnalyticsCard;