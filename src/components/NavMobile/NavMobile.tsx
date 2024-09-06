import React, { useState } from 'react';
import './NavMobile.css'

export const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='NavMobile'>
    <nav className={`nav-side ${isOpen ? 'open' : ''}`}>
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
