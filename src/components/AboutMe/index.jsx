import Button from "../Button"

const AboutMe = () => {
  return (
    <section id="about" className="mx-3 py-11 xl:mx-18 xl:py-23 flex flex-col xl:flex-row xl:justify-between gap-9 border-b-1 border-divider">
        <div className="flex flex-col gap-4 xl:w-full xl:max-w-[368px]">
            <span className="text-[9px] xl:text-[14px] leading-[150%] font-semibold xl:font-medium text-highlight">02 / À PROPOS</span>
            <div className="max-h-[394px] xl:h-full xl:max-h-[596px] rounded-xl overflow-hidden">
                <img src="src/assets/profile-photo.webp" alt="Photo de profil" className="w-full object-cover object-center"/>
            </div>
        </div>
        <div className="flex flex-col gap-4.5 xl:w-[55%]">
            <h2 className="mb-3 font-fraunces text-[21px] xl:text-[54px] xl:leading-[94%] font-light">Je code avec la même attention qu’on met à bien écrire.</h2>
            <p className="text-[14px] xl:text-[20px] leading-[170%] text-secondary-text">Un athlète professionnel qui aime aussi la technologie. Depuis jeune, très intéréssé par le monde digital. J'amene la soif pour la performance et l'efficacité qui j'ai appris à avoir avec le sport au développement.</p>
            <ul className="border-t-1 border-b-1 border-divider">
                <li className="border-b-1 border-divider p-[13px] xl:p-4.5 flex flex-col xl:grid xl:grid-cols-[40%_60%]">
                    <span className="m-b-[5px] text-[9px] xl:text-[14px] text-secondary-text leading-[150%]">Front-end</span>
                    <p className="text-[12px] xl:text-[18px] font-medium">JavaScript, React, CSS</p>
                </li>
                <li className="border-b-1 border-divider p-[13px] xl:p-4.5 flex flex-col xl:grid xl:grid-cols-[40%_60%]">
                    <span className="m-b-[5px] text-[9px] xl:text-[14px] text-secondary-text leading-[150%]">Outils</span>
                    <p className="text-[12px] xl:text-[18px] font-medium">Git et GitHub, Figma, VS Code, SASS, TailwindCSS</p>
                </li>
                <li className="border-b-1 border-divider p-[13px] xl:p-4.5 flex flex-col xl:grid xl:grid-cols-[40%_60%]">
                    <span className="m-b-[5px] text-[9px] xl:text-[14px] text-secondary-text leading-[150%]">En apprentissage</span>
                    <p className="text-[12px] xl:text-[18px] font-medium">TypeScript, React Native</p>
                </li>
                <li className="p-[13px] xl:p-4.5 flex flex-col xl:grid xl:grid-cols-[40%_60%]">
                    <span className="m-b-[5px] text-[9px] xl:text-[14px] text-secondary-text leading-[150%]">Soft Skills</span>
                    <p className="text-[12px] xl:text-[18px] font-medium">Communication, Travail en équipe, Rigueur, Résolution de problèmes, Curiosité</p>
                </li>
            </ul>
            <Button variant="secondary" content="Télécharger mon CV" link="#" />
        </div>
    </section>
  )
}

export default AboutMe