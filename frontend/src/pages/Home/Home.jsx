import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import WhyStudentOS from "../../components/home/WhyStudentOS";
import HowItWorks from "../../components/home/HowItWorks";
import FAQ from "../../components/home/FAQ";
import Contact from "../../components/home/Contact";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <WhyStudentOS/>
      <HowItWorks/>
      <Features />
      <FAQ/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default Home;