import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import DashboardLayout from "../../components/layout/DashboardLayout";
import PageTransition from "../../components/common/PageTransition";

import ProfileHeader from "../../components/Profile/ProfileHeader";
import AccountInfo from "../../components/Profile/AccountInfo";
import QuickActions from "../../components/Profile/QuickActions";
import EditProfileModal from "../../components/Profile/EditProfileModal";

import { getCurrentUser } from "../../services/authService";
import { updateProfile } from "../../services/userService";
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
    y: 22,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

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
      });

      setUser(response.data);

      setFullName(response.data.fullName);
      setEmail(response.data.email);

      updateUser(response.data);

      toast.success(response.message);

      setEditOpen(false);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to update profile."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <DashboardLayout>
      <PageTransition>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full"
        >
          <motion.div variants={fadeUp}>
            <ProfileHeader
              user={user}
              onEdit={() => setEditOpen(true)}
              onProfilePictureUpdate={(updatedUser) => {
                setUser(updatedUser);
                updateUser(updatedUser);
              }}
            />
          </motion.div>

          <motion.div
            variants={container}
            className="mt-8 grid gap-8 xl:grid-cols-[2fr_1fr]"
          >
            <motion.div
              variants={fadeUp}
              className="space-y-8"
            >
              <AccountInfo user={user} />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-8"
            >
              <QuickActions />
            </motion.div>
          </motion.div>
        </motion.div>

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