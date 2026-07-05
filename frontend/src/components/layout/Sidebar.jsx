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
  X,
} from "lucide-react";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navItem =
    "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200";

  const closeSidebar = () => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-900 transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-8">

          <div>
            <h1 className="text-3xl font-bold tracking-wide text-indigo-500">
              StudentOS
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Student Productivity
            </p>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 hover:bg-slate-800 lg:hidden"
          >
            <X size={22} />
          </button>

        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 px-4 py-6">

          <NavLink
            to="/dashboard"
            onClick={closeSidebar}
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
            onClick={closeSidebar}
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
            onClick={closeSidebar}
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
            onClick={closeSidebar}
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
            onClick={closeSidebar}
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
            onClick={closeSidebar}
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

        {/* User */}
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
    </>
  );
}

export default Sidebar;