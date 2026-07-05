import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="max-w-lg text-center">

        <h1 className="text-8xl font-extrabold text-indigo-500">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-400">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link
            to="/dashboard"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            <Home size={18} />
            Dashboard
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 transition hover:bg-slate-800"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

      </div>
    </div>
  );
}

export default NotFound;