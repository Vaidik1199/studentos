function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl">

        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold text-white">
            Student<span className="text-indigo-500">OS</span>
          </h1>

          <h2 className="mt-8 text-2xl font-semibold text-white">
            {title}
          </h2>

          <p className="mt-2 text-slate-400">
            {subtitle}
          </p>

        </div>

        {children}

      </div>

    </main>
  );
}

export default AuthLayout;