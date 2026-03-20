import React, { useContext,useEffect } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Home from "./components/Home";
import SideNav from "./components/SideNav";
import { PageContext } from "./contexts/PageContext";
import FloatingChat from "./components/FloatingChat";

function App() {
  const {darkMode} = useContext(PageContext);
  useEffect(() => {
  fetch("https://new-portfolio-backend-3-q6ib.onrender.com/warmup")
    .catch(() => {});
}, []);
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
     {/* floating chatbot */}
    <FloatingChat />
    </div>
  );
}

export default App;
