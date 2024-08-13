import './Home.css'
import { HeaderHome } from '../HeaderHome/HeaderHome'
import HomeImage from '../../assets/homeproject.jpg'
import { Services } from '../Services/Services'
import { Project } from '../Projects/Project'
import { Contact } from '../Contact/Contact'
import { Footer } from '../Footer/Footer'

import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export const Home = () => {
  return (
    <>
      <div className='home'>
        <HeaderHome />
        <div className='homeimage-info'>
          <h1>É a Hora de Construir seu Software Conosco</h1>
          <h2>O que você quer pra hoje? construir um código, deploy do seu projeto, uma colaboração ou até mesmo análise de códigos e projetos </h2>
          <div className='homeimage-info-bottom'>
            <button className='homeimage-info-btn'>Começar</button>
            <div className='homeimage-info-socialmidia'>
              <a href="http://www.google.com"><FaInstagram /></a>
              <a href=""><FaWhatsapp /></a>
              <a href=""><FaGithub /></a>
              <a href=""><FaLinkedin /></a>
            </div>
          </div>

        </div>
        <img className='homeimage' src={HomeImage} alt="" />
      </div>
      <div>
        <Services />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>

  )
}
export default Home