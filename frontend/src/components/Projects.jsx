import React  from "react";
import p1img from "../assets/homepage-GoogleChrome2024-04-2710-31-15-ezgif.com-video-to-gif-converter.gif";
import p2img from "../assets/Graphvisualizer-GoogleChrome2024-04-2710-32-48-ezgif.com-video-to-gif-converter.gif";
import p3img from "../assets/echopost.png";
import p4img from "../assets/Moviesearch-GoogleChrome2024-04-2711-51-51-ezgif.com-video-to-gif-converter.gif";
import {useIntersectionObserver} from "../hooks/useIntersectionObserver"

const projects = [
  {
    name: "Ecommerce website",
    imgLink: p1img,
    desc: "Full stack ecommerce website built using MERN stack",
    sourceLink: "https://github.com/prakashcs44/ecommerce_website",
    demoLink: "https://ecommerce-website-prakashcs44.vercel.app",
  },
  {
    name: "Echo Post",
    imgLink: p3img,
    desc: "Echo Post a full stack social media app",
    sourceLink: "https://github.com/prakashcs44/Echo-post/",
    demoLink: "https://echo-post.vercel.app",
  },
  {
    name: "Graph visualiser",
    imgLink: p2img,
    desc: "Graph visualiser where you can visualisze dfs and bfs algorithms",
    sourceLink: "https://github.com/prakashcs44/graph_visualizer",
    demoLink: "https://prakashcs44.github.io/graph-visualizer/",
  },
 
  {
    name: "Movie search",
    imgLink: p4img,
    desc: "Movie searching website that used omdp api to fetch movies ",
    sourceLink: "https://github.com/prakashcs44/movie-search-app",
    demoLink: "https://prakashcs44.github.io/movie-search-app/",
  },
];

function Projects() {
  
 const projectsRef = useIntersectionObserver("projects");


  

  return (
    <div id = "projects" className=" mt-36 text-center w-[95vw] dark:text-white dark:bg-slate-900   flex flex-col items-center scroll-m-20" ref={projectsRef}>
      <h1 className="text-3xl font-bold border-b-2 py-8 w-[90%]">MY PROJECTS</h1>
      <div className="flex flex-wrap items-center justify-center gap-12 py-10">
        {projects.map((project) => {
          return (
            <div className=" shadow-lg rounded-lg flex flex-col items-center gap-3 py-4 dark:shadow-slate-800 " key={project.name}>
              <h2 className="text-xl pb-4 font-medium">{project.name}</h2>
              <img
                className="px-8 "
                src={project.imgLink}
                alt={project.name}
              ></img>

              <div className="text-lg font-sm px-3">
                <h3>{project.desc}</h3>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <a href={project.sourceLink} className=" bg-blue-600 rounded-md shadow-md py-2 hover:bg-blue-700 w-20">
                  SOURCE
                </a>
                <a href={project.demoLink} className=" bg-blue-600 rounded-md shadow-md py-2  hover:bg-blue-700 w-20">
                  DEMO
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
