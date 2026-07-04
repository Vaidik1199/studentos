import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthLayout from "../../components/auth/AuthLayout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import toast from "react-hot-toast";

import registerSchema from "../../validations/registerSchema";
import { registerUser } from "../../services/authService";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      const { confirmPassword, ...userData } = data;

      const response = await registerUser(userData);

      toast.success(response.message);

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong."
      );
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join StudentOS and start organizing your student life."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <Input
          label="Full Name"
          name="fullName"
          placeholder="Enter your full name"
          register={register}
          error={errors.fullName}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          register={register}
          error={errors.email}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Create a password"
          register={register}
          error={errors.password}
        />

        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          register={register}
          error={errors.confirmPassword}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>

        <p className="text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-400 hover:text-indigo-300"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Register;