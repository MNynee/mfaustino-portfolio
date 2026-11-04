
const Contact = () => {
  return (
    <section id="contact" className="mx-3 py-11 xl:mx-18 xl:py-23 flex flex-col xl:flex-row xl:justify-between gap-12 border-b-1 border-divider">
        <div>
            <span className="text-[9px] xl:text-[14px] leading-[150%] font-semibold xl:font-medium text-highlight">03 / CONTACT</span>
            <h2>Parlons-en.</h2>
            <a href="mailto:matheus.dev3trad@gmail.com" className="">matheus.dev3trad@gmail.com</a>
            <ul>
                <li><a href="https://github.com/MNynee">GitHub</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">CV</a></li>
            </ul>
        </div>
        <form action="">
            <label>
                <input type="text" name="name" id="name" placeholder="Votre nom" />
            </label>
            <label>
                <input type="text" name="email" id="email" placeholder="Votre email" />
            </label>
            <label>
                <textarea name="message" id="message" placeholder="Votre message"></textarea>
            </label>
            <button type="submit">Envoyer le message</button>
        </form>
    </section>
  )
}

export default Contact>