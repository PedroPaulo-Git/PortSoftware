import './Home.css'
import { HeaderHome } from '../HeaderHome/HeaderHome'
import HomeImage from '../../assets/homeproject.jpg'
import { Services } from '../Services/Services'
import { Project } from '../Projects/Project'
import { Contact } from '../Contact/Contact'
import { Footer } from '../Footer/Footer'

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