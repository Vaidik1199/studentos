import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

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

        <button
          onClick={handleLogout}
          className="rounded-xl border border-red-500 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          Logout
        </button>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 font-semibold">
          V
        </div>

      </div>
    </header>
  );
}

export default Topbar;