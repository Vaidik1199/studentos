import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import PageTransition from "../../components/common/PageTransition";
import SkeletonCard from "../../components/common/SkeletonCard";

import StatCard from "../../components/dashboard/StatCard";
import AttendanceProgress from "../../components/dashboard/AttendanceProgress";
import AttendanceAlert from "../../components/dashboard/AttendanceAlert";
import RecentNotes from "../../components/dashboard/RecentNotes";
import UpcomingAssignments from "../../components/dashboard/UpcomingAssignments";

import { getDashboardStats } from "../../services/dashboardService";

import {
  PercentSquareIcon,
  BookOpen,
  CheckCircle,
  ClipboardList,
} from "lucide-react";

function Dashboard() {
  const [dashboard, setDashboard] = useState({
    averageAttendance: 0,
    totalSubjects: 0,
    attendedClasses: 0,
    pendingAssignments: 0,
    recentNotes: [],
    upcomingAssignments: [],
    attendanceAlert: null,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await getDashboardStats();
      setDashboard(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">Dashboard</h1>

            <p className="mt-2 text-slate-400">
              Here's your academic overview for today.
            </p>
          </div>

          {loading ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : (
            <>
              {/* Stats */}

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <StatCard
                  title="Attendance"
                  value={`${dashboard.averageAttendance}%`}
                  subtitle="Overall"
                  color="text-emerald-400"
                  icon={<PercentSquareIcon />}
                />

                <StatCard
                  title="Subjects"
                  value={dashboard.totalSubjects}
                  subtitle="Tracked"
                  color="text-indigo-400"
                  icon={<BookOpen />}
                />

                <StatCard
                  title="Present"
                  value={dashboard.attendedClasses}
                  subtitle="Classes"
                  color="text-yellow-400"
                  icon={<CheckCircle />}
                />

                <StatCard
                  title="Assignments"
                  value={dashboard.pendingAssignments ?? 0}
                  subtitle="Pending"
                  color="text-pink-400"
                  icon={<ClipboardList />}
                />
              </div>

              {/* Attendance */}

              <div className="grid gap-6 xl:grid-cols-3">
                <div className="xl:col-span-2">
                  <AttendanceProgress
                    percentage={dashboard.averageAttendance}
                  />
                </div>

                <AttendanceAlert attendance={dashboard.attendance || []} />
              </div>

              {/* Notes & Assignments */}

              <div className="grid gap-6 lg:grid-cols-2">
                <RecentNotes notes={dashboard.recentNotes || []} />

                <UpcomingAssignments
                  assignments={dashboard.upcomingAssignments || []}
                />

              </div>
            </>
          )}
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}

export default Dashboard;
