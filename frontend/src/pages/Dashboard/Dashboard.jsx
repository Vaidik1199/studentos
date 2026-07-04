import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import RecentActivity from "../../components/dashboard/RecentActivity";
import QuickActions from "../../components/dashboard/QuickActions";
import UpcomingDeadlines from "../../components/dashboard/UpcomingDeadlines";

import { getDashboardStats } from "../../services/dashboardService";

function Dashboard() {
  const [stats, setStats] = useState({
    averageAttendance: 0,
    totalSubjects: 0,
    attendedClasses: 0,
    totalClasses: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await getDashboardStats();

      setStats(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-400">
            Here's an overview of your academic progress.
          </p>
        </div>

        {loading ? (
          <p className="text-slate-400">
            Loading dashboard...
          </p>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              <StatCard
                title="Attendance"
                value={`${stats.averageAttendance}%`}
                subtitle="Overall"
                color="text-emerald-400"
              />

              <StatCard
                title="Subjects"
                value={stats.totalSubjects}
                subtitle="Tracked"
                color="text-indigo-400"
              />

              <StatCard
                title="Present"
                value={stats.attendedClasses}
                subtitle="Classes"
                color="text-yellow-400"
              />

              <StatCard
                title="Total"
                value={stats.totalClasses}
                subtitle="Classes"
                color="text-pink-400"
              />

            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <RecentActivity />
              <QuickActions />
            </div>

            <UpcomingDeadlines />
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;