import './BackgroundDesign.css';
import Background from '../../assets/backgrounddesign.png'
export const BackgroundDesign = () => {
  return (
    <div>
    <div  className='background' >
    <div className='background-container' >
        <img className='background-image' src={Background} alt="" /> 
        <div className='background-container-content' >
            <div className='background-info' >
              <h1>Vamos Criar Algo Incrível Juntos</h1>
              <div className='background-info-p'>
              <p>Transforme suas ideias em realidade com soluções digitais inovadoras. Crio websites, aplicativos e portfólios sob medida para que seu projeto se destaque no mundo online.</p>
     </div>
                <a href="" className='background-info-button'><button className='background-info-button'>Solicitar atendimento</button></a>
            </div>
        </div>
       
       
    </div>
    </div>
    </div>
  )
}
