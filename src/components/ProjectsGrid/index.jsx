import { useEffect, useState } from "react"
import ProjectCard from "../ProjectCard"

const ProjectsGrid = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        async function fetchProjects() {
            const response = await fetch('/data/projects.json')
            const data = await response.json()
            setProjects(data)
        }
        fetchProjects()
    }, [])
    
  return (
    <section>
        <div>
            <span>01 / PROJETS</span>
        </div>
        <div>
            <h2>Projets selectionés</h2>
            <a href="https://github.com/MNynee" target="_blank" rel="noopener noreferrer">
                Tout voir sur GitHub <span>↗</span>
            </a>
        </div>
        <div>
            {projects.map((work) => {
                return <ProjectCard key={work.id} project={work} />
            })}
        </div>
    </section>
  )
}

export default ProjectsGrid