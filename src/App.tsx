import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Work from "./components/Work";
import Capabilities from "./components/Capabilities";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from './components/About'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Work />
      <About />
      <Capabilities />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
