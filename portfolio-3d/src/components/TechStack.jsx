import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPython, FaJava, FaGitAlt, FaGithub,
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiPrisma,
  SiFlask, SiFastapi, SiExpress, SiPostman, SiFramer, SiShadcnui, SiMysql, SiVercel,
} from "react-icons/si";
import MovingStrips from "./MovingStrips";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "ReactJS" },
  { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  { icon: <SiFramer className="text-pink-500" />, name: "Framer Motion" },
  { icon: <SiShadcnui className="text-gray-300" />, name: "Shadcn" },
  { icon: <FaNode className="text-green-500" />, name: "NodeJS" },
  { icon: <SiExpress className="text-gray-400" />, name: "ExpressJS" },
  { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
  { icon: <SiMysql className="text-blue-600" />, name: "MySQL" },
  { icon: <SiPrisma className="text-gray-300" />, name: "Prisma" },
  { icon: <SiPostgresql className="text-sky-500" />, name: "PostgreSQL" },
  { icon: <FaJava className="text-red-500" />, name: "Java" },
  { icon: <FaPython className="text-yellow-400" />, name: "Python" },
  { icon: <SiFlask className="text-gray-400" />, name: "Flask" },
  { icon: <SiFastapi className="text-green-400" />, name: "FastAPI" },
  { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
  { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
  { icon: <FaGithub className="text-white" />, name: "GitHub" },
  { icon: <SiVercel className="text-white" />, name: "Vercel" },
];

const TechStack = () => {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-32 text-center bg-gradient-to-b ">
        {/* Motivational line */}
        <p className="text-2xl sm:text-3xl font-semibold text-purple-400 mb-4 font-serif italic">
          I CONSTANTLY TRY TO IMPROVE
        </p>

        {/* Section heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16 font-serif italic">
          ⚡My Tech Stack
        </h2>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl 
                         bg-white/5 backdrop-blur-md shadow-lg 
                         hover:scale-105 hover:shadow-purple-500/30 
                         transition-transform duration-300"
            >
              <div className="text-4xl sm:text-5xl mb-2">{skill.icon}</div>
              <span className="text-xs sm:text-sm text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Moving strips come AFTER the TechStack */}
      <MovingStrips />
    </>
  );
};

export default TechStack;
