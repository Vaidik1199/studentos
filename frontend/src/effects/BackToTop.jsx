import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";

function BackToTop() {
    const location = useLocation();

    const hiddenRoutes = [
        "/attendance",
        "/assignments",
        "/notes",
        "/ai",
    ];

    if (hiddenRoutes.includes(location.pathname)) {
        return null;
    }
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 450);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.button
                    initial={{
                        opacity: 0,
                        scale: 0.7,
                        y: 25,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.7,
                        y: 25,
                    }}
                    transition={{
                        duration: 0.25,
                    }}
                    whileHover={{
                        scale: 1.08,
                        y: -4,
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    onClick={scrollTop}
                    className="fixed bottom-8 right-8 z-[999] flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/30 bg-slate-900/80 text-indigo-300 shadow-2xl shadow-indigo-500/20 backdrop-blur-xl transition-colors hover:border-indigo-400 hover:text-white"
                >
                    <motion.div
                        animate={{
                            y: [0, -3, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.8,
                        }}
                    >
                        <ArrowUp size={22} />
                    </motion.div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}

export default BackToTop;