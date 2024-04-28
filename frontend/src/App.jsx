import React, { useContext, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { PageContext } from "./contexts/PageContext";

function App() {
  const {darkMode} = useContext(PageContext);
  return (
    <div
      className={`${
        darkMode && "dark"
      } flex flex-col items-center justify-center relative dark:bg-black `}
    >
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
