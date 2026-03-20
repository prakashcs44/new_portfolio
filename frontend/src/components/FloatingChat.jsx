import { useState } from "react";
import ChatBot from "./ChatBot";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[10000] group">
        {/* Tooltip */}
        <div
          className="absolute right-20 top-1/2 -translate-y-1/2 
          bg-black text-white text-sm px-3 py-1 rounded-lg
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200 whitespace-nowrap"
        >
          Questions?
        </div>

        {/* Floating button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-16 h-16 rounded-full 
          bg-gradient-to-br from-indigo-500 to-purple-600 
          text-white text-2xl shadow-xl 
          hover:scale-110 transition-transform duration-200"
        >
          🤖
        </button>
      </div>

      {/* Chat popup */}
      <div
        className={`fixed bottom-24 right-5 z-[9999] w-[380px] h-[520px]
        rounded-2xl overflow-hidden shadow-2xl
        backdrop-blur-xl bg-white/80 dark:bg-zinc-900/90
        transition-all duration-300
        ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        <ChatBot />
      </div>
    </>
  );
}
