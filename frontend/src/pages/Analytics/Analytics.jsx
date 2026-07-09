import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import AnalyticsCard from "../../components/analytics/AnalyticsCard";
import AttendanceChart from "../../components/analytics/AttendanceChart";
import AssignmentChart from "../../components/analytics/AssignmentChart";
import SubjectAttendance from "../../components/analytics/SubjectAttendance";
import AssignmentInsights from "../../components/analytics/AssignmentInsights";
import PerformanceSummary from "../../components/analytics/PerformanceSummary";

import { getAnalytics } from "../../services/analyticsService";

import toast from "react-hot-toast";
import PageTransition from "../../components/common/PageTransition";
import SkeletonCard from "../../components/common/SkeletonCard";

function Analytics() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await getAnalytics();
      setAnalytics(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load analytics.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <PageTransition>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </PageTransition>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="space-y-8">
          {/* Heading */}

          <div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">Analytics</h1>

            <p className="mt-2 text-slate-400">
              Track your academic performance and progress.
            </p>
          </div>

          {/* KPI Cards */}

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <AnalyticsCard
              title="Attendance"
              value={`${analytics.attendance.averageAttendance}%`}
              subtitle="Average Attendance"
              color="text-emerald-400"
            />

            <AnalyticsCard
              title="Subjects"
              value={analytics.attendance.subjects}
              subtitle="Tracked Subjects"
              color="text-indigo-400"
            />

            <AnalyticsCard
              title="Assignments"
              value={analytics.assignments.total}
              subtitle="Total Assignments"
              color="text-yellow-400"
            />

            <AnalyticsCard
              title="Notes"
              value={analytics.notes.total}
              subtitle="Saved Notes"
              color="text-pink-400"
            />
          </div>

          {/* Charts */}

          <div className="grid gap-6 xl:grid-cols-2">
            <AttendanceChart attendance={analytics.attendance} />

            <AssignmentChart assignments={analytics.assignments} />
          </div>

          {/* Subject Attendance + Insights */}

          {/* Insights */}

          <div className="grid gap-6 lg:grid-cols-2">
            <SubjectAttendance />

            <AssignmentInsights />
          </div>

          {/* Performance Summary */}

          <PerformanceSummary />
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}

export default Analytics;
