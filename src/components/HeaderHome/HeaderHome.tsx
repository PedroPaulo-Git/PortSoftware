import { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/PortICON.png'
import { MdOutlineMenu } from "react-icons/md";
import './HeaderHome.css'

export const HeaderHome = () => {

  const [isHomeLinkHovered, setIsHomeLinkHovered] = useState(true);
  const [isSkillsLinkHovered, setIsSkillsLinkHovered] = useState(false);
  const [isContactLinkHovered, setIsContactLinkHovered] = useState(false);
  const [isProjectLinkHovered, setIsProjectLinkHovered] = useState(false);


  const [displayMobile, setDisplayMobile] = useState(false);

  // const [backToTop, setBackToTop] = useState(false)


  // useEffect(() => {
  //   const handleScroll = () => {
  //     const windowHeight = window.innerHeight;
  //     const scrollY = window.scrollY;
  //     const scrollHeight = document.body.scrollHeight;

  //     if (scrollHeight - scrollY - windowHeight < 100) {
  //       setBackToTop(true);
  //     } else {
  //       setBackToTop(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  return (
    <div className='headerhome'>
      <div className='header'>
        <img className='headerhome-logo' src={Logo} alt="" />
        <div className='header-mid'>


        </div>
        <div className='header-right'>
          <ul>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-220}
              duration={500}
              className={`${isHomeLinkHovered ? 'link_nav active ' : ''}`}
              onMouseEnter={() => {

                setIsHomeLinkHovered(true);
                setIsProjectLinkHovered(false);
                setIsSkillsLinkHovered(false);
                setIsContactLinkHovered(false);
              }

              }
              onMouseLeave={() => setIsHomeLinkHovered(true)}
            >
              <span className='headerNav '>Home</span>
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              to="services"
              className={`link_nav ${isSkillsLinkHovered ? 'link_nav active' : ''}`}
              onMouseEnter={() => {
                setIsHomeLinkHovered(false);
                setIsProjectLinkHovered(false);
                setIsSkillsLinkHovered(true);
                setIsContactLinkHovered(false)
              }}
              onMouseLeave={() => setIsSkillsLinkHovered(true)}
            >
              <span className='headerNav'>Serviços</span>
            </Link>

            <Link
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              to="projets"
              className={`link_nav ${isProjectLinkHovered ? 'link_nav active' : ''}`}
              onMouseEnter={() => {
                setIsProjectLinkHovered(true);
                setIsContactLinkHovered(false);
                setIsSkillsLinkHovered(false);
                setIsHomeLinkHovered(false);

              }
              }
              onMouseLeave={() => setIsProjectLinkHovered(true)}
            >
              <span className='headerNav'>Projetos</span>
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              to="contact"
              className={`link_nav ${isContactLinkHovered ? 'link_nav active' : ''}`}
              onMouseEnter={() => {
                setIsContactLinkHovered(true);
                setIsProjectLinkHovered(false);
                setIsSkillsLinkHovered(false);
                setIsHomeLinkHovered(false);

              }
              }
              onMouseLeave={() => setIsContactLinkHovered(true)}
            >
              <span className='headerNav'>Contato</span>
            </Link>
          </ul>

        </div>

      </div>
      
      <div className='header-mobile'>
      <img className='headerhome-logo' src={Logo} alt="" />
<div onChange={() => setDisplayMobile(true)}>
  <MdOutlineMenu />
</div>

      
      </div>
    </div>
  )
}
