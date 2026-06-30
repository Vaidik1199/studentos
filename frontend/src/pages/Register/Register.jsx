import { Link } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

function Register() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join StudentOS and start organizing your student life."
    >
      <form className="space-y-5">
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

        <Button type="submit">
          Create Account
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