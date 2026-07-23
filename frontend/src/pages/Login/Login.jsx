import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import AuthLayout from "../../components/auth/AuthLayout";
import GoogleAuthButton from "../../components/auth/GoogleAuthButton";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import toast from "react-hot-toast";

import { googleLogin } from "../../services/authService";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await googleLogin(
        credentialResponse.credential
      );

      login(response.token, response.data);

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

  const handleEmailLogin = () => {
    toast(
      "🚧 Email login is temporarily unavailable. Please continue with Google Sign In."
    );
  };

  const handleForgotPassword = () => {
    toast(
      "🚧 Password reset is temporarily unavailable. Please sign in using Google."
    );
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue your journey."
    >
      <div className="space-y-5">
        <GoogleAuthButton
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
        />

        {/* Upgrade Notice */}
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4">
          <div className="flex gap-3">
            <div className="text-xl">🚧</div>

            <div>
              <h3 className="font-semibold text-amber-300">
                Email Authentication Upgrade
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                We're currently upgrading our email authentication
                system to provide a faster and more secure experience.
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Please continue using{" "}
                <span className="font-medium text-white">
                  Google Sign In
                </span>
                .
                <br />
                Email login will return soon.
              </p>
            </div>
          </div>
        </div>

        {/* Disabled Form */}
        <div className="pointer-events-none opacity-50 space-y-5">
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm font-medium text-slate-500"
            >
              Forgot Password?
            </button>
          </div>
        </div>

        <Button
          type="button"
          onClick={handleEmailLogin}
        >
          Email Login (Coming Soon)
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
      </div>
    </AuthLayout>
  );
}

export default Login;