import { useContext, useEffect, useRef } from "react"
import { PageContext } from "../contexts/PageContext"

export const useIntersectionObserver = (sectionId)=>{
   const {setCurrSection} = useContext(PageContext);
   const sectionRef = useRef();

   useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            setCurrSection(sectionId);
            
            
          }
        })
     },{threshold:0.3});
  
     observer.observe(sectionRef.current);
  
     return ()=>observer.unobserve(sectionRef.current);
   },[])

   return sectionRef;
}



