import Navbar from "../../components/layout/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="flex items-center justify-center h-[80vh]">
        <h1 className="text-6xl font-bold">
          Welcome to StudentOS 🚀
        </h1>
      </div>
    </div>
  );
}

export default Home;