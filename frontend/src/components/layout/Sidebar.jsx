import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  NotebookPen,
  BarChart3,
  Bot,
  BrainCircuit,
  LogOut,
  User,
  X,
  Settings,
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
          className="fixed inset-0 z-40 bg-black/60 lg:hidden touch-none"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside data-lenis-prevent
  className={`fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85vw] flex-col overflow-y-auto border-r border-slate-800 bg-slate-900 transition-transform duration-300 lg:static lg:flex lg:translate-x-0 no-scrollbar ${
    sidebarOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-8">
          <div>
            <h1 className="text-3xl font-bold tracking-wide text-indigo-500">
              StudentOS
            </h1>

            <p className="mt-2 text-sm text-slate-400">Student Productivity</p>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 hover:bg-slate-800 lg:hidden"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation - ✅ Updated <nav> classes with no-scrollbar */}
        <nav className="flex-1 px-4 py-6">
          <NavLink
            to="/dashboard"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `${navItem} ${isActive
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
              `${navItem} ${isActive
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
              `${navItem} ${isActive
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
              `${navItem} ${isActive
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
              `${navItem} ${isActive
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
              `${navItem} ${isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            <Bot size={20} />
            AI Assistant
          </NavLink>

          <NavLink
            to="/study-planner"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `${navItem} ${isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            <BrainCircuit size={20} />
            Study Planner
          </NavLink>

          <NavLink
            to="/study-plans"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `${navItem} ${isActive
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            <ClipboardList size={20} />
            My Study Plans
          </NavLink>
        </nav>

        {/* User Section */}
        <div className="mt-auto border-t border-slate-800 bg-slate-900 p-4">
          {/* User Card */}

          <NavLink
            to="/profile"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `mb-4 flex items-center gap-3 rounded-2xl border p-3 transition ${isActive
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-slate-800 bg-slate-800/80 hover:border-indigo-500 hover:bg-slate-700"
              }`
            }
          >
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 font-bold text-white">
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

            <div className="min-w-0">
              <p className="truncate font-semibold text-white">{fullName}</p>

              <p className="truncate text-xs text-slate-400">
                {user?.email || "Loading..."}
              </p>
            </div>
          </NavLink>

          {/* Settings Button */}

          <NavLink
            to="/settings"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `mb-3 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold transition ${isActive
                ? "bg-indigo-600 text-white"
                : "border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`
            }
          >
            <Settings size={18} />
            Settings
          </NavLink>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700 active:scale-[0.98]"
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
