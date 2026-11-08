import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef()

    const [statusMessage, setStatusMessage] = useState('')
    const [isError, setIsError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        await emailjs.sendForm('service_wz2sj7m', 'template_jyxc3tg', '#contactForm', 'x7hsWrH-BL3Q_pjjm').then(() => {
            form.current.reset()
            setStatusMessage('Message envoyé avec succès')
            setIsError(false)
        }, (error) => {
            setStatusMessage('Une erreur est survenue. Réessayez.')
            console.log(error)
            setIsError(true)
        })   
    }

  return (
    <section id="contact" className="mx-3 py-11 xl:mx-18 xl:py-23 flex flex-col xl:grid xl:grid-cols-2 gap-12 border-b-1 border-divider">
        <div className="flex flex-col gap-4.5 xl:gap-5">
            <span className="text-[9px] xl:text-[14px] leading-[150%] font-semibold xl:font-medium text-highlight">03 / CONTACT</span>
            <h2 className="font-fraunces font-light text-[26px] xl:text-[88px] leading-[110%]">Parlons-en.</h2>
            <a href="mailto:matheus.dev3trad@gmail.com" className="font-medium text-[14px] xl:text-[30px] text-highlight">matheus.dev3trad@gmail.com</a>
            <ul className="flex gap-5 xl:gap-6">
                <li><a href="https://github.com/MNynee" className="font-medium text-[11px] xl:text-[17px]">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/matheus-faustino-7b4972161/" className="font-medium text-[11px] xl:text-[17px]">LinkedIn</a></li>
                <li><a href="#" className="font-medium text-[11px] xl:text-[17px] invisible">CV</a></li>
            </ul>
            <p className="font-medium text-[11px] xl:text-[17px]">+33 06 61 55 69 21</p>
        </div>
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-3.5" id="contactForm">
            <label htmlFor="name" className="text-secondary-text text-[9px] xl:text-[14px] flex flex-col gap-1">
                Nom
                <input type="text" name="name" id="name" placeholder="Votre nom" required className="w-full bg-htmlForm border border-button-border p-3 xl:p-3.5 text-[11px] text-[16px] leading-[150%] rounded-lg xl:rounded-xl placeholder:text-[16px]" />
            </label>
            <label htmlFor="email" className="text-secondary-text text-[9px] xl:text-[14px] flex flex-col gap-1">
                E-mail
                <input type="email" name="email" id="email" placeholder="votre@email.fr" required className="w-full bg-htmlForm border border-button-border p-3 xl:p-3.5 text-[11px] text-[16px] leading-[150%] rounded-lg xl:rounded-xl placeholder:text-[16px]" />
            </label>
            <label htmlFor="message" className="text-secondary-text text-[9px] xl:text-[14px] flex flex-col gap-1">
                Message
                <textarea name="message" id="message" placeholder="Parlez-moi de votre projet" required className="w-full bg-form border border-button-border p-3 xl:p-3.5 text-[11px] text-[16px] leading-[150%] rounded-lg xl:rounded-xl h-[96px] xl:h-[131px] placeholder:text-[16px]"></textarea>
            </label>
            <button type="submit" className="inline-block max-w-[145px] xl:max-w-[198px] xl:mt-2.5 px-5 xl:px-6 py-2.5 xl:py-3.5 border border-solid bg-highlight hover:bg-button-text border-transparent text-button-text hover:text-highlight font-bold rounded-full text-[11px] xl:text-[16px] hover:scale-105 transition-all duration-300 cursor-pointer">Envoyer le message</button>
            {statusMessage && (
                <p className={isError ? 'text-red-500' : 'text-green-500'}>
                    {statusMessage}
                </p>
            )}
        </form>
    </section>
  )
}

export default Contact