import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  NotebookPen,
  BarChart3,
  Bot,
  LogOut,
  User,
} from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navItem =
    "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200";

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-900">

      {/* Logo */}
      <div className="border-b border-slate-800 px-6 py-8">
        <h1 className="text-3xl font-bold tracking-wide text-indigo-500">
          StudentOS
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Student Productivity
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-4 py-6">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${navItem} ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/attendance"
          className={({ isActive }) =>
            `${navItem} ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <BookOpen size={20} />
          Attendance
        </NavLink>

        <NavLink
          to="/assignments"
          className={({ isActive }) =>
            `${navItem} ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <ClipboardList size={20} />
          Assignments
        </NavLink>

        <NavLink
          to="/notes"
          className={({ isActive }) =>
            `${navItem} ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <NotebookPen size={20} />
          Notes
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `${navItem} ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <BarChart3 size={20} />
          Analytics
        </NavLink>

        <NavLink
          to="/ai"
          className={({ isActive }) =>
            `${navItem} ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800"
            }`
          }
        >
          <Bot size={20} />
          AI Assistant
        </NavLink>

      </nav>

      {/* User Section */}
      <div className="border-t border-slate-800 p-4">

        <div className="mb-4 flex items-center gap-3 rounded-xl bg-slate-800 p-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600">
            <User size={20} />
          </div>

          <div>
            <p className="font-semibold text-white">
              Student
            </p>

            <p className="text-xs text-slate-400">
              Logged In
            </p>
          </div>

        </div>

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;