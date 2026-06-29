const footerLinks = {
  Product: ["Features", "Roadmap", "Updates"],
  Resources: ["Documentation", "Support", "Privacy"],
  Company: ["About", "Contact", "GitHub"],
};

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Student<span className="text-indigo-500">OS</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              A modern workspace designed to help students organize,
              study smarter and achieve better results with AI.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 font-semibold text-white">
                {title}
              </h3>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© 2026 StudentOS. All rights reserved.</p>

          <p>Built with ❤️ using React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;