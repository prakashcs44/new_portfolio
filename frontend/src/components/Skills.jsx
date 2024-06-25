import React, { useState} from "react";

import {useIntersectionObserver} from "../hooks/useIntersectionObserver"

function Skills() {
  const [section, setSection] = useState("techstack");
   const skillsRef = useIntersectionObserver("skills");
  const skillSectionHandler = (s) => {
    setSection(s);
  };


  


 


  return (
    <div id="skills" className=" shadow-md w-[95vw]  mt-20 dark:bg-slate-900 dark:text-white pb-12 flex flex-col items-center scroll-m-20" ref={skillsRef}>
      <h1 className="text-center text-3xl border-b-2 font-bold py-8 w-[90%]">
        Skills
      </h1>
      <div className="flex items-center justify-center gap-5 pt-5">
        <button
          className={`${
            section === "techstack" ? "bg-red-500" : "bg-blue-600"
          } rounded-md shadow-md py-2 hover:bg-blue-700 w-24`}
          onClick={() => skillSectionHandler("techstack")}
        >
          Tech Stack
        </button>
        <button
          className={`${
            section === "languages" ? "bg-red-500" : "bg-blue-600"
          } rounded-md shadow-md py-2 hover:bg-blue-700 w-24`}
          onClick={() => skillSectionHandler("languages")}
        >
          Languages
        </button>
        <button
          className={`${
            section === "tools" ? "bg-red-500" : "bg-blue-600"
          } rounded-md shadow-md py-2 hover:bg-blue-700 w-24`}
          onClick={() => skillSectionHandler("tools")}
        >
         Tools
        </button>
      </div>
      <Languages active={section === "languages"} />
      <TechStack active={section === "techstack"} />
      <Tools active={section === "tools"} />
    </div>
  );
}

export default Skills;

function TechStack({ active }) {
  if (!active) return null;

  return (
    <div className="flex flex-wrap gap-12 items-center justify-center pt-20 ">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
        alt="react"
        width="100"
        height="100"
        style={{ maxWidth: "100%" }}
      />
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
        alt="nodejs"
        width="100"
        height="100"
        style={{ maxWidth: "100%" }}
      />
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
        alt="express"
        width="100"
        height="100"
        className="dark:bg-white"
        style={{ maxWidth: "100%" }}
      />
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
        alt="mongodb"
        width="100"
        height="100"
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
}

function Languages({ active }) {
  if (!active) return null;

  return (
    <div className="flex flex-wrap gap-12 items-center justify-center pt-20">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
        alt="c"
        width="100"
        height="100"
        style={{ maxWidth: "100%" }}
      />
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
        alt="c"
        width="100"
        height="100"
        style={{ maxWidth: "100%" }}
      />
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        alt="javascript"
        width="100"
        height="100"
        style={{ maxWidth: "100%" }}
      />
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
        alt="html5"
        width="100"
        height="100"
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
}

function Tools({ active }) {


  if(!active) return null;

  return (
    <div className="flex flex-wrap gap-12 items-center justify-center pt-20">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
        alt="linux"
        width="100"
        height="100"
        style={{ maxWidth: "100%" }}
      />
      <img
        src="https://camo.githubusercontent.com/fcafa5ebc1f5f789ae7d012a3ecd8fe7bda49516591caf7c37698f764165d880/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667"
        alt="git"
        width="100"
        height="100"
        data-canonical-src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
}
