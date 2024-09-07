import './Home.css'
import { HeaderHome } from '../HeaderHome/HeaderHome'
import HomeImage from '../../assets/homeproject.jpg'
import { Services } from '../Services/Services'
import { Project } from '../Projects/Project'
import { BackgroundDesign } from '../backgroundDesign/BackgroundDesign'
import { Contact } from '../Contact/Contact'
import { Footer } from '../Footer/Footer'

import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { NavMobile } from '../NavMobile/NavMobile'
import { useState } from 'react'

export const Home = () => {
  
  const [displayMobile, setDisplayMobile] = useState(false);

  const toggleMenu = () => {
    setDisplayMobile(true);
  };
  const toggleMenuOff = () => {
    setDisplayMobile(false);
  };
  return (
    <>
   
      <div className='home' id='home'>
     
      <HeaderHome toggleMenu={toggleMenu} />
       
        <div className='homeimage-info'>
          <h1>É a Hora de Construir seu Software Conosco</h1>
          <h2>O que você quer pra hoje? construir um código, deploy do seu projeto, uma colaboração ou até mesmo análise de códigos e projetos </h2>
          <div className='homeimage-info-bottom'>
            <button className='homeimage-info-btn'>Começar</button>
            <div className='homeimage-info-socialmidia'>
              <a target="_blank" href="https://www.instagram.com/portsoftware/"><FaInstagram /></a>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato."><FaWhatsapp /></a>
              <a target="_blank" href="https://github.com/PedroPaulo-Git" ><FaGithub /></a>
              <a target="_blank" href="https://www.linkedin.com/in/pedro-paulodev/" ><FaLinkedin /></a>
            </div>
          </div>

        </div>
        <img className='homeimage' src={HomeImage} alt="" />
      </div>
      <div>
      
      {displayMobile ? <NavMobile toggleMenuOff={toggleMenuOff} /> : null}
        <Services />
        <Project />
        <BackgroundDesign/>
        <Contact />
        <Footer />
      </div>
    </>

  )
}
export default Home