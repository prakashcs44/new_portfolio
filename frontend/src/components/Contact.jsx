import React, { useContext, useState } from "react";
import { PageContext } from "../contexts/PageContext";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function Contact() {
  const { darkMode } = useContext(PageContext);
  const contactRef = useIntersectionObserver("contact");

  // ✅ State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success / error

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("Please fill all fields ❌");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://new-portfolio-backend-3-q6ib.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(data.detail || "Failed to send message ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <div
      id="contact"
      className="w-[95vw] mt-24 dark:bg-slate-900 dark:text-white flex flex-col items-center scroll-m-20"
      ref={contactRef}
    >
      <h1 className="text-center text-3xl border-b-2 font-bold py-8 w-[90%]">
        Contact
      </h1>

      <div className="flex flex-col md:flex-row py-10 justify-around items-center gap-10">
        
        {/* ✅ FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col shadow-md items-center justify-around px-6 gap-10 py-3 dark:shadow-slate-600"
        >
          <div>
            <h1 className="text-center text-4xl font-medium text-blue-600 py-4">
              Connect with me
            </h1>
            <p className="text-xl text-slate-500">
              If you want to know more about me or my work, feel free to reach out.
            </p>
          </div>

          {/* Name */}
          <div className="flex flex-col items-start">
            <label className="text-lg font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-80 h-10 border border-gray-300 rounded-md px-3 text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col items-start">
            <label className="text-lg font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-80 h-10 border border-gray-300 rounded-md px-3 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col items-start">
            <label className="text-lg font-semibold mb-1">Message</label>
            <textarea
              className="w-80 h-24 border border-gray-300 rounded-md px-3 py-2 text-black"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Status Message */}
          {status && (
            <p className="text-sm text-center">
              {status}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 rounded-md shadow-md py-2 hover:bg-blue-700 w-36 text-white font-semibold disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* RIGHT SIDE (unchanged) */}
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-3xl font-bold text-center md:text-end py-2">Email</h1>
            <a className="text-xl text-blue-600" href='mailto:prakashbhattarai303@gmail.com'>
              prakashbhattarai303@gmail.com
            </a>
          </div>

          {/* Social icons unchanged */}
        </div>
      </div>
    </div>
  );
}

export default Contact;