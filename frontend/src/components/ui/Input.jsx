function Input({
  label,
  type = "text",
  placeholder,
  name,
  register,
  error,
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-300"
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full rounded-xl border bg-slate-950 px-4 py-3 text-white outline-none transition-all duration-300 ${
          error
            ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
            : "border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
        }`}
      />

      {error && (
        <p className="text-sm text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default Input;