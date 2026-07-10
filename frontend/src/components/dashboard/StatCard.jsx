import { motion } from "framer-motion";

function StatCard({
  title,
  value,
  subtitle,
  color = "text-indigo-500",
  icon,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
        rotateX: 5,
        rotateY: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/70 p-6 backdrop-blur-xl"
    >
      {/* Animated Glow */}

      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [-20, 20, -20],
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-500/15 blur-[80px]"
      />

      {/* Shine */}

      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[160%]" />
      </div>

      {/* Content */}

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm font-medium tracking-wide text-slate-400">
            {title}
          </p>

          <motion.h2
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className={`mt-3 text-5xl font-black ${color}`}
          >
            {value}
          </motion.h2>

          <p className="mt-3 text-sm text-slate-500">
            {subtitle}
          </p>
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
          className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 text-2xl text-white"
        >
          {icon}
        </motion.div>
      </div>

      {/* Bottom Progress */}

      <div className="relative mt-8 h-1 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: "100%",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"
        />
      </div>
    </motion.div>
  );
}

export default StatCard;