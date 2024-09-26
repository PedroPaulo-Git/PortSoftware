import './Footer.css'
import Logo from '../../assets/PortICON.png';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";

export const Footer = () => {
    return (

        <div className='footer-container'>
            <div className='footer' id='footer'>

                <div className='footer-content'>
                <img className='footer-content-logo' src={Logo} alt="" />
                    <p>Aqui, você encontrará uma seleção dos meus melhores projetos e serviços, 
                    criados com dedicação e atenção aos detalhes.Com uma vasta experiência em React.Js, TailsWind,Vite, Typescript,Desenvolvimento web</p>
                </div>
                <div className='footer-content'>
                <span className='footer-content-title'>Explore</span>
                    <ul>
                        <a href='https://pedropaulo-git.github.io/MyRepository-in-React/' target='blank'>Sobre</a>
                        <a href='#contact'>Contato</a>
                        <a href='#'>Companhia</a>
                        <a href='#projects'>Nossos Projetos</a>
                    </ul>
                </div>
                <div className='footer-content'>
                <span className='footer-content-title'>Sobre</span>
                    <p> Estamos comprometidos em transformar suas ideias em realidade, oferecendo soluções personalizadas que atendem às suas necessidades e superam suas expectativas.</p>
                </div>
                <div className='footer-content footer-content-contact'>
                <span className='footer-content-title'>Contato</span>
                    <p>Vertentes-PE</p>
                    <p>Pernambuco,Brasil</p>
                    <span><MdOutlineMailOutline /><a href="mailto:receberpedro09@gmail.com" target="_blank" rel="noopener noreferrer"><p className='footer-email'>receberpedro09@gmail.com</p></a></span>
                    <span><IoLogoWhatsapp /><a href="https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato." target="_blank" rel="noopener noreferrer"><p className='footer-number'>+55 (81) 99904-9803</p></a></span>
                </div>

            </div>
            <hr />
            <div className='footer-copy'>
            <span>&copy; 2024 PortSoftware. All rights reserved.</span>
            </div>
        </div>
    )
}
