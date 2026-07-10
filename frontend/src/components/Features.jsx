import { motion } from "framer-motion";
import {
  Brain,
  NotebookPen,
  ClipboardCheck,
  BarChart3,
  CalendarDays,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Study Assistant",
    description:
      "Generate study plans, summaries, explanations and smart revision material instantly using AI.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: NotebookPen,
    title: "Smart Notes",
    description:
      "Capture, organize and revisit your notes anytime with a clean and distraction-free workspace.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: ClipboardCheck,
    title: "Assignment Manager",
    description:
      "Track assignments, deadlines and priorities so you never miss an important submission.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: GraduationCap,
    title: "Attendance Tracker",
    description:
      "Monitor subject-wise attendance, identify shortages early and stay above your attendance target.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Visualize academic performance with beautiful charts and actionable insights to improve every semester.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    icon: CalendarDays,
    title: "Study Planner",
    description:
      "Create personalized study schedules based on your exams, subjects and daily study hours.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
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
      staggerChildren: 0.12,
    },
  },
};

function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-32">
      {/* Animated Background */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-44 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-600 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -35, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-violet-500/20 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]"
      />

      {/* Grid Pattern */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:34px_34px] opacity-30" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        className="relative mx-auto max-w-7xl px-6"
      >
        {/* Heading */}

        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <motion.span
            whileHover={{
              scale: 1.05,
            }}
            className="inline-flex rounded-full border border-indigo-500/20 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wide text-indigo-300 backdrop-blur-xl"
          >
            ✨ EVERYTHING YOU NEED
          </motion.span>

          <h2 className="mt-8 text-4xl font-black text-white md:text-6xl">
            Built Around Your
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Student Journey
            </span>
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-400">
            StudentOS combines AI, productivity and organization into one
            premium workspace designed for modern college students.
          </p>
        </motion.div>

        {/* Feature Cards */}

        <motion.div
          variants={stagger}
          className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                initial="rest"
                whileHover="hover"
                whileTap="hover"
                whileInView="rest"
                viewport={{ once: true }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                whileHover={{
                  y: -12,
                  rotateX: -6,
                  rotateY: index % 2 === 0 ? -5 : 5,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-slate-800/70 bg-slate-900/70 p-8 backdrop-blur-xl"
              >
                {/* Animated Glow */}

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

                {/* Shine */}

                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition duration-700 group-hover:translate-x-full" />

                {/* Icon */}

                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                  }}
                  className={`relative flex h-18 w-18 items-center justify-center rounded-3xl ${feature.bg}`}
                >
                  <Icon size={34} className={feature.color} />
                </motion.div>

                {/* Title */}

                <h3 className="relative mt-8 text-2xl font-bold text-white transition-all duration-300 group-hover:text-indigo-300">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="relative mt-5 min-h-[104px] leading-8 text-slate-400">
                  {feature.description}
                </p>

                {/* Bottom */}

                {/* Bottom Accent */}

                <div className="mt-8 flex items-center justify-between gap-4">
                  <div className="h-1 flex-1 overflow-hidden rounded-full">
                    <div className="h-full w-16 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
                  </div>

                  {/* Floating Dots */}

                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3 + index,
                    }}
                    className="absolute bottom-6 right-6 h-2 w-2 rounded-full bg-indigo-400"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Text */}

        <motion.div variants={fadeUp} className="mt-24 text-center">
          <p className="text-xl text-slate-400">
            Everything you need to stay
            <span className="font-bold text-white"> organized,</span>
            <span className="font-bold text-indigo-400"> productive</span> and
            <span className="font-bold text-emerald-400">
              {" "}
              academically ahead.
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Features;
