import Button from "../Button"

const AboutMe = () => {
  return (
    <section id="about" className="mx-3 my-11 xl:mx-18 xl:my-23 flex flex-col gap-9">
        <div>
            <span className="pb-2.5 text-[9px] xl:text-[14px] leading-[150%] font-semibold xl:font-medium text-highlight">02 / À PROPOS</span>
            <div className="block w-full max-h-[330px] max-h-[529px] h-full bg-[url(src/assets/profile-photo-mobile.webp)] xl:bg-[url(src/assets/profile-photo.webp)] bg-cover bg-no-repeat bg-center"></div>
        </div>
        <div>
            <h2>Je code avec la même attention qu’on met à bien écrire.</h2>
            <p>Un athlète professionnel qui aime aussi la technologie. Depuis jeune, très intéréssé par le monde digital. J'amene la soif pour la performance et l'efficacité qui j'ai appris à avoir avec le sport au développement.</p>
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