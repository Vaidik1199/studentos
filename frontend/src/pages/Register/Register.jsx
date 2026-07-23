import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import AuthLayout from "../../components/auth/AuthLayout";
import GoogleAuthButton from "../../components/auth/GoogleAuthButton";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import toast from "react-hot-toast";

import { googleLogin } from "../../services/authService";

function Register() {
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
          "Google Sign Up Failed."
      );
    }
  };

  const handleGoogleError = () => {
    toast.error("Google Sign Up Failed");
  };

  const handleEmailRegistration = () => {
    toast(
      "🚧 Email registration is temporarily unavailable. Please continue with Google Sign Up."
    );
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join StudentOS and start organizing your student life."
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
                We're currently upgrading our email authentication system
                to provide a faster and more secure experience.
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Please continue using{" "}
                <span className="font-medium text-white">
                  Google Sign Up
                </span>
                .
                <br />
                Email registration will return soon.
              </p>
            </div>
          </div>
        </div>

        {/* Disabled Form */}
        <div className="pointer-events-none opacity-50 space-y-5">
          <Input
            label="Full Name"
            name="fullName"
            placeholder="Enter your full name"
          />

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
            placeholder="Create a password"
          />

          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
          />
        </div>

        <Button
          type="button"
          onClick={handleEmailRegistration}
        >
          Email Registration (Coming Soon)
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
      </div>
    </AuthLayout>
  );
}

export default Register;