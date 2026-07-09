import { Mail, Heart, ExternalLink } from "lucide-react";

const productLinks = [
  { name: "Features", href: "#features" },
  { name: "Study Planner", href: "/study-planner" },
  { name: "Analytics", href: "/analytics" },
  { name: "AI Assistant", href: "/ai" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <h2 className="text-3xl font-extrabold text-white">
              Student
              <span className="text-indigo-500">OS</span>
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              StudentOS is an open-source academic workspace that helps students
              organize attendance, assignments, notes, analytics and AI-powered
              study planning — all in one place.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/Vaidik1199"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-slate-900 p-3 transition hover:bg-indigo-600"
              >
                <span className="font-semibold text-white">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/vaidik-choudhary-a21b40294/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-slate-900 p-3 transition hover:bg-indigo-600"
              >
                <span className="font-semibold text-white">LinkedIn</span>
              </a>

              <a
                href="mailto:studentos.web@gmail.com"
                className="rounded-xl bg-slate-900 p-3 transition hover:bg-indigo-600"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Product</h3>

            <div className="space-y-4">
              {productLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-400 transition hover:text-indigo-400"
                >
                  {item.name}

                  <ExternalLink size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Company</h3>

            <div className="space-y-4">
              {companyLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-400 transition hover:text-indigo-400"
                >
                  {item.name}

                  <ExternalLink size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Support */}

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Support</h3>

            <div className="space-y-5">
              <div>
                <p className="text-sm text-slate-500">Support Email</p>

                <a
                  href="mailto:studentos.web@gmail.com"
                  className="mt-1 block text-indigo-400 hover:text-indigo-300"
                >
                  studentos.web@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-slate-500">Open Source Repository</p>

                <a
                  href="https://github.com/Vaidik1199/studentos"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-indigo-400 hover:text-indigo-300"
                >
                  github.com/Vaidik1199/studentos
                </a>
              </div>

              <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-4">
                <h4 className="font-semibold text-white">💜 Open Source</h4>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Contributions, ideas and feature requests are always welcome.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 text-sm md:flex-row">
          <p className="text-slate-500">
            © {new Date().getFullYear()} StudentOS. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-slate-500">
            Built with
            <Heart size={16} className="fill-red-500 text-red-500" />
            by
            <span className="font-semibold text-white">Vaidik Choudhary</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
