import { useEffect, useState } from 'react'

import './Project.css'
import ProjectIdeal from '../../assets/Ideal.png'
import ProjectIdealbackground from '../../assets/project-1.jpg'

import ProjectPort from '../../assets/portfoliio.png'
import ProjectPortbackground from '../../assets/project-2.jpg'


import ProjectPortbackground2 from '../../assets/project-3.jpg'

import BackgroundProject from '../../assets/background.png'

export const Project = () => {
    const slideLeft = () => {
        const slideWrapper: HTMLElement = document.querySelector('.project-swiper')!;
        let slides: NodeListOf<HTMLElement> = document.querySelectorAll('.project-slide');
        const slideWidth = slides[0].offsetWidth + 0; // Largura de um slide mais a margem
        let index = 0;

        if (slides.length === 0) {
            console.error("No slides found.");
            return;
        }

        const moveSlide = () => {
            console.log(slides[1])
            // Mova o contêiner do swiper
                slides[1].style.transition = "opacity 1s ease, transform 1s ease";
                slides[1].style.transform = `translateX(-${slideWidth}px)`;
                slides[1].style.opacity = "0";

            // Verifica se é o último slide e reposiciona o primeiro no final para criar o loop infinito
            if (index >= slides.length) {
                setTimeout(() => {
                    slideWrapper.style.transition = "transform 1s ease";
                    slideWrapper.style.transform = `translateX(0px)`;

                }, 500); // O tempo deve corresponder à duração da transição
            }
            setTimeout(() => {
                slideWrapper.style.transform = `translateX(0px)`;
            
                setTimeout(() => {
                    
                    slideWrapper.appendChild(slides[0]); // Move o primeiro slide para o final
                    slides[0].style.transform = `translateX(350px)`;
                    slides[0].style.opacity = "0";
                    setTimeout(() => {
                        slideWrapper.style.transition ="transform 1s ease";
                        slideWrapper.style.transform = `translateX(0px)`;
                        slideWrapper.style.transitionDuration = '300ms';
                    }, 100)

                }, 400)
                setTimeout(() => {
                    slides[0].style.transition ="transform 1s ease";
                    slides[0].style.transform = `translateX(0px)`;
                    slides[0].style.opacity = "1";
                }, 500)      
                slides[0].style.transform = `translateX(0px)`;


                // Reseta a posição do slideWrapper
                slides = document.querySelectorAll('.project-slide');
            }, 200); // O tempo deve corresponder à duração da transição

        };

        // Chama a função de movimento continuamente
        setInterval(moveSlide, 3000); // Desliza a cada 2 segundos
    };


    window.addEventListener('load', slideLeft);
    useEffect(() => {
        slideLeft();

    })
    return (
        <div id='projets' className='project-container'>
            <div className='project-background'>
                <img className='project-background-img' src={BackgroundProject} alt="" />
                <div className='project-background-text'>
                    <span className="sub-title">Portifolio Recente </span>
                    <h1 className='project-background-title'>Confira Meus Projetos Recentemente Concluídos</h1>
                </div>
            </div>
            <div className='project-swiper-container'>

                <div className='project-swiper'>

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
                        <img className='project-slide-img-background' src={ProjectPortbackground2} alt="" />
                        <img className='project-slide-img' src={ProjectPort} alt="" />
                        <div className='project-slide-bottom' >
                            <div className='project-slide-bottom-text'>
                                <span className='project-slide-bottom-subtitle'>WebSite 2</span>
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
                    {/* <div className='project-slide '>
                        <img className='project-slide-img-background' src={ProjectIdealbackground} alt="" />
                        <img className='project-slide-img' src={ProjectIdeal} alt="" />
                        <div className='project-slide-bottom' >
                            <div className='project-slide-bottom-text'>
                                <span className='project-slide-bottom-subtitle'>WebSite 4</span>
                                <span className='project-slide-bottom-title'>Desenvolvido Para Restaurantes</span>
                            </div>
                        </div>
                    </div> */}

                </div>

            </div>

        </div>



    )
}

