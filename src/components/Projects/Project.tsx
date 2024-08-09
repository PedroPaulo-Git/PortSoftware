import './Project.css'
import ProjectIdeal from '../../assets/Ideal.png'
import ProjectIdealbackground from '../../assets/project-1.jpg'

import ProjectPort from '../../assets/portfoliio.png'
import ProjectPortbackground from '../../assets/project-2.jpg'


import ProjectPortbackground2 from '../../assets/project-3.jpg'

import BackgroundProject from '../../assets/background.png'
export const Project = () => {
    return (
        <div className='project-container'>
            <div className='project-background'>
                <img className='project-background-img' src={BackgroundProject} alt="" />
                <div className='project-background-text'>
                    <span className="sub-title">Portifolio Recente </span>
                    <h1 className='project-background-title'>Confira Meus Projetos Recentemente Concluídos</h1>
                </div>
            </div>
            <div className='project-swiper-container'>

                <div className='project-swiper'>
                    
                    <div className='project-slide project-swiper-wrapper-prev'>
                    <img className='project-slide-img-background' src={ProjectIdealbackground} alt="" />
                        <img className='project-slide-img' src={ProjectIdeal} alt="" />
                        <div className='project-slide-bottom' >
                            <div className='project-slide-bottom-text'>
                                <span className='project-slide-bottom-subtitle'>e-commerce</span>
                                <span  className='project-slide-bottom-title'>Desenvolvido Para Restaurantes</span>
                            </div>
                        </div>
                    </div>

                    <div className='project-slide project-swiper-wrapper-active'>
                    <img className='project-slide-img-background' src={ProjectPortbackground} alt="" />
                        <img className='project-slide-img' src={ProjectPort} alt="" />
                        <div className='project-slide-bottom' >
                            <div className='project-slide-bottom-text'>
                                <span className='project-slide-bottom-subtitle'>Web Site</span>
                                <span  className='project-slide-bottom-title'>Criação de Portfolio Pessoal</span>
                            </div>
                        </div>
                    </div>

                    <div className='project-slide project-swiper-wrapper-next'>
                    <img className='project-slide-img-background' src={ProjectPortbackground2} alt="" />
                        <img className='project-slide-img' src={ProjectPort} alt="" />
                        <div className='project-slide-bottom' >
                            <div className='project-slide-bottom-text'>
                                <span className='project-slide-bottom-subtitle'>WebSite</span>
                                <span  className='project-slide-bottom-title'>Desenvolvido Para Restaurantes</span>
                            </div>
                        </div>
                    </div>

                    <div className='project-slide project-swiper-wrapper'>
                    <img className='project-slide-img-background' src={ProjectIdealbackground} alt="" />
                        <img className='project-slide-img' src={ProjectIdeal} alt="" />
                        <div className='project-slide-bottom' >
                            <div className='project-slide-bottom-text'>
                                <span className='project-slide-bottom-subtitle'>WebSite</span>
                                <span  className='project-slide-bottom-title'>Desenvolvido Para Restaurantes</span>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
   
        </div>



    )
}
