import Header from "./components/Header";
import Social from "./components/Social";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="mainbody">
      <Header />
      <About />
      <Gallery />
      <Schedule />
      <Contact />
      <Social />
    </div>
  );
}

export default App;
