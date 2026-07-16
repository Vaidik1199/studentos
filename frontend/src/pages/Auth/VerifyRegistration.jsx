import { useEffect, useRef, useState } from "react";
import {
    useLocation,
    useNavigate,
    Link,
} from "react-router-dom";
import toast from "react-hot-toast";
import {
    ShieldCheck,
    RotateCcw,
    ArrowLeft,
    MailCheck,
} from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import Button from "../../components/ui/Button";

import {
    verifyRegistrationOtp,
    resendRegistrationOtp,
} from "../../services/authService";

import { useAuth } from "../../contexts/AuthContext";

function VerifyRegistration() {
    const navigate = useNavigate();
    const location = useLocation();

    const { login } = useAuth();

    const email = location.state?.email || "";
    const registerData = location.state?.registerData || null;

    const [otp, setOtp] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    const inputRefs = useRef([]);

    const [loading, setLoading] = useState(false);

    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        if (!email) {
            navigate("/register");
        }
    }, [email, navigate]);

    useEffect(() => {
        if (seconds <= 0) return;

        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);

    // ===============================
    // OTP INPUT
    // ===============================

    const handleChange = (
        index,
        value,
    ) => {
        value = value.replace(/\D/g, "");

        if (!value) {
            const copy = [...otp];
            copy[index] = "";
            setOtp(copy);
            return;
        }

        const copy = [...otp];

        copy[index] = value.slice(-1);

        setOtp(copy);

        if (
            index < 5 &&
            value
        ) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        index,
        e,
    ) => {
        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0
        ) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    // ===============================
    // PASTE SUPPORT
    // ===============================

    const handlePaste = (e) => {
        e.preventDefault();

        const pasted = e.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, 6);

        if (!pasted) return;

        const copy = [...otp];

        pasted.split("").forEach((digit, i) => {
            copy[i] = digit;
        });

        setOtp(copy);

        inputRefs.current[
            Math.min(
                pasted.length,
                5,
            )
        ]?.focus();
    };

    // ===============================
    // VERIFY OTP
    // ===============================

    const handleVerify = async (
        e,
    ) => {
        e.preventDefault();

        const otpCode = otp.join("");

        if (otpCode.length !== 6) {
            return toast.error(
                "Please enter all 6 digits."
            );
        }

        try {
            setLoading(true);

            const response =
                await verifyRegistrationOtp({
                    email,
                    otp: otpCode,
                });

            login(
                response.token,
                response.data
            );

            toast.success(
                response.message,
            );

            navigate("/dashboard");
        } catch (error) {
            toast.error(
                error.response?.data
                    ?.message ||
                "Verification failed."
            );
        } finally {
            setLoading(false);
        }
    };

    // ===============================
    // RESEND OTP
    // ===============================

    const handleResend = async () => {
        try {
            await resendRegistrationOtp(email);

            toast.success("New OTP sent successfully.");

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
            title="Verify Your Email"
            subtitle="We've sent a 6-digit verification code to your email address."
        >
            <form
                onSubmit={handleVerify}
                className="space-y-8"
            >
                {/* Email Card */}

                <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent p-5">
                    <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/15">
                            <MailCheck
                                size={26}
                                className="text-indigo-400"
                            />
                        </div>

                        <div className="min-w-0">
                            <h3 className="font-semibold text-white">
                                Verification Email Sent
                            </h3>

                            <p className="mt-2 break-all text-sm leading-6 text-slate-400">
                                {email}
                            </p>
                        </div>
                    </div>
                </div>

                {/* OTP */}

                <div>
                    <label className="mb-5 block text-center text-sm font-medium text-slate-400">
                        Enter Verification Code
                    </label>

                    <div className="flex justify-center gap-2 sm:gap-3">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) =>
                                    (inputRefs.current[index] = el)
                                }
                                value={digit}
                                maxLength={1}
                                inputMode="numeric"
                                onPaste={handlePaste}
                                onKeyDown={(e) =>
                                    handleKeyDown(index, e)
                                }
                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        e.target.value
                                    )
                                }
                                className="
                  h-14
                  w-12
                  rounded-2xl
                  border
                  border-slate-700
                  bg-slate-900
                  text-center
                  text-xl
                  font-bold
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  focus:scale-105
                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-500/20

                  sm:h-16
                  sm:w-14
                  sm:text-2xl
                "
                            />
                        ))}
                    </div>
                </div>

                {/* Verify */}

                <Button
                    type="submit"
                    disabled={loading}
                >
                    <div className="flex items-center justify-center gap-2">
                        <ShieldCheck size={18} />

                        {loading
                            ? "Verifying..."
                            : "Verify Email"}
                    </div>
                </Button>

                {/* Timer */}

                <div className="text-center">
                    {seconds > 0 ? (
                        <p className="text-sm text-slate-400">
                            Resend code in{" "}
                            <span className="font-semibold text-indigo-400">
                                {seconds}s
                            </span>
                        </p>
                    ) : (
                        <button
                            type="button"
                            onClick={handleResend}
                            className="inline-flex items-center gap-2 font-medium text-indigo-400 transition hover:text-indigo-300"
                        >
                            <RotateCcw size={16} />

                            Resend Verification Code
                        </button>
                    )}
                </div>
                {/* Bottom */}

                <div className="space-y-5 border-t border-slate-800 pt-6">

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">

                        <p className="text-center text-sm leading-6 text-slate-400">
                            Didn't receive the email?
                            <br />
                            Check your <span className="font-semibold text-white">Spam</span> or{" "}
                            <span className="font-semibold text-white">Promotions</span> folder.
                        </p>

                    </div>

                    <Link
                        to="/register"
                        className="
              flex
              items-center
              justify-center
              gap-2
              text-sm
              font-medium
              text-slate-400
              transition-all
              duration-300
              hover:text-indigo-400
            "
                    >
                        <ArrowLeft size={16} />

                        Back to Registration

                    </Link>

                </div>

            </form>

        </AuthLayout>
    );
}

export default VerifyRegistration;