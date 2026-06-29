import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;