import Logo from '../../assets/PortICON.png'
import './HeaderHome.css'

export const HeaderHome = () => {
  return (
    <div className='headerhome'>
      <div className='header'>
      <img className='headerhome-logo' src={Logo} alt="" />
      <div className='header-mid'>


      </div>
      <div className='header-right'>
      <ul>
        <li>Home</li>
        <li>Serviços</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>

      </div>

      </div>
    </div>
  )
}
