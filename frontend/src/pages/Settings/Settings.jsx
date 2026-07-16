import { motion } from "framer-motion";
import {
  Settings2,
  ShieldCheck,
  Palette,
  AlertTriangle,
} from "lucide-react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import PageTransition from "../../components/common/PageTransition";

import SecurityCard from "../../components/settings/SecurityCard";
import AppearanceCard from "../../components/settings/AppearanceCard";
import DangerZone from "../../components/settings/DangerZone";
import { useAuth } from "../../contexts/AuthContext";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

function Settings() {
  const { user } = useAuth();

  const isGoogleUser = user?.provider === "google";
  return (
    <DashboardLayout>
      <PageTransition>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full"
        >
          {/* Hero */}

          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl sm:p-10"
          >
            {/* Background Glow */}

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-400">
                <Settings2 size={16} />
                Settings Center
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
                Account Settings
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
                Manage your account security, personalize your StudentOS
                experience and control important account preferences from one
                place.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
                  <ShieldCheck
                    size={18}
                    className="text-emerald-400"
                  />

                  <span className="text-sm font-medium text-white">
                    Secure Account
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-2xl border border-violet-500/20 bg-violet-500/10 px-4 py-3">
                  <Palette
                    size={18}
                    className="text-violet-400"
                  />

                  <span className="text-sm font-medium text-white">
                    Personalized
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3">
                  <AlertTriangle
                    size={18}
                    className="text-red-400"
                  />

                  <span className="text-sm font-medium text-white">
                    Protected Actions
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards */}

          <motion.div
            variants={container}
            className="mt-10 space-y-8"
          >
            {!isGoogleUser && (
              <motion.div variants={fadeUp}>
                <SecurityCard />
              </motion.div>
            )}

            <motion.div variants={fadeUp}>
              <AppearanceCard />
            </motion.div>

            <motion.div variants={fadeUp}>
              <DangerZone />
            </motion.div>
          </motion.div>
        </motion.div>
      </PageTransition>
    </DashboardLayout>
  );
}

export default Settings;