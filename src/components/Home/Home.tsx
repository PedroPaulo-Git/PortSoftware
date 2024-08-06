import './Home.css'
import { HeaderHome } from '../HeaderHome/HeaderHome'
import HomeImage from '../../assets/homeproject.jpg'
import { Services } from '../Services/Services'
import { Project } from '../Projects/Project'

export const Home = () => {
  return (
    <>
    <div className='home'>
    <HeaderHome/>
    <div className='homeimage-info'>
        <h1>É a hora de construir seu Software conosco</h1>
        <h2>O que você quer pra hoje? construir um código, deploy do seu projeto, uma colaboração ou até mesmo análise de códigos e projetos </h2>
        <button className='homeimage-info-btn'>Começar</button>
    </div>
     <img className='homeimage' src={HomeImage} alt="" />
     </div>
     <div>
        <Services/>
        <Project/>
     </div>
    </>
   
  )
}
export default Home