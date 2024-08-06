import './Services.css'
import UxDesign from '../../assets/web-design.svg';
import AppDev from '../../assets/app-development.svg';
import Coding from '../../assets/coding.svg';
import Data from '../../assets/data.svg';
import Analyse from '../../assets/coding-data-development-svgrepo-com.svg';

export const Services = () => {
    return (
        <>
            <div className='services'>
                <div className='services-title-container'>
                    <div className='services-title-left'>
                        <span className="sub-title">O que Nós Temos a Oferecer</span>
                        <h1 className='services-title'>Temos Exatamente o Serviço que Você Precisa para seu Negócio !</h1>
                    </div>
                    <div className='services-title-right'>
                        <span className='services-title-right-span'></span>
                        <p className='services-subtitle'>Lorem ipsum, dolor eos numquam. Sit fugiat maiores doloremque vitae quam autem? Excepturi voluptate quas vel.</p>
                    </div>
                </div>
                <div className='services-content-container'>
                    <div className='services-content'>
                    <p className='services-content-title' style={{margin:0,zIndex:1}}>UI/UX Designs Criativos</p><br></br>
                    <span className='services-content-circlestylebackground'></span>
                    <span className='services-content-background'></span>
                        <img className='services-content-icon' id='svg1' src={UxDesign} alt="" />
                        <p className='p-services-learn-more' style={{marginTop:10}}>Encontrar Mais</p>
                        
                    </div>
                    <div className='services-content'>
                    <p className='services-content-title' style={{margin:0,zIndex:1}}>Design e Desenvolvimento de Aplicativos Móveis</p>
                    <span className='services-content-circlestylebackground'></span>
                     <span className='services-content-background'></span>
                        <img className='services-content-icon' id='svg1' src={AppDev} alt="" />
                        <p className='p-services-learn-more' style={{marginTop:10}}>Encontrar Mais</p>
                        
                        
                    </div>
                    <div className='services-content'>
                    <p className='services-content-title' style={{margin:0,zIndex:1}}>Desenvolvimento de Websites e Portais Web</p>
                    <span className='services-content-circlestylebackground'></span>
                     <span className='services-content-background'></span>
                        <img className='services-content-icon' id='svg1' src={Coding} alt="" />
                        <p className='p-services-learn-more' style={{marginTop:10}}>Encontrar Mais</p>
                        
                        
                    </div>
                    <div className='services-content'>
                    <p className='services-content-title' style={{margin:0,zIndex:1}}>Análise de Dados e Business Intelligence (BI)</p>
                    <span className='services-content-circlestylebackground'></span>
                     <span className='services-content-background'></span>
                        <img className='services-content-icon' id='svg1' src={Analyse} alt="" />
                        <p className='p-services-learn-more' style={{marginTop:10}}>Encontrar Mais</p>
                        
                    </div>
                    <div className='services-content'>
                    <p className='services-content-title' style={{margin:0,zIndex:1}}>Serviços de Qualidade e Testes de Software</p><br></br>
                    <span className='services-content-circlestylebackground'></span>
                     <span className='services-content-background'></span>
                        <img className='services-content-icon' id='svg1' src={Data} alt="" />
                        <p className='p-services-learn-more' style={{marginTop:10}}>Encontrar Mais</p>
                        
                    </div>
                </div>
            </div>

        </>
    )
}
