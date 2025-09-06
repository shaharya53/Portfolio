import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import TechStack from "./components/TechStack"
import ProjectDetails from "./components/ProjectDetails"

function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen overflow-x-hidden text-white">
        {/* Gradient Background */}
        <div className="fixed inset-0 -z-20 w-screen h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black
" /><ScrollToTop />

        {/* Stars Background */}
        

        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div className="relative z-10 w-full max-w-full flex flex-col items-center">
                <Navbar />
                <Hero />
                <Projects />
                <TechStack />
                <About />
                <Contact /><br></br><br></br><br></br><br></br><br></br>
                <Footer />
              </div>
            }
          />

          {/* Project Details Page */}
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
