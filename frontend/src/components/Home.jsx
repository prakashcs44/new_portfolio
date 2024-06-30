import React, {  useContext } from "react";
import img from "../assets/pic1.jpg";
import { PageContext } from "../contexts/PageContext";
import {useIntersectionObserver} from "../hooks/useIntersectionObserver"
function Home() {
  
  const { darkMode } = useContext(PageContext);
  const homeRef  = useIntersectionObserver("home");


 
  return (
    <div
      id="home"
      className="dark:text-slate-200 dark:bg-slate-900    mt-32 flex flex-col items-center w-[95vw]  scroll-m-20 "
      ref={homeRef}
    >
      <div className="py-8 flex flex-col md:h-[70vh]  items-center gap-10 md:flex-row md:gap-40">
        <img
          src={img}
          alt="prakash"
          className="rounded-full size-80 flex-shrink-0 object-cover"
        />
        <div className="py-4 text-center md:text-start px-5">
          <p className="text-lg">HEY THERE! I'M</p>
          <p className="text-4xl">
            <span className=" text-blue-600">Prakash</span> Bhattarai
          </p>
          <div className=" pt-4 text-lg">
            <p>
              Bachelor's in{" "}
              <span className=" text-blue-600">
                Computer Science Engineering
              </span>{" "}
              and aspiring <span className="text-blue-600">MERN</span>
              <br />
            </p>
            <p>
              <span className=" text-blue-600">stack Web Developer</span>,
              passionate about creating
            </p>
            <p>interactive applications and experiences on the web.</p>
          </div>
          <div className="flex items-center gap-10">
            <button className="bg-blue-600 rounded-md shadow-md py-2 hover:bg-blue-700 w-36 text-white font-semibold mt-6">
              
              <a href="https://drive.google.com/file/d/1H4VtGbOVjsI_rWExUECgGOeJWTqMFjZn/view?usp=drivesdk">
              Resume
              </a>
             
            </button>
            <ul className="flex gap-3 mt-5">
              <li>
                <a href="https://github.com/prakashcs44">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill={darkMode && "white"}
                  >
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/prakash-bhattarai-1624b7247/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0288D1"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/prakashb44">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    id="twitter"
                    width="40"
                    height="40"
                  >
                    <path
                      fill="#03A9F4"
                      d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
