import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  NotebookPen,
  BarChart3,
  Bot,
  BrainCircuit,
  LogOut,
  X,
  Settings,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { useAuth } from "../../contexts/AuthContext";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const { user } = useAuth();

  const fullName = user?.fullName || "Student";

  const initials = fullName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const closeSidebar = () => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  const navItem =
    "group relative flex items-center gap-3 overflow-hidden rounded-2xl px-4 py-3.5 font-medium transition-all duration-300 hover:translate-x-1";

  return (
    <>
      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        data-lenis-prevent
        className={`fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85vw] flex-col overflow-hidden border-r border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 shadow-2xl transition-transform duration-300 lg:static lg:flex lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Decorative Glow */}

        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl" />

        {/* Header */}

        <div className="relative border-b border-slate-800/80 px-6 py-7">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 shadow-lg shadow-indigo-600/30">

                <GraduationCap
                  size={28}
                  className="text-white"
                />

              </div>

              <div>

                <div className="flex items-center gap-2">

                  <h1 className="text-2xl font-black tracking-tight text-white">
                    Student
                    <span className="text-indigo-400">
                      OS
                    </span>
                  </h1>

                  <Sparkles
                    size={16}
                    className="text-yellow-400"
                  />

                </div>

                <p className="mt-1 text-xs tracking-widest text-slate-500 uppercase">
                  Smart Student Workspace
                </p>

              </div>

            </div>

            <button
              onClick={() => setSidebarOpen(false)}
              className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white lg:hidden"
            >
              <X size={22} />
            </button>

          </div>

        </div>

                {/* Navigation */}

        <nav className="flex-1 overflow-y-auto px-4 py-6 no-scrollbar">

          {/* Workspace */}

          <div className="mb-8">

            <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">
              Workspace
            </p>

            <div className="space-y-2">

              <NavLink
                to="/dashboard"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `${navItem} ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-xl shadow-indigo-600/25"
                      : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                  }`
                }
              >
                <LayoutDashboard size={20} />
                <span className="flex-1">Dashboard</span>
              </NavLink>

              <NavLink
                to="/attendance"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `${navItem} ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-xl shadow-indigo-600/25"
                      : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                  }`
                }
              >
                <BookOpen size={20} />
                <span className="flex-1">Attendance</span>
              </NavLink>

              <NavLink
                to="/assignments"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `${navItem} ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-xl shadow-indigo-600/25"
                      : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                  }`
                }
              >
                <ClipboardList size={20} />
                <span className="flex-1">Assignments</span>
              </NavLink>

              <NavLink
                to="/notes"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `${navItem} ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-xl shadow-indigo-600/25"
                      : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                  }`
                }
              >
                <NotebookPen size={20} />
                <span className="flex-1">Notes</span>
              </NavLink>

            </div>

          </div>

          {/* Intelligence */}

          <div>

            <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">
              Intelligence
            </p>

            <div className="space-y-2">

              <NavLink
                to="/analytics"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `${navItem} ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-xl shadow-indigo-600/25"
                      : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                  }`
                }
              >
                <BarChart3 size={20} />
                <span className="flex-1">Analytics</span>
              </NavLink>

              <NavLink
                to="/ai"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `${navItem} ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-xl shadow-indigo-600/25"
                      : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                  }`
                }
              >
                <Bot size={20} />
                <span className="flex-1">AI Assistant</span>
              </NavLink>

              <NavLink
                to="/study-planner"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `${navItem} ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-xl shadow-indigo-600/25"
                      : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                  }`
                }
              >
                <BrainCircuit size={20} />
                <span className="flex-1">Study Planner</span>
              </NavLink>

              <NavLink
                to="/study-plans"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `${navItem} ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-xl shadow-indigo-600/25"
                      : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                  }`
                }
              >
                <ClipboardList size={20} />
                <span className="flex-1">My Study Plans</span>
              </NavLink>

            </div>

          </div>

        </nav>
                {/* Bottom Section */}

        <div className="border-t border-slate-800/80 bg-slate-950/60 p-5 backdrop-blur-xl">

          {/* Profile Card */}

          <NavLink
            to="/profile"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `group mb-4 flex items-center gap-4 rounded-3xl border p-4 transition-all duration-300 ${
                isActive
                  ? "border-indigo-500/40 bg-gradient-to-r from-indigo-600/20 to-violet-600/20"
                  : "border-slate-800 bg-slate-900/70 hover:border-indigo-500/40 hover:bg-slate-800/80"
              }`
            }
          >
            <div className="relative">

              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 font-bold text-white shadow-lg">

                {user?.profilePicture?.url ? (
                  <img
                    src={user.profilePicture.url}
                    alt={fullName}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  initials
                )}

              </div>

              <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-slate-900 bg-emerald-500" />

            </div>

            <div className="min-w-0 flex-1">

              <h3 className="truncate text-sm font-bold text-white">
                {fullName}
              </h3>

              <p className="truncate text-xs text-slate-400">
                {user?.email}
              </p>

            </div>

          </NavLink>

          {/* Settings */}

          <NavLink
            to="/settings"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `mb-3 flex items-center justify-center gap-2 rounded-2xl py-3.5 font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-lg shadow-indigo-600/20"
                  : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-indigo-500 hover:bg-slate-800"
              }`
            }
          >
            <Settings size={18} />

            Settings

          </NavLink>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-500/30 bg-red-500/10 py-3.5 font-semibold text-red-300 transition-all duration-300 hover:bg-red-600 hover:text-white hover:shadow-xl hover:shadow-red-600/20"
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