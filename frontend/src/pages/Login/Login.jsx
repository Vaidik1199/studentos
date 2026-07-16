import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "../../contexts/AuthContext";

import AuthLayout from "../../components/auth/AuthLayout";
import GoogleAuthButton from "../../components/auth/GoogleAuthButton";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import toast from "react-hot-toast";

import loginSchema from "../../validations/loginSchema";
import {
  loginUser,
  googleLogin,
} from "../../services/authService";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);

      login(
        response.token,
        response.data
      );

      toast.success(response.message);

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Something went wrong."
      );
    }
  };

  const handleGoogleSuccess = async (
    credentialResponse
  ) => {
    try {
      const response = await googleLogin(
        credentialResponse.credential
      );

      login(
        response.token,
        response.data
      );

      toast.success(response.message);

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Google Sign In Failed."
      );
    }
  };

  const handleGoogleError = () => {
    toast.error("Google Sign In Failed");
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue your journey."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <GoogleAuthButton
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          register={register}
          error={errors.email}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          register={register}
          error={errors.password}
        />

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() =>
              navigate("/forgot-password")
            }
            className="text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
          >
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Logging in..."
            : "Login"}
        </Button>

        <p className="text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-indigo-400 hover:text-indigo-300"
          >
            Register
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Login;