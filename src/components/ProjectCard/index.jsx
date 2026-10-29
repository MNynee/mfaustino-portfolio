import { useEffect, useState } from "react"

const ProjectCard = ({ id }) => {
  
    const [project, setProject] = useState({})

    useEffect(() => {
        async function fetchProject() {
            const response = await fetch('/data/projects.json')
            const data = await response.json()
            const foundProject = data.find((project) => project.id === id)
            setProject(foundProject)
        }
        fetchProject()
    }, [id])
  
    if (!project) return null

  return (
    <div>
        <div>
            <img src={project.image} alt={`${project.title}'s site`} />
        </div>
        <div>
            <h2>{project.title}</h2>
            <span>{project.year}</span>
        </div>
        <p>{project.description}</p>
        <div>
            {project.technologies.map((tech, index) =>
                <span key={index}>{tech}</span>
            )}
        </div>
        <div>
            <a href={project.link} className="" target="_blank" rel="noopener noreferrer">
                Voir le site <span>↗</span>
            </a>
            <a href={project.code} className="" target="_blank" rel="noopener noreferrer">
                Code source <span>↗</span>
            </a>
        </div>
    </div>
  )
}

export default ProjectCard