import DashboardLayout from "../../components/layout/DashboardLayout";
import PageTransition from "../../components/common/PageTransition";

import SecurityCard from "../../components/settings/SecurityCard";
import AppearanceCard from "../../components/settings/AppearanceCard";
import DangerZone from "../../components/settings/DangerZone";

function Settings() {
  return (
    <DashboardLayout>
      <PageTransition>
        <div className="mx-auto max-w-5xl px-4 py-8">

          {/* Header */}

          <div className="mb-10">

            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-400">
              ⚙️ Settings
            </div>

            <h1 className="mt-5 text-4xl font-extrabold text-white">
              Account Settings
            </h1>

            <p className="mt-3 max-w-2xl text-lg leading-7 text-slate-400">
              Manage your StudentOS account, security preferences,
              appearance and account settings.
            </p>

          </div>

          <div className="space-y-8">

            <SecurityCard />

            <AppearanceCard />

            <DangerZone />

          </div>

        </div>
      </PageTransition>
    </DashboardLayout>
  );
}

export default Settings;