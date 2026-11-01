import Button from "../Button"

const AboutMe = () => {
  return (
    <section id="about" className="mx-3 my-11 xl:mx-18 xl:my-23 flex flex-col xl:flex-row xl:justify-between gap-9">
        <div className="flex flex-col gap-4 xl:w-full xl:max-w-[368px]">
            <span className="text-[9px] xl:text-[14px] leading-[150%] font-semibold xl:font-medium text-highlight">02 / À PROPOS</span>
            <div className="max-h-[394px] xl:h-full xl:max-h-[596px] rounded-xl overflow-hidden">
                <img src="src/assets/profile-photo.webp" alt="Photo de profil" className="w-full object-cover object-center"/>
            </div>
        </div>
        <div className="flex flex-col gap-4.5 xl:w-[55%]">
            <h2 className="mb-3 font-fraunces text-[21px] xl:text-[54px] xl:leading-[94%] font-light">Je code avec la même attention qu’on met à bien écrire.</h2>
            <p className="text-[14px] xl:text-[20px] leading-[170%] text-secondary-text">Un athlète professionnel qui aime aussi la technologie. Depuis jeune, très intéréssé par le monde digital. J'amene la soif pour la performance et l'efficacité qui j'ai appris à avoir avec le sport au développement.</p>
            <ul>
                <li>
                    <span>Front-end</span>
                    <p>JavaScript, React, CSS</p>
                </li>
                <li>
                    <span>Outils</span>
                    <p>Git et GitHub, Figma, VS Code, SASS, TailwindCSS</p>
                </li>
                <li>
                    <span>En apprentissage</span>
                    <p>TypeScript, React Native</p>
                </li>
                <li>
                    <span>Soft Skills</span>
                    <p>Communication, Travail en équipe, Rigueur, Résolution de problèmes, Curiosité</p>
                </li>
            </ul>
            <Button variant="secondary" content="Télécharger mon CV" link="#" />
        </div>
    </section>
  )
}

export default AboutMe