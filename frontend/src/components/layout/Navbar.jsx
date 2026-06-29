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

        <a
          href="/"
          className="text-2xl font-bold tracking-tight text-white transition hover:text-indigo-400"
        >
          Student<span className="text-indigo-500">OS</span>
        </a>

        {/* Navigation */}

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Login Button */}

        <button className="rounded-xl bg-indigo-600 px-5 py-2.5 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/30">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;