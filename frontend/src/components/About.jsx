import React,{ useRef, useEffect, useContext } from 'react';
import img from "../assets/WhatsApp Image 2024-04-27 at 2.42.34 PM.jpeg";
import {PageContext} from "../contexts/PageContext";
function About() {


  const aboutRef = useRef();
  const {setCurrSection} = useContext(PageContext);
 console.log(useContext(PageContext));

  useEffect(()=>{
   const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          setCurrSection("about");
        }
      })
   },{threshold:0.3});

   observer.observe(aboutRef.current);

   return ()=>observer.unobserve(aboutRef.current);

  },[])



  return (
    <div id="about" className="flex flex-col md:h-[70vh] mt-32 shadow-lg justify-around items-center w-[95vw] md:flex-row dark:text-slate-200 dark:bg-slate-900  dark:shadow-slate-900 " ref = {aboutRef}>
      <img src={img} alt="prakash" className="rounded-full w-80 h-80 flex-shrink-0" />
      <div className="md:text-2xl text-lg font-medium text-center flex flex-col gap-8 py-4">
        <p>Hey there! I'm Prakash,</p>
        <p>a passionate Full Stack Developer based in India</p>
        <p>With a love for coding</p>
        <p>and a knack for problem-solving,</p>
        <p>I thrive on turning ideas into reality through elegant and efficient code.</p>
      </div>
    </div>
  );
}

export default About;
