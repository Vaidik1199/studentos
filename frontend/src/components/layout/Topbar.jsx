import { Search, Bell, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Topbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const hours = new Date().getHours();

  let greeting = "Good Evening";

  if (hours < 12) greeting = "Good Morning";
  else if (hours < 17) greeting = "Good Afternoon";

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="flex h-20 items-center justify-between px-8">

        {/* Left */}

        <div>
          <h2 className="text-2xl font-bold text-white">
            {greeting} 👋
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Ready to study today?
          </p>
        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* Search */}

          <div className="relative hidden lg:block">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-72 rounded-xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-white outline-none transition focus:border-indigo-500"
            />

          </div>

          {/* Theme */}

          <button className="rounded-xl bg-slate-900 p-3 transition hover:bg-slate-800">
            <Moon size={20} />
          </button>

          {/* Notification */}

          <button className="relative rounded-xl bg-slate-900 p-3 transition hover:bg-slate-800">

            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

          </button>

          {/* Avatar */}

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
            V
          </div>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="rounded-xl bg-red-600 px-5 py-2.5 font-semibold text-white transition hover:bg-red-700"
          >
            Logout
          </button>

        </div>

      </div>
    </header>
  );
}

export default Topbar;