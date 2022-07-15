import Header from "./components/Header";
import Social from "./components/Social";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="mainbody">
      <Header />
      <Hero />
      <About />
      <Schedule />
      <Gallery />
      <Contact />
      <Social />
    </div>
  );
}

export default App;
