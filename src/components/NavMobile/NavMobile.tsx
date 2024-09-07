import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import './NavMobile.css'

interface NavMobileProps {
  toggleMenuOff: () => void; // Defina o tipo da função
}

export const NavMobile: React.FC<NavMobileProps> = ({ toggleMenuOff }) => {

  return (
    <div className='NavMobile'>

        <div onClick={toggleMenuOff}>
        <IoClose/>
      </div>

   
    <nav>
        <ul>
          <li><a href="#home">Início</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#about">Sobre Nós</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </div>
  )
}
