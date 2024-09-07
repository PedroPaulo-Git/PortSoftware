import React from 'react';
import { IoClose } from "react-icons/io5";
import './NavMobile.css'

interface NavMobileProps {
  toggleMenuOff: () => void; // Defina o tipo da função
}

export const NavMobile: React.FC<NavMobileProps> = ({ toggleMenuOff }) => {

  return (
    <div className='NavMobile'>

        <div className='close-icon' onClick={toggleMenuOff}>
        <IoClose/>
      </div>

   
    <nav className='navmobile-nav'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Serviços</a> </li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
          <li><a href="#footer">Sobre Nós</a></li>
        </ul>
      </nav>
    </div>
  )
}
