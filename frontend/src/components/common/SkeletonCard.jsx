function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="h-4 w-24 rounded bg-slate-700"></div>

      <div className="mt-5 h-10 w-20 rounded bg-slate-700"></div>

      <div className="mt-5 h-3 w-32 rounded bg-slate-700"></div>
    </div>
  );
}

export default SkeletonCard;