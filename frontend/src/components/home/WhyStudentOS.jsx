import {
  FolderOpen,
  Brain,
  Clock3,
  BarChart3,
} from "lucide-react";

import { motion } from "framer-motion";

const problems = [
  {
    icon: FolderOpen,
    title: "Everything in One Place",
    description:
      "Stop switching between multiple apps. Manage attendance, assignments, notes and study plans from one workspace.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Brain,
    title: "Study Smarter with AI",
    description:
      "Generate summaries, study plans and explanations instantly with your personal AI learning assistant.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Clock3,
    title: "Never Miss Deadlines",
    description:
      "Track assignments, attendance and upcoming exams before they become a problem.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: BarChart3,
    title: "Understand Your Progress",
    description:
      "Visual dashboards help you identify weak subjects and improve academic performance.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: .7,
      ease: "easeOut",
    },
  },
};

function WhyStudentOS() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >

      {/* Animated Background */}

      <motion.div
        animate={{
          scale: [1,1.2,1],
          opacity: [.12,.22,.12],
        }}
        transition={{
          duration:12,
          repeat:Infinity,
        }}
        className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600 blur-[180px]"
      />

      <motion.div
        animate={{
          y:[0,-35,0],
          x:[0,25,0],
        }}
        transition={{
          duration:15,
          repeat:Infinity,
        }}
        className="absolute -left-32 top-44 h-80 w-80 rounded-full bg-violet-500/20 blur-[150px]"
      />

      <motion.div
        animate={{
          y:[0,35,0],
          x:[0,-25,0],
        }}
        transition={{
          duration:18,
          repeat:Infinity,
        }}
        className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]"
      />

      {/* Grid */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:34px_34px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once:true,
          amount:.2,
        }}
        className="relative mx-auto max-w-7xl px-6"
      >

        {/* Heading */}

        <motion.div
          variants={cardVariant}
          className="mx-auto max-w-3xl text-center"
        >

          <motion.span
            whileHover={{
              scale:1.08,
            }}
            transition={{
              type:"spring",
              stiffness:250,
            }}
            className="inline-flex rounded-full border border-indigo-500/20 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wider text-indigo-300 backdrop-blur-xl"
          >
            ✨ WHY STUDENTOS?
          </motion.span>

          <h2 className="mt-10 text-4xl font-black text-white md:text-6xl">

            Designed Around

            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Student Life
            </span>

          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-400">

            StudentOS isn't another productivity app.

            It's a complete academic operating system
            that helps students stay organized,
            productive and stress free throughout
            their college journey.

          </p>

        </motion.div>

                {/* Cards */}

        <motion.div
          variants={container}
          className="mt-24 grid gap-8 md:grid-cols-2"
        >
          {problems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={item}
                whileHover={{
                  y: -12,
                  rotateX: 4,
                  rotateY: -4,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                style={{
                  perspective: 1200,
                  transformStyle: "preserve-3d",
                }}
                className="group relative overflow-hidden rounded-[30px] border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl"
              >
                {/* Animated Glow */}

                <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Moving Blur */}

                <motion.div
                  animate={{
                    x: [-30, 30, -30],
                    y: [-20, 20, -20],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-[70px]"
                />

                {/* Shine Effect */}

                <div className="absolute inset-0 overflow-hidden rounded-[30px]">
                  <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
                </div>

                {/* Icon */}

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.15,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg}`}
                >
                  <Icon
                    size={30}
                    className={item.color}
                  />
                </motion.div>

                {/* Title */}

                <h3 className="relative mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="relative mt-5 leading-8 text-slate-400">
                  {item.description}
                </p>

                {/* Bottom Accent */}

                <motion.div
                  whileHover={{
                    width: "100%",
                  }}
                  className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 transition-all duration-500 group-hover:w-full"
                />

                {/* Floating Dot */}

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-6 right-6 h-2 w-2 rounded-full bg-indigo-400"
                />
              </motion.div>
            );
          })}
        </motion.div>

      </motion.div>
    </section>
  );
}

export default WhyStudentOS;