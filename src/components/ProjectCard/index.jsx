import { useEffect, useState } from "react"

const ProjectCard = ({ project }) => {
  
    const [work, setWork] = useState({})
    const [techs, setTechs] = useState([])

    useEffect(() => {
        async function fetchWork() {
            const response = await fetch('/data/projects.json')
            const data = await response.json()
            const chosenWork = data.find((work) => work.id === project.id)
            const techList = data.find((work) => work.id === project.id).technologies
            setTechs(techList)
            setWork(chosenWork)
        }
        fetchWork()
    }, [project.id])

    console.log(work.hover)
  
    if (!project) return <div>Loading...</div>

  return (
    <div className="flex flex-col gap-4.5">
        <div className="border border-0.7 border-button-border rounded-xl overflow-hidden max-h-[170px] h-[100%] xl:max-h-[374px]">
            <img src={work.image} alt={`${work.title}'s site`} className={`hover:animate-scroll-${work.hover} transition-transform duration-1000 ease-in-out`} />
        </div>
        <div className="flex justify-between items-center">
            <h2 className="text-[21px] xl:text-[30px] font-fraunces xl:pb-1.5">{work.title}</h2>
            <span className="text-[9px] xl:text-[14px] leading-[150%] text-secondary-text">{work.year}</span>
        </div>
        <p className="text-[12px] xl:text-[17px] text-secondary-text">{work.description}</p>
        <div className="flex gap-1.5 xl:gap-2.5 pb-1 xl:pb-2.5">
            {techs.map((tech, index) =>
                <span key={`tech-${index}`} className="px-[9px] xl:px-[11px] py-[5px] text-[9px] xl:text-[13px] text-secondary-text border border-0.7 border-button-border rounded-full">{tech}</span>
            )}
        </div>
        <div className="flex gap-4">
            <a href={work.link} className="text-highlight text-[11px] xl:text-[16px] font-semibold" target="_blank" rel="noopener noreferrer">
                Voir le site <span>↗</span>
            </a>
            <a href={work.code} className="text-[11px] xl:text-[16px] font-semibold" target="_blank" rel="noopener noreferrer">
                Code source <span>↗</span>
            </a>
        </div>
    </div>
  )
}

export default ProjectCard