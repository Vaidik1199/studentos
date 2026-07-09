import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ShieldCheck, RotateCcw, ArrowLeft } from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import Button from "../../components/ui/Button";

import {
  verifyOtp,
  forgotPassword,
} from "../../services/authService";

function VerifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (!email) {
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      toast.error("Enter the 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);

      const response = await verifyOtp({
        email,
        otp,
      });

      toast.success(response.message);

      navigate("/reset-password", {
        state: {
          email,
          otp,
        },
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to verify OTP."
      );
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    try {
      await forgotPassword({ email });

      toast.success("OTP sent again.");

      setSeconds(60);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to resend OTP."
      );
    }
  };

  return (
    <AuthLayout
      title="Verify OTP"
      subtitle="Enter the verification code sent to your email."
    >
      <form
        onSubmit={handleVerify}
        className="space-y-6"
      >
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Verification Code
          </label>

          <input
            autoFocus
            maxLength={6}
            inputMode="numeric"
            pattern="[0-9]*"
            value={otp}
            onChange={(e) =>
              setOtp(
                e.target.value.replace(/\D/g, "")
              )
            }
            placeholder="123456"
            className="
              w-full
              rounded-2xl
              border
              border-slate-700
              bg-slate-950
              py-5
              text-center
              text-3xl
              font-bold
              tracking-[0.6em]
              text-white
              outline-none
              transition
              focus:border-indigo-500
            "
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2"
        >
          <ShieldCheck size={18} />

          {loading
            ? "Verifying..."
            : "Verify OTP"}
        </Button>

        <div className="text-center">
          {seconds > 0 ? (
            <p className="text-sm text-slate-400">
              Resend OTP in{" "}
              <span className="font-semibold text-indigo-400">
                {seconds}s
              </span>
            </p>
          ) : (
            <button
              type="button"
              onClick={resendOtp}
              className="inline-flex items-center gap-2 text-indigo-400 transition hover:text-indigo-300"
            >
              <RotateCcw size={16} />
              Resend OTP
            </button>
          )}
        </div>

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

export default VerifyOtp;