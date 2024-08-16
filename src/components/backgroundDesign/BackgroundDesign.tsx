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


            </div>
        </div>
       
       
    </div>
    </div>
    </div>
  )
}
