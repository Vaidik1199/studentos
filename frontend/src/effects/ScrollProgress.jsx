import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0%",
      }}
      className="fixed left-0 top-0 z-[9999] h-[3px] w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 shadow-[0_0_18px_rgba(99,102,241,0.8)]"
    />
  );
}

export default ScrollProgress;