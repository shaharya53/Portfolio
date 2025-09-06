import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MdClose } from "react-icons/md";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send email via backend
  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 w-full">
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight text-white max-w-5xl"
      >
        I help founders turn ideas <br />
        into{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-serif italic">
          seamless digital experiences
        </span>
      </motion.h1>

      {/* Subheading with typing effect */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-8 text-xl md:text-2xl text-gray-300"
      >
        Hello, I'm <span className="font-bold text-white">Shah Arya</span>, a{" "}
        <TypeAnimation
          sequence={[
            "IT Engineer",
            2000,
            "3rd Year Student",
            2000,
            "Full-Stack Developer",
            2000,
            "AI Enthusiast",
            2000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="font-serif italic text-purple-300"
        />
      </motion.p>

      {/* Motion Button to open modal */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => {
          setIsOpen(true);
          setStatus("idle"); // reset
        }}
        className="mt-10 bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-4 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition text-lg text-white font-semibold flex items-center gap-2"
      >
        Let’s Connect →
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-neutral-900 rounded-2xl shadow-xl p-8 w-full max-w-md relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <MdClose size={24} />
              </button>

              {/* Conditional content */}
              {status === "idle" || status === "loading" ? (
                <>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Let&apos;s Connect
                  </h3>

                  {/* Form */}
                  <form onSubmit={sendEmail} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-neutral-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">
                        Your Message
                      </label>
                      <textarea
                        rows="4"
                        name="message"
                        placeholder="I would like to connect with you..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-neutral-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={{ scale: status === "loading" ? 1 : 1.05 }}
                      className={`mt-4 px-6 py-3 rounded-xl text-white font-semibold shadow-lg transition
                        ${
                          status === "loading"
                            ? "bg-gray-600 cursor-not-allowed"
                            : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                        }`}
                    >
                      {status === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="inline-block animate-spin border-2 border-t-transparent border-white rounded-full w-4 h-4"></span>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>
                  </form>
                </>
              ) : status === "success" ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                  <h3 className="text-2xl font-bold text-green-400">
                    Message Sent!
                  </h3>
                  <p className="text-gray-300 mt-2">
                    Thanks for reaching out, I’ll get back to you soon.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-10">
                  <h3 className="text-2xl font-bold text-red-400">
                    ❌ Failed to Send
                  </h3>
                  <p className="text-gray-300 mt-2">
                    Something went wrong. Please try again later.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
