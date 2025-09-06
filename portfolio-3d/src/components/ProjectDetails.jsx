import { useParams, Link } from "react-router-dom"
import { projects } from "./projectsData"
import { motion } from "framer-motion"

const ProjectDetails = () => {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-2xl">
        Project not found ❌
      </div>
    )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <Link
          to="/#projects"
          className="inline-block text-pink-400 hover:text-pink-300 transition mb-8 font-medium"
        >
          ← Back to Projects
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {project.description}
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl mb-12"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </motion.div>

        {/* Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/10"
        >
          <h2 className="text-2xl font-semibold mb-4 text-pink-400">
            📌 Project Details
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            {project.details}
          </p>

          {/* Tech Stack */}
          <h3 className="text-xl font-semibold mb-3 text-purple-400">
            🛠 Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-600/40 to-pink-600/40 border border-purple-500/30 text-white shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetails
