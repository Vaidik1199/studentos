import { motion } from "framer-motion";

function AttendanceProgress({ percentage = 0 }) {
  const status =
    percentage >= 90
      ? "Excellent"
      : percentage >= 75
      ? "Good"
      : percentage >= 60
      ? "Average"
      : "Needs Improvement";

  const color =
    percentage >= 90
      ? "from-emerald-400 to-green-600"
      : percentage >= 75
      ? "from-cyan-400 to-emerald-500"
      : percentage >= 60
      ? "from-yellow-400 to-orange-500"
      : "from-red-400 to-pink-600";

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Attendance Progress
          </h2>

          <p className="mt-1 text-slate-400">
            Overall Attendance
          </p>
        </div>

        <div
          className={`rounded-full bg-gradient-to-r ${color} px-4 py-2 text-sm font-semibold text-white`}
        >
          {status}
        </div>
      </div>

      <div className="flex items-center justify-center">

        <div className="relative h-[320px] w-[220px]">

          {/* Tank */}

          <div className="absolute inset-0 overflow-hidden rounded-[40px] border-[5px] border-cyan-300/60 bg-slate-950 shadow-[0_0_40px_rgba(34,211,238,.25)] backdrop-blur">

            {/* Water */}

            <motion.div
              initial={{
                height: 0,
              }}
              animate={{
                height: `${percentage}%`,
              }}
              transition={{
                duration: 1.6,
                ease: "easeOut",
              }}
              className={`absolute bottom-0 left-0 w-full bg-gradient-to-t ${color}`}
            >

              {/* Wave */}

              <motion.div
                animate={{
                  x: [0, -80],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "linear",
                }}
                className="absolute -top-6 h-12 w-[200%] rounded-[100%] bg-white/25 blur-sm"
              />

              {/* Bubbles */}

              <motion.span
                animate={{
                  y: [-5, -160],
                  opacity: [1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="absolute left-10 bottom-6 h-3 w-3 rounded-full bg-white/60"
              />

              <motion.span
                animate={{
                  y: [-10, -140],
                  opacity: [1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  delay: 1,
                }}
                className="absolute right-8 bottom-10 h-4 w-4 rounded-full bg-white/40"
              />

              <motion.span
                animate={{
                  y: [-10, -180],
                  opacity: [1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.8,
                  delay: .5,
                }}
                className="absolute left-1/2 bottom-3 h-2 w-2 rounded-full bg-white/60"
              />

            </motion.div>

            {/* Percentage */}

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <motion.h1
                initial={{
                  scale: .8,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: .8,
                }}
                className="text-6xl font-extrabold text-white drop-shadow-lg"
              >
                {percentage}%
              </motion.h1>

              <p className="mt-3 text-lg text-slate-200">
                Attendance
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="mt-10">

        <div className="mb-2 flex justify-between text-sm">

          <span className="text-red-400">
            0%
          </span>

          <span className="text-yellow-400">
            50%
          </span>

          <span className="text-emerald-400">
            100%
          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-800">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${percentage}%`,
            }}
            transition={{
              duration: 1.4,
            }}
            className={`h-full rounded-full bg-gradient-to-r ${color}`}
          />

        </div>

      </div>

    </div>
  );
}

export default AttendanceProgress;