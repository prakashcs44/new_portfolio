import React, { useContext, useState } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Home from "./components/Home";
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
      <Home/>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
