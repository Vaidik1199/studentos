import {
  Menu,
  User,
  LogOut,
  ChevronDown,
  Settings,
  Sparkles,
} from "lucide-react"; import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useRef, useState } from "react";

function Topbar({ setSidebarOpen }) {
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);

  // ✅ Added user data helper variables from localStorage
  const { user, logout } = useAuth();

  const fullName = user?.fullName || "Student";

  const firstName = fullName.split(" ")[0];

  const initials = fullName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const handleLogout = () => {
    logout();
    window.location.replace("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hours = new Date().getHours();

  let greeting = "Good Evening";

  if (hours < 12 && hours > 4) greeting = "Good Morning";
  else if (12 <= hours && hours < 17) greeting = "Good Afternoon";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/85 backdrop-blur-2xl">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LEFT */}

        <div className="flex min-w-0 items-center gap-4">

          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3 transition-all duration-300 hover:border-indigo-500 hover:bg-slate-800 lg:hidden"
          >
            <Menu size={22} />
          </button>

          <div className="min-w-0">

            <h1 className="mt-1 truncate text-[28px] font-black tracking-tight text-white sm:text-[30px]">

              {greeting}

              <span className="ml-2 text-slate-300">
                {firstName}
              </span>

            </h1>

            <p className="mt-1 hidden text-sm text-slate-500 md:block">
              Keep learning. Keep building. Every small step matters.
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div
          ref={profileRef}
          className="relative flex shrink-0 items-center"
        >

          <button
            onClick={() => setShowProfile(!showProfile)}
            className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800 hover:shadow-xl hover:shadow-black/20"
          >

            {/* Avatar */}

            <div className="overflow-hidden rounded-full">

              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 font-bold text-white">

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

            </div>

            {/* User */}

            <div className="hidden min-w-0 text-left xl:block">

              <p className="truncate text-sm font-semibold text-white">
                {fullName}
              </p>

              <p className="text-xs text-slate-500">
                Student Account
              </p>

            </div>

            <ChevronDown
              size={18}
              className={`hidden transition-all duration-300 xl:block ${showProfile
                ? "rotate-180 text-white"
                : "text-slate-500"
                }`}
            />

          </button>
          {showProfile && (
            <div className="absolute right-0 top-full z-50 mt-4 w-[92vw] max-w-[340px] overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900/95 shadow-[0_20px_60px_rgba(0,0,0,.55)] backdrop-blur-2xl">

              {/* Header */}

              <button
                onClick={() => {
                  navigate("/profile");
                  setShowProfile(false);
                }}
                className="group relative w-full overflow-hidden border-b border-slate-800 px-6 py-6 text-left transition-all duration-300 hover:bg-slate-800/60"
              >

                {/* Background Glow */}

                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl transition group-hover:bg-indigo-500/20" />

                <div className="relative flex items-center gap-4">

                  {/* Avatar */}

                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-slate-700 bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 text-lg font-bold text-white shadow-lg">

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

                  {/* User */}

                  <div className="min-w-0 flex-1">

                    <h3 className="truncate text-lg font-bold text-white">
                      {fullName}
                    </h3>

                    <p className="mt-1 truncate text-sm text-slate-400">
                      {user?.email}
                    </p>

                    <div className="mt-3 inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">

                      <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />

                      <span className="text-xs font-medium text-emerald-400">
                        Student Account
                      </span>

                    </div>

                  </div>

                </div>

              </button>

              {/* Navigation */}

              <div className="space-y-1 p-3">
                <button
                  onClick={() => {
                    navigate("/profile");
                    setShowProfile(false);
                  }}
                  className="group flex w-full items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-slate-800 hover:translate-x-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 transition group-hover:bg-indigo-500/20">
                    <User size={19} className="text-indigo-400" />
                  </div>

                  <div className="flex-1 text-left">
                    <p className="font-semibold text-white">
                      My Profile
                    </p>

                    <p className="text-xs text-slate-400">
                      View and manage your account
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => {
                    navigate("/settings");
                    setShowProfile(false);
                  }}
                  className="group flex w-full items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-slate-800 hover:translate-x-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 transition group-hover:bg-violet-500/20">
                    <Settings size={19} className="text-violet-400" />
                  </div>

                  <div className="flex-1 text-left">
                    <p className="font-semibold text-white">
                      Settings
                    </p>

                    <p className="text-xs text-slate-400">
                      Preferences & security
                    </p>
                  </div>
                </button>

                <div className="my-3 border-t border-slate-800" />

                <button
                  onClick={handleLogout}
                  className="group flex w-full items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-red-500/10 hover:translate-x-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 transition group-hover:bg-red-500/20">
                    <LogOut size={19} className="text-red-400" />
                  </div>

                  <div className="flex-1 text-left">
                    <p className="font-semibold text-red-400">
                      Logout
                    </p>

                    <p className="text-xs text-slate-500">
                      Sign out from StudentOS
                    </p>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}

export default Topbar;