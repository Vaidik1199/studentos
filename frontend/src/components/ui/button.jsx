function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
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
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;