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
    <section id="projects" className="mx-3 py-11 xl:mx-18 xl:py-23 flex flex-col gap-10 xl:gap-12 border-b-1 border-divider">
        <div>
            <span className="pb-2.5 text-[9px] xl:text-[14px] leading-[150%] font-semibold xl:font-medium text-highlight">01 / PROJETS</span>
            <div className="flex flex-col xl:flex-row xl:justify-between gap-y-4">
                <h2 className="text-[24px] xl:text-[64px] xl:font-light font-fraunces">Projets selectionnés</h2>
                <a href="https://github.com/MNynee" target="_blank" rel="noopener noreferrer" className="text-[11px] xl:text-[16px] font-semibold text-highlight xl:self-center">
                    Tout voir sur GitHub <span className="font-inter">↗</span>
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