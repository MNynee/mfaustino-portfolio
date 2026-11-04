
const Contact = () => {
  return (
    <section id="contact" className="mx-3 py-11 xl:mx-18 xl:py-23 flex flex-col xl:grid xl:grid-cols-2 gap-12 border-b-1 border-divider">
        <div className="flex flex-col gap-4.5 xl:gap-5">
            <span className="text-[9px] xl:text-[14px] leading-[150%] font-semibold xl:font-medium text-highlight">03 / CONTACT</span>
            <h2 className="font-fraunces font-light text-[26px] xl:text-[88px] leading-[110%]">Parlons-en.</h2>
            <a href="mailto:matheus.dev3trad@gmail.com" className="font-medium text-[14px] xl:text-[30px] text-highlight">matheus.dev3trad@gmail.com</a>
            <ul className="flex gap-5 xl:gap-6">
                <li><a href="https://github.com/MNynee" className="font-medium text-[11px] xl:text-[17px]">GitHub</a></li>
                <li><a href="#" className="font-medium text-[11px] xl:text-[17px]">LinkedIn</a></li>
                <li><a href="#" className="font-medium text-[11px] xl:text-[17px]">CV</a></li>
            </ul>
            <p className="font-medium text-[11px] xl:text-[17px]">+33 06 61 55 69 21</p>
        </div>
        <form action="" className="flex flex-col gap-3.5">
            <label for="name" className="text-secondary-text text-[9px] xl:text-[14px] flex flex-col gap-1">
                Nom
                <input type="text" name="name" id="name" placeholder="Votre nom" className="w-full bg-form border border-button-border p-3 xl:p-3.5 text-[11px] text-[16-px] leading-[150%] rounded-lg xl:rounded-xl" />
            </label>
            <label for="email" className="text-secondary-text text-[9px] xl:text-[14px] flex flex-col gap-1">
                E-mail
                <input type="text" name="email" id="email" placeholder="votre@email.fr" className="w-full bg-form border border-button-border p-3 xl:p-3.5 text-[11px] text-[16-px] leading-[150%] rounded-lg xl:rounded-xl" />
            </label>
            <label for="message" className="text-secondary-text text-[9px] xl:text-[14px] flex flex-col gap-1">
                Message
                <textarea name="message" id="message" placeholder="Parlez-moi de votre projet" className="w-full bg-form border border-button-border p-3 xl:p-3.5 text-[11px] text-[16-px] leading-[150%] rounded-lg xl:rounded-xl h-[96px] xl:h-[131px]"></textarea>
            </label>
            <button type="submit" className="inline-block max-w-[145px] xl:max-w-[198px] xl:mt-2.5 px-5 xl:px-6 py-2.5 xl:py-3.5 border border-solid bg-highlight hover:bg-button-text border-transparent text-button-text hover:text-highlight font-bold rounded-full text-[11px] xl:text-[16px] hover:scale-105 transition-all duration-300">Envoyer le message</button>
        </form>
    </section>
  )
}

export default Contact