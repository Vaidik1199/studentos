import { Link } from "react-router-dom";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-white transition hover:text-indigo-400"
        >
          Student<span className="text-indigo-500">OS</span>
        </Link>

        {/* Navigation */}

        <div className="hidden items-center gap-10 md:flex">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Buttons */}

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="rounded-xl border border-slate-700 px-5 py-2.5 font-medium text-slate-300 transition hover:border-indigo-500 hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-indigo-600 px-5 py-2.5 font-medium text-white transition hover:bg-indigo-700"
          >
            Get Started
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;