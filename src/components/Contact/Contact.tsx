import './Contact.css';
import BackgroundContact from '../../assets/backgroundcontact.jpg'
import ContactPng from '../../assets/banner-hero-web-min.png'

export const Contact = () => {
    return (
        <div className="contact">
            <img className="contact-background" src={BackgroundContact} alt="" />
            <img className="contact-image-png" src={ContactPng} alt="" />
            <div className="contact-container">
            <span className="sub-title">Contate-nos</span>
            <h1 className="title">Procurando algo para seu negócio?</h1>
                <form action="#">

                    <input placeholder='Seu Nome' type="text" id="name" name="name" required />


                    <input placeholder='Seu Email' type="email" id="email" name="email" required />


                    <textarea placeholder='Escreva uma Mensagem' id="message" rows={8} name="message" required></textarea>

                    <button type="submit">Enviar Mensagem</button>
                </form>

            </div>
        </div>
    )
}
