import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is StudentOS completely free?",
    answer:
      "Yes. StudentOS is completely free to use and is open source. You can use every feature without any subscription.",
  },
  {
    question: "How does the AI Study Assistant work?",
    answer:
      "The AI Study Assistant helps generate study plans, explains difficult concepts, summarizes notes and assists with exam preparation using AI.",
  },
  {
    question: "Can I track attendance for multiple subjects?",
    answer:
      "Absolutely. StudentOS lets you manage attendance subject-wise and provides overall attendance analytics.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Your account is protected with encrypted passwords, secure authentication and private user data storage.",
  },
  {
    question: "Can I contribute to StudentOS?",
    answer:
      "Yes! StudentOS is open source. You can contribute through GitHub by reporting bugs, suggesting features or submitting pull requests.",
  },
];

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden py-32">
      {/* Animated Background */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-indigo-600 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-violet-500/15 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-52 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]"
      />

      {/* Grid */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:34px_34px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="relative mx-auto max-w-5xl px-6"
      >
        {/* Heading */}

        <motion.div
          variants={fadeUp}
          className="text-center"
        >
          <motion.span
            whileHover={{
              scale: 1.07,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="inline-flex rounded-full border border-indigo-500/20 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wider text-indigo-300 backdrop-blur-xl"
          >
            ✨ FREQUENTLY ASKED QUESTIONS
          </motion.span>

          <h2 className="mt-10 text-4xl font-black text-white md:text-6xl">
            Questions?

            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              We've Got Answers.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
            Everything you need to know about StudentOS, AI features,
            privacy, security and how the platform helps you succeed
            throughout your college journey.
          </p>
        </motion.div>

        {/* FAQ Items */}

        <motion.div
          variants={container}
          className="mt-24 space-y-6"
        >

        {faqs.map((faq, index) => {
  const isOpen = open === index;

  return (
    <motion.div
      key={faq.question}
      variants={fadeUp}
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className={`group relative overflow-hidden rounded-[30px] border backdrop-blur-xl transition-all duration-500 ${
        isOpen
          ? "border-indigo-500/60 bg-slate-900/90 shadow-[0_0_50px_rgba(99,102,241,.18)]"
          : "border-slate-800 bg-slate-900/70"
      }`}
    >
      {/* Moving Glow */}

      <motion.div
        animate={{
          x: [-25, 25, -25],
          y: [-15, 15, -15],
        }}
        transition={{
          repeat: Infinity,
          duration: 10 + index,
          ease: "easeInOut",
        }}
        className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-indigo-500/10 blur-[80px]"
      />

      {/* Shine */}

      <div className="absolute inset-0 overflow-hidden rounded-[30px]">
        <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
      </div>

      {/* Active Accent */}

      <motion.div
        animate={{
          opacity: isOpen ? 1 : 0,
          scaleY: isOpen ? 1 : 0.2,
        }}
        transition={{
          duration: 0.35,
        }}
        className="absolute left-0 top-0 h-full w-1 origin-top rounded-r-full bg-gradient-to-b from-indigo-400 via-violet-500 to-cyan-400"
      />

      {/* Header */}

      <button
        onClick={() => setOpen(isOpen ? -1 : index)}
        className="relative flex w-full items-center justify-between px-7 py-7 text-left"
      >
        <span
          className={`pr-6 text-xl font-bold transition-all duration-300 ${
            isOpen ? "text-indigo-300" : "text-white"
          }`}
        >
          {faq.question}
        </span>

        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.15 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
          className={`rounded-xl p-2 ${
            isOpen
              ? "bg-indigo-500/15 text-indigo-400"
              : "text-slate-400"
          }`}
        >
          <ChevronDown size={22} />
        </motion.div>
      </button>

      {/* Content */}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{
                y: -10,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -10,
                opacity: 0,
              }}
              transition={{
                delay: 0.08,
                duration: 0.3,
              }}
              className="px-7 pb-7 leading-8 text-slate-400"
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
})}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FAQ;