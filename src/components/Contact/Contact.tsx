import './Contact.css';
import BackgroundContact from '../../assets/backgroundcontact.jpg'
import BackgroundContactMobile from '../../assets/backgroundcontactmobile.jpg'
import ContactPng from '../../assets/banner-hero-web-min.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();

      if (form.current) {
        emailjs
          .sendForm('service_4mwypqm', 'template_sz04wmd', form.current, {
            publicKey: 'WC8Gsx_d4lEAuQ49g',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      }
    };
    
    return (
        <div id='contact' className="contact">
            <img className="contact-background" src={BackgroundContact} alt="" />
            <img className="contact-background-mobile"  src={BackgroundContactMobile} alt="" />
            <img className="contact-image-png" src={ContactPng} alt="" />
            <div className="contact-container">
            <span className="sub-title">Contate-nos</span>
            <h1 className="title">Procurando algo para seu negócio?</h1>
                <form  ref={form} onSubmit={sendEmail}>

                    <input placeholder='Seu Nome' type="text" name="user_name" required />


                    <input placeholder='Seu Email' type="email" name="user_email" required />


                    <textarea placeholder='Escreva uma Mensagem' id="message" rows={8}  name="message" required></textarea>

                    <button value="Send" type="submit">Enviar Mensagem</button>
                </form>

            </div>
        </div>
    )
}
