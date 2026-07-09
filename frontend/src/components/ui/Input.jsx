function Input({
  label,
  type = "text",
  placeholder,
  name,
  register,
  error,
  value,
  onChange,
  icon,
  disabled = false,
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-slate-300"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
            {icon}
          </div>
        )}

        <input
          id={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          {...(register ? register(name) : {})}
          className={`
            w-full
            rounded-xl
            border
            bg-slate-950
            py-3
            text-white
            outline-none
            transition-all
            duration-300

            ${icon ? "pl-12 pr-4" : "px-4"}

            ${
              error
                ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                : "border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            }

            ${
              disabled
                ? "cursor-not-allowed opacity-60"
                : ""
            }
          `}
        />

      </div>

      {error && (
        <p className="text-sm text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default Input;