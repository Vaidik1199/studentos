import { motion } from "framer-motion";

function StatCard({
  title,
  value,
  subtitle,
  color = "text-indigo-500",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg"
    >
      <p className="text-sm font-medium text-slate-400">
        {title}
      </p>

      <h2
        className={`mt-3 text-4xl font-bold transition-all duration-300 ${color}`}
      >
        {value}
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default StatCard;