import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-purple-950 to-blue-950 text-gray-300 w-full overflow-hidden">
      {/* Glow background effect */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.4),transparent_70%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.4),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">Shah Arya</h3>
          <p className="text-gray-400 mb-5 max-w-md">
            Creating seamless experiences where aesthetics & functionality come
            together.
          </p>

          {/* Social icons */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/shaharya53"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/arya-shah-06488a358/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/arya.shah53/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center md:items-end text-left md:text-right">
          <p className="text-gray-400 mb-4">
            Feel free to reach out for inquiries or collaborations.
          </p>
          <a
            href="mailto:aryaaryashah777@gmail.com"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:underline transition"
          >
            <MdEmail className="text-xl" />
            aryaaryashah777@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="relative border-t border-gray-800 text-center py-5 text-sm text-gray-500">
        © {new Date().getFullYear()} Shah Arya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
