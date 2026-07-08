import {
  Search,
  Bell,
  Moon,
  Menu,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

function Topbar({ setSidebarOpen }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const hours = new Date().getHours();

  let greeting = "Good Evening";

  if (hours < 12) greeting = "Good Morning";
  else if (hours < 17) greeting = "Good Afternoon";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LEFT */}

        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-xl bg-slate-900 p-3 transition hover:bg-slate-800 lg:hidden"
          >
            <Menu size={22} />
          </button>

          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              {greeting} 👋
            </h2>

            <p className="mt-1 hidden text-sm text-slate-400 sm:block">
              Ready to study today?
            </p>
          </div>
        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-3">
          {/* Search */}

          <div className="relative hidden xl:block">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              readOnly
              placeholder="Search StudentOS... (Ctrl + K)"
              onClick={() =>
                window.dispatchEvent(new Event("open-command-palette"))
              }
              className="w-80 cursor-pointer rounded-2xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-white outline-none transition focus:border-indigo-500"
            />
          </div>

          {/* Theme */}

          <button className="rounded-2xl bg-slate-900 p-3 transition hover:bg-slate-800">
            <Moon size={20} />
          </button>

          {/* Notification */}

          <button className="relative rounded-2xl bg-slate-900 p-3 transition hover:bg-slate-800">
            <Bell size={20} />

            <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              3
            </span>
          </button>

          {/* Profile */}

          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3 rounded-2xl bg-slate-900 px-3 py-2 transition hover:bg-slate-800"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                V
              </div>

              <div className="hidden text-left lg:block">
                <p className="font-semibold text-white">Student</p>

                <p className="text-xs text-slate-400">Welcome back</p>
              </div>

              <ChevronDown
                size={18}
                className={`hidden text-slate-400 transition lg:block ${
                  showProfile ? "rotate-180" : ""
                }`}
              />
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-3 w-60 rounded-2xl border border-slate-700 bg-slate-900 p-2 shadow-2xl">
                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-slate-800">
                  <User size={18} />
                  Profile
                </button>

                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-slate-800">
                  <Moon size={18} />
                  Theme
                </button>

                <hr className="my-2 border-slate-700" />

                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-red-400 transition hover:bg-red-500/10"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
