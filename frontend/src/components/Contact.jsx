import React,{ useRef, useEffect,useContext }  from "react";
import {PageContext} from "../contexts/PageContext";

function Contact() {

  const {setCurrSection,darkMode} = useContext(PageContext);
  const contactRef = useRef();


  useEffect(()=>{
   const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          setCurrSection("contact");
          
          
        }
      })
   },{threshold:0.3});

   observer.observe(contactRef.current);

   return ()=>observer.unobserve(contactRef.current);

  },[])


  return (
    <div id="contact" className="w-[95vw] shadow-md mt-24 dark:bg-slate-900 dark:text-white" ref={contactRef}>
      <h1 className="text-center text-3xl border-b-2 font-bold py-8 ">
        Contact
      </h1>

      <div className="flex flex-col md:flex-row py-10 justify-around items-center gap-10">
        <form className="flex flex-col shadow-md items-center justify-around px-6 gap-10 py-3 dark:shadow-slate-600">
          <div>
            <h1 className="text-center text-4xl font-medium text-blue-600 py-4">
              Connect with me
            </h1>
            <p className="text-xl text-slate-500">
              If you want to know more contact me or my work, or if you would just
            </p>
            <p className="text-xl text-slate-500">
              like to say hello, send me a message. I'd love to hear from you.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="name" className="text-lg font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className=" w-80 h-10 border border-gray-300 rounded-md px-3"
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="email" className="text-lg font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className=" w-80 h-10 border border-gray-300 rounded-md px-3"
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="message" className="text-lg font-semibold mb-1">
              Message
            </label>
            <textarea
              id="message"
              className="w-80 h-24 border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 rounded-md shadow-md py-2 hover:bg-blue-700 w-36 text-white font-semibold"
          >
            Send
          </button>
        </form>

        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-3xl font-bold text-center md:text-end py-2">Email</h1>
            <a className="text-xl text-blue-600" href='mailto:prakashbhattarai303@gmail.com'>
              prakashbhattarai303@gmail.com
            </a>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-center md:text-end py-2">Social</h1>
            <div className="flex gap-4 md:justify-end justify-center">
              <a href="https://linkedin.com/in/prakash-bhattarai-1624b7247/" >
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
              <a href="https://github.com/prakashcs44" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill = {darkMode&&"white"}
                  
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
              </a>
              <a href="https://leetcode.com/u/prakash67/" >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 95 111"
                  
                  xmlns="http://www.w3.org/2000/svg"
                  fill = {darkMode&&"white"}
                >
                  <path
                    d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"
                    fill="#FFA116"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
                    fill="#B3B3B3"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
                    fill="black"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
