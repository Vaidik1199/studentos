import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Heart, ExternalLink } from "lucide-react";

const productLinks = [
  { name: "Features", type: "scroll", target: "features" },
  { name: "Study Planner", type: "link", target: "/study-planner" },
  { name: "Analytics", type: "link", target: "/analytics" },
  { name: "AI Assistant", type: "link", target: "/ai" },
];

const companyLinks = [
  { name: "About", type: "scroll", target: "about" },
  { name: "Contact", type: "scroll", target: "contact" },
  { name: "Privacy Policy", type: "link", target: "/privacy" },
  { name: "Terms", type: "link", target: "/terms" },
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
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950">
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-violet-500/20 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
        }}
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]"
      />
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -35, 0],
            opacity: [0.15, 0.6, 0.15],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + i,
            delay: i * 0.4,
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-indigo-400"
          style={{
            left: `${8 + i * 8}%`,
            top: `${20 + (i % 4) * 18}%`,
          }}
        />
      ))}

      {/* Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:34px_34px]" />

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="relative mx-auto max-w-7xl px-6 py-24"
      >
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-[1.5fr_0.9fr_0.9fr_1.1fr]">
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <motion.h2
              whileHover={{
                scale: 1.05,
                rotate: -2,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="text-4xl font-black text-white"
            >
              Student
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                OS
              </span>
            </motion.h2>

            <p className="mt-5 leading-8 text-slate-400">
              StudentOS is an open-source academic workspace that helps students
              organize attendance, assignments, notes, analytics and AI-powered
              study planning — all in one place.
            </p>

            {/* Premium Social Buttons Container */}
            <div className="mt-10 flex gap-4">
              <a
                href="https://github.com/Vaidik1199"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-500/20"
                whileHover={{
                  y: -6,
                  scale: 1.08,
                  rotate: -2,
                }}
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/vaidik-choudhary-a21b40294/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-500/20"
                whileHover={{
                  y: -6,
                  scale: 1.08,
                  rotate: -2,
                }}
              >
                LinkedIn
              </a>

              <a
                href="mailto:studentos.web@gmail.com"
                className="rounded-xl bg-slate-900 p-3 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-500/20"
                whileHover={{
                  y: -6,
                  scale: 1.08,
                  rotate: -2,
                }}
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Product */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-8 text-lg font-bold text-white">Product</h3>

            <div className="space-y-5">
              {productLinks.map((item) =>
                item.type === "scroll" ? (
                  <motion.button
                    whileHover={{ x: 8 }}
                    key={item.name}
                    onClick={() => scrollToSection(item.target)}
                    className="group flex items-center gap-3 text-slate-400 transition hover:text-indigo-400"
                  >
                    {item.name}
                    <motion.div
                      whileHover={{
                        x: 6,
                        rotate: -10,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      <ExternalLink size={16} />
                    </motion.div>
                  </motion.button>
                ) : (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 8 }}
                  >
                    <Link
                      to={item.target}
                      className="group flex items-center gap-3 text-slate-400 transition hover:text-indigo-400"
                    >
                      {item.name}
                      <motion.div
                        whileHover={{
                          x: 6,
                          rotate: -10,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                      >
                        <ExternalLink size={16} />
                      </motion.div>
                    </Link>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-8 text-lg font-bold text-white">Company</h3>

            <div className="space-y-5">
              {companyLinks.map((item) =>
                item.type === "scroll" ? (
                  <motion.button
                    whileHover={{ x: 8 }}
                    key={item.name}
                    onClick={() => scrollToSection(item.target)}
                    className="group flex items-center gap-3 text-slate-400 transition hover:text-indigo-400"
                  >
                    {item.name}
                    <motion.div
                      whileHover={{
                        x: 6,
                        rotate: -10,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      <ExternalLink size={16} />
                    </motion.div>
                  </motion.button>
                ) : (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 8 }}
                  >
                    <Link
                      to={item.target}
                      className="group flex items-center gap-3 text-slate-400 transition hover:text-indigo-400"
                    >
                      {item.name}
                      <motion.div
                        whileHover={{
                          x: 6,
                          rotate: -10,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                      >
                        <ExternalLink size={16} />
                      </motion.div>
                    </Link>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Support */}

          <motion.div variants={fadeUp}>
            <h3 className="mb-8 text-lg font-bold text-white">
              Support
            </h3>

            <div className="space-y-6">

              {/* Email */}

              <motion.div
                whileHover={{ x: 5 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
              >
                <p className="text-sm text-slate-500">
                  Support Email
                </p>

                <a
                  href="mailto:studentos.web@gmail.com"
                  className="mt-2 inline-block text-indigo-400 transition hover:text-white"
                >
                  studentos.web@gmail.com
                </a>
              </motion.div>

              {/* Github */}

              <motion.div
                whileHover={{ x: 5 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
              >
                <p className="text-sm text-slate-500">
                  Open Source Repository
                </p>

                <a
                  href="https://github.com/Vaidik1199/studentos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block break-all text-indigo-400 transition hover:text-white"
                >
                  github.com/Vaidik1199/studentos
                </a>
              </motion.div>

              {/* Premium Card */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-slate-900/80 to-violet-500/10 p-6 backdrop-blur-xl"
              >

                {/* Floating Glow */}

                <motion.div
                  animate={{
                    x: [-30, 30, -30],
                    y: [-20, 20, -20],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-500/20 blur-[80px]"
                />

                {/* Shine */}

                <div className="absolute inset-0 overflow-hidden rounded-[28px]">
                  <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
                </div>

                {/* Sparkle */}

                <motion.div
                  animate={{
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                  }}
                  className="absolute right-5 top-5 text-3xl"
                >
                  ✨
                </motion.div>

                <h4 className="relative text-lg font-bold text-white">
                  💜 Open Source
                </h4>

                <p className="relative mt-4 leading-7 text-slate-300">
                  StudentOS is built for students and the community.
                  Contributions, bug reports and feature ideas are
                  always welcome.
                </p>

                {/* Progress */}

                <div className="relative mt-7 h-1.5 overflow-hidden rounded-full bg-slate-800">

                  <motion.div
                    animate={{
                      width: ["30%", "100%", "30%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"
                  />

                </div>

              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={fadeUp}
          className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-10 text-sm md:flex-row"
        >
          <p className="text-slate-500">
            © {new Date().getFullYear()} StudentOS
          </p>

          <motion.p
            className="flex items-center gap-2 text-slate-500"
            whileHover={{
              scale: 1.03,
            }}
          >
            Built with
            <motion.span
              animate={{
                scale: [1, 1.18, 1],
                rotate: [0, -6, 6, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            >
              <Heart size={16} className="fill-red-500 text-red-500" />
            </motion.span>
            by{" "}
            <span className="font-bold text-white">Vaidik Choudhary</span>
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        animate={{
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
        className="h-[2px] bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 bg-[length:200%_100%]"
      />
    </footer>
  );
}

export default Footer;