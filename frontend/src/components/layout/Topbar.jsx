import { Menu, User, LogOut, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useRef, useState } from "react";

function Topbar({ setSidebarOpen }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);

  // ✅ Added user data helper variables from localStorage
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const fullName = user.fullName || "Student";
  const firstName = fullName.split(" ")[0];
  const initials = fullName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hours = new Date().getHours();

  let greeting = "Good Evening";

  if (hours < 12) greeting = "Good Morning";
  else if (hours < 17) greeting = "Good Afternoon";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Left */}
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

        {/* Right */}
        <div
          ref={profileRef}
          className="relative"
        >
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 rounded-2xl bg-slate-900 px-3 py-2 transition hover:bg-slate-800"
          >
            {/* ✅ Replaced "V" with initials */}
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
              {initials}
            </div>

            {/* ✅ Replaced static text with firstName and welcome message */}
            <div className="hidden text-left lg:block">
              <p className="font-semibold text-white">
                {firstName}
              </p>

              <p className="text-xs text-slate-400">
                Welcome Back
              </p>
            </div>

            <ChevronDown
              size={18}
              className={`hidden text-slate-400 transition duration-200 lg:block ${
                showProfile ? "rotate-180" : ""
              }`}
            />
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">

              <div className="border-b border-slate-800 p-5">
                <div className="flex items-center gap-3">

                  {/* ✅ Replaced static "V" inside dropdown with initials */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                    {initials}
                  </div>

                  {/* ✅ Replaced static dropdown text with fullName and email */}
                  <div>
                    <p className="font-semibold text-white">
                      {fullName}
                    </p>

                    <p className="text-sm text-slate-400">
                      {user.email}
                    </p>
                  </div>

                </div>
              </div>

              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 px-5 py-4 text-left text-red-400 transition hover:bg-red-500/10"
              >
                <LogOut size={18} />
                Logout
              </button>

            </div>
          )}
        </div>

      </div>
    </header>
  );
}

export default Topbar;