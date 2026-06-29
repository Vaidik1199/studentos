function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5">
      <h1 className="text-2xl font-bold text-indigo-500">
        StudentOS
      </h1>

      <div className="flex gap-8">
        <a href="#">Features</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <button className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition">
        Login
      </button>
    </nav>
  );
}

export default Navbar;