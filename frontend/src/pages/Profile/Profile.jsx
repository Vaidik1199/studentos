import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/layout/DashboardLayout";
import PageTransition from "../../components/common/PageTransition";

import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileStats from "../../components/profile/ProfileStats";
import AccountInfo from "../../components/profile/AccountInfo";
import QuickActions from "../../components/profile/QuickActions";

import { getCurrentUser } from "../../services/authService";
function Profile() {

  const [user, setUser] = useState(null);

useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await getCurrentUser();
      setUser(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load profile.");
    }
  };

  fetchUser();
}, []);


  return (
    <DashboardLayout>
      <PageTransition>

        <div className="mx-auto max-w-6xl px-4 py-8">

          <ProfileHeader user={user} />

          <div className="mt-8 grid gap-8 lg:grid-cols-3">

            <div className="space-y-8 lg:col-span-2">

              <AccountInfo user={user} />

            </div>

            <div className="space-y-8">

              <ProfileStats />

              <QuickActions />

            </div>

          </div>

        </div>

      </PageTransition>
    </DashboardLayout>
  );
}

export default Profile;