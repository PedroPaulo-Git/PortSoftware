import './Services.css'
import UxDesign from '../../assets/web-design.svg';
import AppDev from '../../assets/app-development.svg';
import Coding from '../../assets/coding.svg';
import Data from '../../assets/data.svg';
import Analyse from '../../assets/coding-data-development-svgrepo-com.svg';
import Background from '../../assets/backgroundservices.jpg';

export const Services = () => {
    return (
        <>
            <div id='services' className='services'>
            <img className='services-content-background-image' src={Background} alt="" />
            <div className='services-container'>
                <div className='services-title-container'>
                    <div className='services-title-left'>
                        <span className="sub-title">O que Nós Temos a Oferecer</span>
                        <h1 className='services-title'>Temos Exatamente o Serviço que Você Precisa para seu Negócio !</h1>
                    </div>
                    <div className='services-title-right'>
                        <span className='services-title-right-span'></span>
                        <p className='services-subtitle'>Ofereço serviços de desenvolvimento web e mobile, como criação de websites, portfólios, aplicativos e portais web. Entrego soluções personalizadas e inovadoras para suas necessidades digitais.</p>
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
                <div className='services-bottom-container'>
                        <div className='services-bottom'>
                            <h3 className='services-bottom-text'>Precisa de uma Solução Digital ou Software para seu Negócio? <h3 className='services-bottom-text'>   <a className='services-bottom-text' href="https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato." target='blank'>Envie uma Solicitação Agora</a>  </h3></h3>
                            <a href='#contact' className='services-bottom-btn'><span className='services-bottom-btn-background'></span><span className='services-bottom-btn-text'>Saber Mais</span></a>
                        </div>
                    </div>
                    </div>
            </div>

        </>
    )
}
