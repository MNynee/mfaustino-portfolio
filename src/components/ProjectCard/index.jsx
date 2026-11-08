const ProjectCard = ({ project }) => {
  
    if (!project) return <div>Loading...</div>

  return (
    <div className="flex flex-col gap-4.5">
        <div className="border border-0.7 border-button-border rounded-xl overflow-hidden max-h-[170px] h-[100%] xl:max-h-[374px]">
            <img src={project.image} alt={`${project.title}'s site`} className={`hover:animate-scroll-${project.hover} transition-transform duration-1000 ease-in-out`} />
        </div>
        <div className="flex justify-between items-center">
            <h3 className="text-[21px] xl:text-[30px] font-fraunces xl:pb-1.5">{project.title}</h3>
            <span className="text-[9px] xl:text-[14px] leading-[150%] text-secondary-text">{project.year}</span>
        </div>
        <p className="text-[12px] xl:text-[17px] text-secondary-text">{project.description}</p>
        <div className="flex gap-1.5 xl:gap-2.5 pb-1 xl:pb-2.5">
            {project.technologies.map((tech, index) =>
                <span key={`tech-${index}`} className="px-[9px] xl:px-[11px] py-[5px] text-[9px] xl:text-[13px] text-secondary-text border border-0.7 border-button-border rounded-full">{tech}</span>
            )}
        </div>
        <div className="flex gap-4">
            <a href={project.link} className="text-highlight text-[11px] xl:text-[16px] font-semibold group" target="_blank" rel="noopener noreferrer">
                Voir le site <span>↗</span>
                <div className="bg-highlight h-[1.5px] w-0 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href={project.code} className="text-[11px] xl:text-[16px] font-semibold group" target="_blank" rel="noopener noreferrer">
                Code source <span>↗</span>
                <div className="bg-main-text h-[1.5px] w-0 group-hover:w-full transition-all duration-300"></div>
            </a>
        </div>
    </div>
  )
}

export default ProjectCard