import DashboardLayout from "../../components/layout/DashboardLayout";

function Attendance() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Attendance
          </h1>

          <p className="mt-2 text-slate-400">
            Manage your subject attendance.
          </p>
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Attendance;