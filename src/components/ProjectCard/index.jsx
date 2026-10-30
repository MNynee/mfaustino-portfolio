import { useEffect, useState } from "react"

const ProjectCard = ({ project }) => {
  
    const [work, setWork] = useState({})

    useEffect(() => {
        async function fetchWork() {
            const response = await fetch('/data/projects.json')
            const data = await response.json()
            const chosenWork = data.find((work) => work.id === project.id)
            setWork(chosenWork)
        }
        fetchWork()
    }, [project.id])
  
    if (!project) return <div>Loading...</div>

  return (
    <div>
        <div>
            <img src={work.image} alt={`${work.title}'s site`} />
        </div>
        <div>
            <h2>{work.title}</h2>
            <span>{work.year}</span>
        </div>
        <p>{work.description}</p>
        <div>
            {work.technologies.map((tech, index) =>
                <span key={`tech-${index}`}>{tech}</span>
            )}
        </div>
        <div>
            <a href={work.link} className="" target="_blank" rel="noopener noreferrer">
                Voir le site <span>↗</span>
            </a>
            <a href={work.code} className="" target="_blank" rel="noopener noreferrer">
                Code source <span>↗</span>
            </a>
        </div>
    </div>
  )
}

export default ProjectCard