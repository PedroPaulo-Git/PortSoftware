import './Project.css'
export const Project = () => {
    return (
        <div className='project-container'>
            <div className='project-background'>
                <div className='project-background-text'>
                    <span className="sub-title">Portifolio Recente </span>
                    <h1 className='project-background-title'>Confira Meus Projetos Recentemente Concluídos</h1>
                </div>
            </div>
            <div className='project-swiper-container'>

                <div className='project-swiper'>
                    <div className='project-slide project-swiper-wrapper-prev'>

                    </div>

                    <div className='project-slide project-swiper-wrapper-active'>

                    </div>

                    <div className='project-slide project-swiper-wrapper-next'>

                    </div>

                    <div className='project-slide project-swiper-wrapper'>

                    </div>


                </div>

            </div>
        </div>



    )
}
