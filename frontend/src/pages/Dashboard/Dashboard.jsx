import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import RecentActivity from "../../components/dashboard/RecentActivity";
import QuickActions from "../../components/dashboard/QuickActions";
import UpcomingDeadlines from "../../components/dashboard/UpcomingDeadlines";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Page Heading */}
        <div>
          <h1 className="text-4xl font-bold text-white">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-400">
            Here's an overview of your academic progress.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Attendance"
            value="92%"
            subtitle="Excellent"
            color="text-emerald-400"
          />

          <StatCard
            title="Assignments"
            value="3"
            subtitle="Pending"
            color="text-amber-400"
          />

          <StatCard
            title="Notes"
            value="42"
            subtitle="Available"
            color="text-indigo-400"
          />

          <StatCard
            title="Study Time"
            value="5.4h"
            subtitle="Today"
            color="text-pink-400"
          />

        </div>

        {/* Recent Activity */}
        <div className="grid gap-6 lg:grid-cols-2">
            <RecentActivity />
            <QuickActions />
        </div>

        <UpcomingDeadlines />

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;