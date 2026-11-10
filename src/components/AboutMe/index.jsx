import { useEffect, useState } from "react"
import Button from "../Button"

const AboutMe = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const profilePhoto = windowWidth >= 1280 ? "src/assets/profile-photo.webp" : "src/assets/profile-photo-mobile.webp"

  return (
    <section id="about" className="mx-3 py-11 lg:mx-18 lg:py-23 flex flex-col md:flex-row md:justify-between gap-9 border-b-1 border-divider">
        <div className="flex flex-col gap-4 lg:w-full lg:max-w-[368px]">
            <span className="text-[9px] xl:text-[14px] leading-[150%] font-semibold xl:font-medium text-highlight">02 / À PROPOS</span>
            <div className="rounded-xl overflow-hidden">
                <img src={profilePhoto} alt="Portrait de Matheus Faustino, développeur front-end" className="w-full object-cover object-center"/>
            </div>
        </div>
        <div className="flex flex-col gap-4.5 xl:w-[55%]">
            <h2 className="mb-3 xl:mb-10.5 font-fraunces text-[21px] xl:text-[54px] xl:leading-[94%] font-light">Je code avec la même attention qu’on met à bien écrire.</h2>
            <p className="text-[14px] xl:text-[20px] leading-[170%] text-secondary-text">Un athlète professionnel qui aime aussi la technologie. Depuis jeune, très intéréssé par le monde digital. J'amene la soif pour la performance et l'efficacité qui j'ai appris à avoir avec le sport au développement.</p>
            <ul className="border-t-1 border-b-1 border-divider xl:mb-5">
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
            <Button variant="secondary" content="Aller sur GitHub" link="https://github.com/MNynee" />
        </div>
    </section>
  )
}

export default AboutMe