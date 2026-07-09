import { Mail, ExternalLink } from "lucide-react";

const socials = [
  {
    name: "GitHub Repository",
    value: "View Source Code",
    href: "https://github.com/Vaidik1199/studentos",
    icon: "GH",
    color: "text-white",
  },
  {
    name: "Developer GitHub",
    value: "Vaidik1199",
    href: "https://github.com/Vaidik1199",
    icon: "GH",
    color: "text-slate-300",
  },
  {
    name: "LinkedIn",
    value: "Connect with Developer",
    href: "https://www.linkedin.com/in/vaidik-choudhary-a21b40294/",
    icon: "in",
    color: "text-sky-400",
  },
  {
    name: "Instagram",
    value: "@vaidikhc.99",
    href: "https://www.instagram.com/vaidikhc.99/?hl=en",
    icon: "IG",
    color: "text-pink-400",
  },
];

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      {/* Background */}

      <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-400">
            CONTACT
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">
            Need Help?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Whether you found a bug, have an idea, or simply want to say hello,
            we'd love to hear from you.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* Left */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10">
              <Mail size={32} className="text-indigo-400" />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">
              StudentOS Support
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              For technical support, feature requests, bug reports or
              collaboration opportunities, contact us anytime.
            </p>

            <div className="mt-10 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-6">
              <p className="text-sm text-slate-400">Support Email</p>

              <a
                href="mailto:studentos.web@gmail.com"
                className="mt-2 block text-xl font-semibold text-indigo-300 transition hover:text-white"
              >
                studentos.web@gmail.com
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">
              <h4 className="font-semibold text-white">💜 Open Source</h4>

              <p className="mt-3 leading-7 text-slate-300">
                StudentOS is completely open source. Contributions, bug reports
                and feature requests are always welcome.
              </p>
            </div>
          </div>

          {/* Right */}

          <div className="space-y-5">
            {socials.map((item) => {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500"
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800">
                      <div className={`text-lg font-bold ${item.color}`}>
                        {item.icon}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">{item.name}</p>

                      <h3 className="mt-1 text-lg font-semibold text-white">
                        {item.value}
                      </h3>
                    </div>
                  </div>

                  <ExternalLink
                    size={20}
                    className="text-slate-500 transition group-hover:text-indigo-400"
                  />
                </a>
              );
            })}

            <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-indigo-600 to-violet-600 p-8">
              <h3 className="text-2xl font-bold text-white">
                Built with ❤️ by
              </h3>

              <p className="mt-2 text-xl font-semibold text-white">
                Vaidik Choudhary
              </p>

              <p className="mt-4 leading-7 text-indigo-100">
                Full Stack Developer passionate about building beautiful
                software and AI-powered applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
