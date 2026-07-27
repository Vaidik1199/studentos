import { Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

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
    href: "https://www.linkedin.com/in/vaidikchoudhary/",
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

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      {/* Animated Background */}

      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-24 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-indigo-600 blur-[190px]"
      />

      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-28 top-40 h-80 w-80 rounded-full bg-violet-500/20 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[160px]"
      />

      {/* Grid */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:34px_34px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="relative mx-auto max-w-7xl px-6"
      >
        {/* Heading */}

        <motion.div
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            whileHover={{
              scale: 1.06,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="inline-flex rounded-full border border-indigo-500/20 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wider text-indigo-300 backdrop-blur-xl"
          >
            ✨ CONTACT
          </motion.span>

          <h2 className="mt-10 text-4xl font-black text-white md:text-6xl">
            Let's Build Something

            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Amazing.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
            Found a bug? Have an idea? Want to contribute?
            We'd love to hear from you and make StudentOS
            even better together.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          className="mt-24 grid gap-8 lg:grid-cols-2"
        >
          {/* Left */}

          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
            }}
            className="group relative overflow-hidden rounded-[30px] border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl"
          >
            {/* Glow */}

            <motion.div
              animate={{
                x: [-25, 25, -25],
                y: [-20, 20, -20],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
              }}
              className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-indigo-500/10 blur-[80px]"
            />

            {/* Shine */}

            <div className="absolute inset-0 overflow-hidden rounded-[30px]">
              <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
            </div>

            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.12,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
              }}
              className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10"
            >
              <Mail
                size={32}
                className="text-indigo-400"
              />
            </motion.div>

            <h3 className="relative mt-8 text-3xl font-black text-white">
              StudentOS Support
            </h3>

            <p className="relative mt-5 leading-8 text-slate-400">
              For technical support, feature requests,
              bug reports or collaboration opportunities,
              feel free to reach out anytime.
            </p>

            <div className="relative mt-10 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-6">
              <p className="text-sm text-slate-400">
                Support Email
              </p>

              <a
                href="mailto:studentos.web@gmail.com"
                className="mt-2 block text-xl font-semibold text-indigo-300 transition hover:text-white"
              >
                studentos.web@gmail.com
              </a>
            </div>

            <div className="relative mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">
              <h4 className="font-semibold text-white">
                💜 Open Source
              </h4>

              <p className="mt-3 leading-7 text-slate-300">
                Contributions, bug reports and feature
                requests are always welcome.
              </p>
            </div>
          </motion.div>
          {/* Right */}
          <motion.div
            variants={container}
            className="space-y-5"
          >
            {socials.map((item, index) => (
              <motion.a
                key={item.name}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                  transition={{
                  type: "spring",
                  stiffness: 230,
                }}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between overflow-hidden rounded-[30px] border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl"
              >
          {/* Glow */}
          <motion.div
            animate={{
              x: [-20, 20, -20],
              y: [-15, 15, -15],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + index,
            }}
            className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-indigo-500/10 blur-[70px]"
          />
          {/* Shine */}
          <div className="absolute inset-0 overflow-hidden rounded-[30px]">
            <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
          </div>

          <div className="relative flex items-center gap-5">
            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.15,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800"
            >
              <span
                className={`text-lg font-bold ${item.color}`}
              >
                {item.icon}
              </span>
            </motion.div>
            <div>
              <p className="text-sm text-slate-500">
                {item.name}
              </p>

              <h3 className="mt-1 text-lg font-bold text-white transition group-hover:text-indigo-300">
                {item.value}
              </h3>
            </div>
          </div>
          <motion.div
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          >
            <ExternalLink
              size={22}
              className="relative text-slate-500 transition group-hover:text-indigo-400"
            />
          </motion.div>
        </motion.a>
      ))}
      {/* Developer Card */}
      <motion.div
        variants={fadeUp}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
        }}
        className="group relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 p-8 shadow-[0_25px_80px_rgba(99,102,241,.35)]"
      >
      {/* Animated Glow */}
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [-20, 20, -20],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-[90px]"
      />
      {/* Shine */}
      <div className="absolute inset-0 overflow-hidden rounded-[32px]">
        <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
      </div>
      <motion.div
        animate={{
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="relative text-5xl"
      >
        ❤️
      </motion.div>

      <h3 className="relative mt-5 text-3xl font-black text-white">
        Crafted by
      </h3>

      <p className="relative mt-2 text-2xl font-bold text-white">
        Vaidik Choudhary
      </p>

      <p className="relative mt-5 leading-8 text-indigo-100">
        Full Stack Developer focused on creating beautiful,
        AI-powered experiences that genuinely help students
        become more productive.
      </p>

      <motion.div
        animate={{
          width: ["25%", "100%", "25%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="relative mt-8 h-1 rounded-full bg-white/90"
      />
    </motion.div>
  </motion.div>
</motion.div>

</motion.div>
</section>
  );
}

export default Contact;