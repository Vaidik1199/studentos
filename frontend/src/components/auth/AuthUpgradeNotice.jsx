function AuthUpgradeNotice() {
  return (
    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-xl">🚧</div>

        <div>
          <h3 className="font-semibold text-amber-300">
            Email Authentication Upgrade
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-300">
            We're currently upgrading our email authentication system
            to provide a faster and more secure experience.
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Please continue using{" "}
            <span className="font-medium text-white">
              Google Sign In
            </span>
            . Email login and registration will return soon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthUpgradeNotice;