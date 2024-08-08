import './Footer.css'
export const Footer = () => {
    return (

        <div className='footer-container'>
            <div className='footer'>

                <div className='footer-content'>
                    <span className='footer-content-title'>Sobre</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam a saepe, illum  omnis quisquam enim tenetur quae magnam.</p>
                </div>
                <div className='footer-content'>
                <span className='footer-content-title'>Explore</span>
                    <ul>
                        <li>Sobre</li>
                        <li>Contato</li>
                        <li>Companhia</li>
                        <li>Nossos Projetos</li>
                    </ul>
                </div>
                <div className='footer-content'>
                <span className='footer-content-title'>Sobre</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam a saepe, illum  omnis quisquam enim tenetur quae magnam.</p>
                </div>
                <div className='footer-content footer-content-contact'>
                <span className='footer-content-title'>Contato</span>
                    <p>Vertentes-PE</p>
                    <p>Pernambuco,Brasil</p>
                    <span><p>receberpedro09@gmail.com</p></span>
                    <span><p>+55 (81) 99904-9803</p></span>
                </div>

            </div>
            <hr />
            <div className='footer-copy'>
            <span>&copy; 2024 Your Company Name. All rights reserved.</span>
            </div>
        </div>
    )
}
