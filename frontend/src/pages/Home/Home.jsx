import { motion } from "framer-motion";

import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/Hero";
import WhyStudentOS from "../../components/home/WhyStudentOS";
import HowItWorks from "../../components/home/HowItWorks";
import Features from "../../components/Features";
import FAQ from "../../components/home/FAQ";
import Contact from "../../components/home/Contact";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white selection:bg-indigo-500 selection:text-white">

      {/* Global Animated Background */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-16 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600 blur-[220px]"
        />

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[190px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-0 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[210px]"
        />

        {/* Grid */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:34px_34px]" />

      </div>

      {/* Navbar */}

      <Navbar />

      <main>

        <Hero />

        <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <WhyStudentOS />

        <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <HowItWorks />

        <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <Features />

        <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <FAQ />

        <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        <Contact />

      </main>

      <Footer />

    </div>
  );
}

export default Home;