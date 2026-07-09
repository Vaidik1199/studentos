import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/layout/DashboardLayout";
import PageTransition from "../../components/common/PageTransition";

import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileStats from "../../components/Profile/ProfileStats";
import AccountInfo from "../../components/Profile/AccountInfo";
import QuickActions from "../../components/Profile/QuickActions";
import EditProfileModal from "../../components/Profile/EditProfileModal";

import { getCurrentUser } from "../../services/authService";
import { updateProfile } from "../../services/userService";
import { useAuth } from "../../contexts/AuthContext";

function Profile() {
  const [user, setUser] = useState(null);

  const [editOpen, setEditOpen] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [saving, setSaving] = useState(false);

  const { updateUser } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getCurrentUser();

        setUser(response.data);

        setFullName(response.data.fullName);
        setEmail(response.data.email);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load profile.");
      }
    };

    fetchUser();
  }, []);

  const handleSave = async () => {
    try {
      setSaving(true);

      const response = await updateProfile({
        fullName,
        email,
      });

      setUser(response.data);

      setFullName(response.data.fullName);
      setEmail(response.data.email);
      updateUser(response.data);

      localStorage.setItem("user", JSON.stringify(response.data));

      toast.success(response.message);

      setEditOpen(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="mx-auto max-w-6xl px-4 py-8">
          <ProfileHeader
            user={user}
            onEdit={() => setEditOpen(true)}
            onProfilePictureUpdate={(updatedUser) => {
              setUser(updatedUser);
            }}
          />

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

        <EditProfileModal
          open={editOpen}
          onClose={() => setEditOpen(false)}
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          onSave={handleSave}
          loading={saving}
        />
      </PageTransition>
    </DashboardLayout>
  );
}

export default Profile;
