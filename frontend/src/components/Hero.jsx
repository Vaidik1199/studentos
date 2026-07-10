import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.3, 0.18],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-32 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-indigo-600 blur-[170px]"
      />

      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 25, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]"
      />

      {/* Floating Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:34px_34px] opacity-40" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 text-center"
      >
        {/* Premium Badge */}
        <motion.div
          variants={fadeUp}
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-white/5 px-6 py-3 backdrop-blur-xl"
        >
          <span className="text-lg">✨</span>
          <span className="text-sm font-semibold tracking-wide text-indigo-300">
            Built for Students • Powered by AI
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="max-w-5xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl"
        >
          Everything You Need
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            To Succeed In College.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mt-10 max-w-3xl text-xl leading-9 text-slate-400"
        >
          Organize notes, manage attendance, track assignments, plan your
          semester and study smarter with your personal AI academic workspace.
        </motion.p>

        {/* Buttons */}

        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
            }}
          >
            <Link
              to="/register"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700 px-10 font-semibold text-white shadow-xl shadow-indigo-600/30 transition-all"
            >
              Get Started Free
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
            }}
          >
            <button
              onClick={() =>
                document.getElementById("features")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/80 px-10 font-semibold text-white backdrop-blur transition hover:border-indigo-500"
            >
               Explore Features
            </button>
          </motion.div>
        </motion.div>
        {/* Mini Stats */}
        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-wrap items-center justify-center gap-10 text-sm text-slate-400"
        >
          <div>
            <span className="text-3xl font-bold text-white">100%</span>
            <p>Free Forever</p>
          </div>

          <div>
            <span className="text-3xl font-bold text-indigo-400">AI</span>
            <p>Powered Learning</p>
          </div>

          <div>
            <span className="text-3xl font-bold text-emerald-400">
              All-in-One
            </span>
            <p>Academic Workspace</p>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 80,
          }}
          whileHover={{
            rotateX: -4,
            rotateY: 4,
            scale: 1.015,
          }}
          style={{
            perspective: 1200,
            transformStyle: "preserve-3d",
          }}
          className="group relative mt-24 w-full max-w-6xl rounded-[32px] border border-slate-700/60 bg-slate-900/80 p-8 shadow-[0_40px_120px_rgba(79,70,229,0.25)] backdrop-blur-2xl"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

          {/* Browser */}
          <div className="relative z-10">
            {/* Browser Header */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="h-3 w-3 rounded-full bg-red-500"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: 0.3,
                  }}
                  className="h-3 w-3 rounded-full bg-yellow-500"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: 0.6,
                  }}
                  className="h-3 w-3 rounded-full bg-green-500"
                />
              </div>

              <div className="rounded-full bg-slate-800 px-5 py-2 text-xs text-slate-400">
                studentos.app/dashboard
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Schedule */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                }}
                className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-bold text-white">Today's Schedule</h3>
                  <span className="text-xl">📅</span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-900 p-4 text-left">
                    <p className="font-semibold text-white">DBMS Lecture</p>
                    <p className="mt-1 text-sm text-slate-400">10:00 AM</p>
                  </div>

                  <div className="rounded-2xl bg-slate-900 p-4 text-left">
                    <p className="font-semibold text-white">AI Practical</p>
                    <p className="mt-1 text-sm text-slate-400">1:00 PM</p>
                  </div>
                </div>
              </motion.div>

              {/* Attendance */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                }}
                className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 text-center"
              >
                <h3 className="font-bold text-white">Attendance</h3>
                <motion.p
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="mt-8 bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-7xl font-black text-transparent"
                >
                  92%
                </motion.p>
                <p className="mt-6 text-slate-400">
                  Excellent performance this semester.
                </p>
              </motion.div>

              {/* Assignment */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                }}
                className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-bold text-white">Assignment</h3>
                  <span className="text-xl">📝</span>
                </div>

                <div className="rounded-2xl bg-slate-900 p-4 text-left">
                  <p className="font-semibold text-white">
                    Operating Systems Report
                  </p>
                  <p className="mt-2 text-sm text-orange-400">Due Tomorrow</p>

                  <div className="mt-5 h-2 rounded-full bg-slate-700">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: "72%",
                      }}
                      transition={{
                        duration: 2,
                        delay: 1,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
