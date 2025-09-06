import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 py-20 gap-12"
    >
      {/* Left Content */}
      <div className="flex-1 text-left md:pl-5 lg:pl-40">
        <h4 className="uppercase tracking-widest text-sm text-gray-400 mb-2">
          Know About Me
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Who Am I?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          I'm shah Arya, a proactive full-stack developer passionate about
          creating dynamic web experiences. From frontend to backend, I thrive
          on solving complex problems with clean, efficient code. My expertise
          spans React, Next.js, and Node.js, and I'm always eager to learn more.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          When I'm not immersed in work, I'm exploring new ideas and staying
          curious. Life's about balance, and I love embracing every part of it.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          I believe in waking up each day eager to make a difference!
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl text-gray-300">
          <a
            href="https://github.com/shaharya53"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/arya-shah-06488a358/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/arya.shah53/?next=%2F"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:aryaaryashah@example.com"
            className="hover:text-white transition"
          >
            <MdEmail />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img
          src="me2.jpg" // <-- replace with your actual image path
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-gray-700"
        />
      </div>
    </section>
  );
};

export default About;
