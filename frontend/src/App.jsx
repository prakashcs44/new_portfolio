import React, { useContext, useState } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Home from "./components/Home";
import SideNav from "./components/SideNav";
import { PageContext } from "./contexts/PageContext";

function App() {
  const {darkMode} = useContext(PageContext);
  return (
    <div
      className={`${
        darkMode && "dark"
      } flex flex-col items-center justify-center  dark:bg-black `}
    >
      <Header />
      <SideNav/>
      <Home/>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
