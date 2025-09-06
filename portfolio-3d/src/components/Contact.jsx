import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundEffect from "./BackgroundEffect";
import { MdClose } from "react-icons/md";
import { CheckCircle } from "lucide-react";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 flex flex-col justify-center items-center text-center px-6"
    >
      {/* Background effect (fills only Contact section) */}
      <div className="absolute inset-0 -z-10">
        <BackgroundEffect />
      </div>

      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        From Concept to <span className="text-purple-400">Creation</span> <br />
        Let&apos;s Make it <span className="text-purple-400">Happen!</span>
      </h2>

      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => {
          setIsOpen(true);
          setStatus("idle");
        }}
        className="mt-10 bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-4 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition text-lg text-white font-semibold flex items-center gap-2"
      >
        Let’s Connect →
      </motion.button>

      <p className="text-gray-300 mt-8 text-lg font-medium">
        I&apos;m available for full-time roles & freelance projects.
      </p>
      <p className="text-gray-400 max-w-xl mt-2">
        I thrive on crafting dynamic web applications, and delivering seamless
        user experiences.
      </p>

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

              {/* Modal states */}
              {status === "idle" || status === "loading" ? (
                <>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Let&apos;s Connect
                  </h3>
                  <form onSubmit={sendEmail} className="flex flex-col gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="john@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg bg-neutral-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                    <textarea
                      rows="4"
                      name="message"
                      placeholder="I would like to connect with you..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg bg-neutral-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
                    ></textarea>
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
                      {status === "loading" ? "Sending..." : "Send Message"}
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

export default Contact;
