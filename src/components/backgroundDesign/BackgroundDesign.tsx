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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quos facilis nisi nulla deleniti vero minus neque porro quo? Libero, doloremque in.</p>
              </div>
                <a href="" className='background-info-button'><button className='background-info-button'>Solicitar atendimento</button></a>
            </div>
        </div>
       
       
    </div>
    </div>
    </div>
  )
}