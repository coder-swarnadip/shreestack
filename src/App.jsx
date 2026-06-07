import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import TechBar from "./components/TechBar";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Solutions from "./components/Solutions";
import Projects from "./components/Projects";
import WhyChoose from "./components/WhyChoose";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      {/* <TechBar /> */}
      <Stats />
      <Services />
      <Industries />
      <Solutions />
      <Projects />
      <WhyChoose />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
