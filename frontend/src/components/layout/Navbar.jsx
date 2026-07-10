import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Features", href: "features" },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
];

const navContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-slate-800/70 bg-slate-950/70 shadow-2xl backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
        >
          <Link
            to="/"
            className="bg-gradient-to-r from-white via-indigo-300 to-violet-400 bg-clip-text text-3xl font-black tracking-tight text-transparent"
          >
            StudentOS
          </Link>
        </motion.div>

        {/* Desktop Navigation */}

        <motion.div
          variants={navContainer}
          initial="hidden"
          animate="show"
          className="hidden items-center gap-10 md:flex"
        >
          {navLinks.map((link) => (
            <motion.button
              key={link.name}
              variants={navItem}
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => scrollToSection(link.href)}
              className="group relative text-sm font-medium text-slate-300 transition"
            >
              <span className="transition duration-300 group-hover:text-white">
                {link.name}
              </span>

              <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}
        </motion.div>

        {/* Desktop Buttons */}

        <motion.div
          variants={navContainer}
          initial="hidden"
          animate="show"
          className="hidden items-center gap-4 md:flex"
        >
          {token ? (
            <motion.div
              variants={navItem}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <Link
                to="/dashboard"
                className="rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700 px-6 py-3 font-semibold text-white shadow-xl shadow-indigo-600/30"
              >
                Dashboard
              </Link>
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={navItem}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
              >
                <Link
                  to="/login"
                  className="rounded-2xl border border-slate-700 bg-slate-900/60 px-6 py-3 font-medium text-slate-300 backdrop-blur transition hover:border-indigo-500 hover:text-white"
                >
                  Login
                </Link>
              </motion.div>

              <motion.div
                variants={navItem}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Link
                  to="/register"
                  className="rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700 px-6 py-3 font-semibold text-white shadow-xl shadow-indigo-600/30"
                >
                  Get Started
                </Link>
              </motion.div>
            </>
          )}
        </motion.div>

        {/* Mobile Button */}

        <motion.button
          whileTap={{
            scale: 0.9,
            rotate: 180,
          }}
          whileHover={{
            scale: 1.08,
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-2xl border border-slate-700 bg-slate-900/60 p-3 backdrop-blur transition hover:border-indigo-500 md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

            {/* Mobile Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="overflow-hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-2xl md:hidden"
          >
            <motion.div
              variants={navContainer}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="space-y-3 px-6 py-6"
            >
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  variants={navItem}
                  whileHover={{
                    x: 8,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  onClick={() => scrollToSection(link.href)}
                  className="flex w-full items-center rounded-2xl border border-transparent px-5 py-4 text-left font-medium text-slate-300 transition hover:border-indigo-500 hover:bg-slate-900 hover:text-white"
                >
                  {link.name}
                </motion.button>
              ))}

              <motion.div
                variants={navItem}
                className="mt-6 border-t border-slate-800 pt-6"
              >
                {token ? (
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                  >
                    <Link
                      to="/dashboard"
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700 px-5 py-4 text-center font-semibold text-white shadow-2xl shadow-indigo-600/30"
                    >
                      Dashboard
                    </Link>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                      }}
                    >
                      <Link
                        to="/login"
                        onClick={() => setMenuOpen(false)}
                        className="block rounded-2xl border border-slate-700 bg-slate-900/60 px-5 py-4 text-center font-medium text-slate-300 backdrop-blur transition hover:border-indigo-500 hover:text-white"
                      >
                        Login
                      </Link>
                    </motion.div>

                    <motion.div
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                    >
                      <Link
                        to="/register"
                        onClick={() => setMenuOpen(false)}
                        className="block rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700 px-5 py-4 text-center font-semibold text-white shadow-xl shadow-indigo-600/30"
                      >
                        Get Started Free
                      </Link>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;