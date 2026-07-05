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
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg"
    >
      <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2
            className={`mt-2 text-4xl font-bold ${color}`}
          >
            {value}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {subtitle}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800 p-4 text-3xl">
          {icon}
        </div>
      </div>

      <div className="mt-5 h-1 rounded-full bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        />
      </div>
    </motion.div>
  );
}

export default StatCard;