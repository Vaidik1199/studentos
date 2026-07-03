function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900 p-6">

      <h1 className="mb-10 text-2xl font-bold text-indigo-500">
        StudentOS
      </h1>

      <nav className="space-y-4">

        <button className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-left font-medium">
          Dashboard
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-slate-800">
          Attendance
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-slate-800">
          Assignments
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-slate-800">
          Notes
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-slate-800">
          AI Assistant
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;