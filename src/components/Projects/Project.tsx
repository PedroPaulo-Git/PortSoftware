import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Project.css'
import ProjectIdeal from '../../assets/Ideal.png'
import ProjectIdealbackground from '../../assets/project-1.jpg'

import ProjectPort from '../../assets/portfoliio.png'
import ProjectPortbackground from '../../assets/project-2.jpg'

import BackgroundProject from '../../assets/background.png'

export const Project = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,
        slidesToScroll:1,
        autoplaySpeed: 3000,
        touchMove:false,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
  };
    return (
        <div id='projects' className='project-container'>
            <div>
                <div className='project-background'>
                    <img className='project-background-img' src={BackgroundProject} alt="" />
                    <div className='project-background-text'>
                        <span className="sub-title">Portifolio Recente </span>
                        <h1 className='project-background-title'>Confira Meus Projetos Recentemente Concluídos</h1>
                    </div>
                </div>

            </div>

            <div className="slider-container">
                <Slider {...settings}>
                    <div className='project-slide '>
                        <img className='project-slide-img-background' src={ProjectIdealbackground} alt="" />
                        <img className='project-slide-img' src={ProjectIdeal} alt="" />
                        <div className='project-slide-bottom' >
                            <div className='project-slide-bottom-text'>
                                <span className='project-slide-bottom-subtitle'>e-commerce</span>
                                <span className='project-slide-bottom-title'>Desenvolvido Para Restaurantes</span>
                            </div>
                        </div>
                    </div>

                    <div className='project-slide '>
                        <img className='project-slide-img-background' src={ProjectPortbackground} alt="" />
                        <img className='project-slide-img' src={ProjectPort} alt="" />
                        <div className='project-slide-bottom' >
                            <div className='project-slide-bottom-text'>
                                <span className='project-slide-bottom-subtitle'>Web Site 1</span>
                                <span className='project-slide-bottom-title'>Criação de Portfolio Pessoal</span>
                            </div>
                        </div>
                    </div>
                    <div className='project-slide '>
                        <img className='project-slide-img-background' src={ProjectIdealbackground} alt="" />
                        <img className='project-slide-img' src={ProjectIdeal} alt="" />
                        <div className='project-slide-bottom' >
                            <div className='project-slide-bottom-text'>
                                <span className='project-slide-bottom-subtitle'>e-commerce</span>
                                <span className='project-slide-bottom-title'>Desenvolvido Para Restaurantes</span>
                            </div>
                        </div>
                    </div>

                   
                    <div className='project-slide '>
                        <img className='project-slide-img-background' src={ProjectIdealbackground} alt="" />
                        <img className='project-slide-img' src={ProjectIdeal} alt="" />
                        <div className='project-slide-bottom' >
                            <div className='project-slide-bottom-text'>
                                <span className='project-slide-bottom-subtitle'>WebSite 3</span>
                                <span className='project-slide-bottom-title'>Desenvolvido Para Restaurantes</span>
                            </div>
                        </div>
                    </div>
                    <div className='project-slide '>
                        <img className='project-slide-img-background' src={ProjectIdealbackground} alt="" />
                        <img className='project-slide-img' src={ProjectIdeal} alt="" />
                        <div className='project-slide-bottom' >
                            <div className='project-slide-bottom-text'>
                                <span className='project-slide-bottom-subtitle'>e-commerce</span>
                                <span className='project-slide-bottom-title'>Desenvolvido Para Restaurantes</span>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>


    )
}

