function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  disabled = false,
}) {
  const baseClasses =
    "w-full rounded-xl px-4 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20",

    secondary:
      "border border-slate-700 bg-slate-900 text-white hover:bg-slate-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${
        disabled
          ? "cursor-not-allowed opacity-60"
          : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;