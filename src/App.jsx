import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import ProjectsGrid from "./components/ProjectsGrid"
import AboutMe from "./components/AboutMe"

function App() {

  return (
    <div className="bg-main-bg font-hanken-grotesk text-main-text">
      <Header />
      <Hero />
      <ProjectsGrid />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App
