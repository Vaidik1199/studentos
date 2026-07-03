function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">

      <div>
        <h2 className="text-2xl font-bold">
          Welcome Back 👋
        </h2>

        <p className="text-sm text-slate-400">
          Ready to study today?
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 font-semibold">
          V
        </div>

      </div>

    </header>
  );
}

export default Topbar;