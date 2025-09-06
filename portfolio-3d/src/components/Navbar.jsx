import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // PDF file (place resume inside /public)
  const resumeFile = "/resume.pdf";

  return (
    <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-20 bg-transparent">
      <h1 className="text-2xl font-bold">Arya Shah | IT Engineer</h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex">
        <a
          href={resumeFile}
          download="Arya_Shah_Resume.pdf"
          className="relative px-8 py-3 overflow-hidden rounded-full text-white font-semibold
                     bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600
                     shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-2">
            📄 Resume
          </span>

          {/* Shiny reflection effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 opacity-0 
                           group-hover:opacity-100 transition-opacity duration-500"></span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent
                           animate-shine"></span>
        </a>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-gray-900 flex flex-col items-center space-y-6 py-6 md:hidden">
          <a
            href={resumeFile}
            download="Arya_Shah_Resume.pdf"
            onClick={() => setIsOpen(false)}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 
                       text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105"
          >
            📄Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
