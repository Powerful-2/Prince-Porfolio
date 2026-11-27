import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CapabilitiesProcess from "./components/CapabilitiesProcess";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <CapabilitiesProcess />
      </main>
      <Contact />
    </>
  );
}

export default App;
