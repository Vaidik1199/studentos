import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

function MouseSpotlight() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        background: useMotionTemplate`
          radial-gradient(
            500px circle at ${mouseX}px ${mouseY}px,
            rgba(99,102,241,.18),
            transparent 80%
          )
        `,
      }}
    />
  );
}

export default MouseSpotlight;