import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, ArrowLeft, Send } from "lucide-react";
import toast from "react-hot-toast";

import AuthLayout from "../../components/auth/AuthLayout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import { forgotPassword } from "../../services/authService";
import forgotPasswordSchema from "../../validations/forgotPasswordSchema";

function ForgotPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await forgotPassword(data);

      toast.success(response.message);

      navigate("/verify-otp", {
        state: {
          email: data.email,
        },
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to send OTP."
      );
    }
  };

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email to receive a verification code."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your registered email"
          register={register}
          error={errors.email}
          icon={<Mail size={18} />}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2"
        >
          <Send size={18} />

          {isSubmitting
            ? "Sending OTP..."
            : "Send OTP"}
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

export default ForgotPassword;