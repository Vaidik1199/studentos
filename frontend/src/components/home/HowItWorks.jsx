import {
  UserPlus,
  FolderKanban,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Account",
    description:
      "Sign up in seconds and unlock your personalized academic workspace.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: FolderKanban,
    title: "Organize Your Semester",
    description:
      "Track attendance, notes, assignments and study plans from one dashboard.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: BrainCircuit,
    title: "Study Smarter with AI",
    description:
      "Generate summaries, study plans and instant explanations whenever you need them.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
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
    y: 70,
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

function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Animated Background */}

      <motion.div
        animate={{
          scale:[1,1.18,1],
          opacity:[.12,.22,.12],
        }}
        transition={{
          duration:12,
          repeat:Infinity,
        }}
        className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-600 blur-[180px]"
      />

      <motion.div
        animate={{
          x:[0,25,0],
          y:[0,-30,0],
        }}
        transition={{
          duration:15,
          repeat:Infinity,
        }}
        className="absolute -left-32 top-44 h-80 w-80 rounded-full bg-violet-500/20 blur-[150px]"
      />

      <motion.div
        animate={{
          x:[0,-25,0],
          y:[0,35,0],
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
            ⚡ HOW IT WORKS
          </motion.span>

          <h2 className="mt-10 text-4xl font-black text-white md:text-6xl">

            Start Your Journey

            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              In 3 Steps
            </span>

          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-400">

            Create your account, organize your semester,
            and let AI help you learn faster.

            StudentOS makes academic productivity effortless.

          </p>

        </motion.div>

                {/* Timeline */}

        <motion.div
          variants={container}
          className="relative mt-24 grid gap-10 lg:grid-cols-3"
        >
          {/* Connection Line */}

          <div className="absolute left-[16%] right-[16%] top-20 hidden h-[2px] bg-gradient-to-r from-indigo-500/30 via-violet-500/50 to-cyan-500/30 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                variants={cardVariant}
                whileHover={{
                  y: -12,
                  rotateX: 5,
                  rotateY: index === 1 ? 0 : index === 0 ? -5 : 5,
                  scale: 1.03,
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
                className="group relative overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl"
              >
                {/* Glow */}

                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Moving Blur */}

                <motion.div
                  animate={{
                    x: [-20, 25, -20],
                    y: [-15, 20, -15],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-indigo-500/10 blur-[80px]"
                />

                {/* Shine */}

                <div className="absolute inset-0 overflow-hidden rounded-[32px]">
                  <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
                </div>

                {/* Step Number */}

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="absolute right-6 top-6 text-7xl font-black text-slate-800"
                >
                  0{index + 1}
                </motion.div>

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
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl ${step.bg}`}
                >
                  <Icon
                    size={30}
                    className={step.color}
                  />
                </motion.div>

                {/* Title */}

                <h3 className="relative mt-8 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="relative mt-5 leading-8 text-slate-400">
                  {step.description}
                </p>

                {/* Bottom Line */}

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
                    delay: index * 0.3,
                  }}
                  className="absolute bottom-6 right-6 h-2.5 w-2.5 rounded-full bg-indigo-400"
                />

                {/* Animated Arrow */}

                {index !== steps.length - 1 && (
                  <motion.div
                    animate={{
                      x: [0, 8, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.8,
                    }}
                    className="absolute -right-7 top-1/2 hidden -translate-y-1/2 lg:flex"
                  >
                    <ArrowRight
                      size={36}
                      className="text-indigo-500/60"
                    />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

      </motion.div>
    </section>
  );
}

export default HowItWorks;