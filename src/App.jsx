import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import NavListMenu from "./components/NavListMenu/NavListMenu";
import Profinder from "./components/Projects/Profinder/Profinder";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className="font-inter bg-gradient-to-bl from-neutral-900 to-slate-900">
        <NavListMenu />
        <div className="max-w-5xl mx-auto w-11/12">
          <Hero />
          <div className="md:h-auto">
            <Services />
          </div>
        </div>
        <Profinder />
        <div className="max-w-5xl mx-auto w-11/12">
          <About />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
