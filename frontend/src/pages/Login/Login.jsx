import { Link } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

function Login() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue your journey."
    >
      <form className="space-y-5">
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
            className="text-sm text-indigo-400 hover:text-indigo-300"
          >
            Forgot Password?
          </button>
        </div>

        <Button type="submit">
          Login
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