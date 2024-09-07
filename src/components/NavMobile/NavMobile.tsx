import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import './NavMobile.css'

interface NavMobileProps {
  toggleMenuOff: () => void; // Defina o tipo da função
}

export const NavMobile: React.FC<NavMobileProps> = ({ toggleMenuOff }) => {
  const [arrowService, setArrowService] = useState(false)

  const toggleArrow = () => {
    setArrowService(!arrowService);
  };
  return (
    <div className='NavMobile'>

      <div className='close-icon' onClick={toggleMenuOff}>
        <IoClose />
      </div>


      <nav className='navmobile-nav'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li className='navbar-li-services'><a href="#services">Serviços</a>  
           <span onClick={toggleArrow}>
            {arrowService ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span> 
          </li>
          {arrowService && (
          <ul className='submenu' style={{marginTop:-10}}>
            <li><a href="#services" >Websites</a></li>
            <li><a href="#services">e-commerce</a></li>
            <li><a href="#services">landing pages</a></li>
          </ul>
        )}
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
          <li><a href="#footer">Sobre Nós</a></li>
        </ul>
      </nav>
    </div>
  )
}
