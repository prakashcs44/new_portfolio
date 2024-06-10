import React,{ useRef, useEffect, useContext } from 'react';
import {PageContext} from "../contexts/PageContext";
function About() {


  const aboutRef = useRef();
  const {setCurrSection} = useContext(PageContext);
 

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
    <div id="about" className='dark:text-slate-200 dark:bg-slate-900  dark:shadow-slate-900 mt-32 flex flex-col items-center w-[95vw] shadow-lg' ref = {aboutRef}>
     
     <h1 className="text-center text-3xl border-b-2 font-bold py-8 w-[90%] ">
       About me
      </h1>
      
    <div  className="flex flex-col md:h-[70vh]   justify-around items-center  md:flex-row " >
      
      <div className="md:text-2xl text-lg font-medium text-center flex flex-col gap-8 py-4">
        <p>Hey there! I'm Prakash,</p>
        <p>a passionate Full Stack Developer based in India</p>
        <p>With a love for coding</p>
        <p>and a knack for problem-solving,</p>
        <p>I thrive on turning ideas into reality through elegant and efficient code.</p>
      </div>
    </div>
    </div>
  );
}

export default About;
