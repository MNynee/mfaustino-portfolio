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
    <section className="mx-3 my-11 xl:mx-18 xl:my-23 flex flex-col gap-10 xl:gap-12">
        <div>
            <span className="pb-2.5">01 / PROJETS</span>
            <div className="flex flex-col xl:flex-row xl:justify-between gap-y-4">
                <h2>Projets selectionés</h2>
                <a href="https://github.com/MNynee" target="_blank" rel="noopener noreferrer">
                    Tout voir sur GitHub <span>↗</span>
                </a>
            </div>
        </div>
        <div className="flex flex-col gap-8.5 xl:grid xl:grid-cols-2 xl:gap-x-8 xl:gap-y-13">
            {projects.map((work) => {
                return <ProjectCard key={work.id} project={work} />
            })}
        </div>
    </section>
  )
}

export default ProjectsGrid