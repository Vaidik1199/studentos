import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import { resetPassword } from "../../services/authService";

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";
  const otp = location.state?.otp || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  if (!email || !otp) {
    navigate("/forgot-password");
    return null;
  }

  const passwordStrength = () => {
    if (password.length < 6)
      return {
        text: "Weak",
        color: "bg-red-500",
      };

    if (password.length < 10)
      return {
        text: "Medium",
        color: "bg-yellow-500",
      };

    return {
      text: "Strong",
      color: "bg-emerald-500",
    };
  };

  const strength = passwordStrength();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.error(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await resetPassword({
        email,
        otp,
        password,
      });

      toast.success(response.message);

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to reset password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create New Password"
      subtitle="Choose a strong password for your StudentOS account."
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Password */}

        <div className="relative">
          <Input
            label="New Password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            icon={<Lock size={18} />}
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-[46px] text-slate-400"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>

        {/* Strength */}

        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-slate-400">
              Password Strength
            </span>

            <span className="font-medium text-white">
              {strength.text}
            </span>
          </div>

          <div className="h-2 rounded-full bg-slate-800">
            <div
              className={`${strength.color} h-full rounded-full transition-all`}
              style={{
                width:
                  strength.text === "Weak"
                    ? "33%"
                    : strength.text === "Medium"
                    ? "66%"
                    : "100%",
              }}
            />
          </div>
        </div>

        {/* Confirm */}

        <div className="relative">
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            icon={<CheckCircle size={18} />}
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
            className="absolute right-4 top-[46px] text-slate-400"
          >
            {showConfirmPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>

        <Button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Updating Password..."
            : "Reset Password"}
        </Button>

        <Link
          to="/login"
          className="flex items-center justify-center gap-2 text-sm text-slate-400 transition hover:text-indigo-400"
        >
          <ArrowLeft size={16} />
          Back to Login
        </Link>
      </form>
    </AuthLayout>
  );
}

export default ResetPassword;