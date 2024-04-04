import { useState } from 'react'
import { Link } from 'wouter'
import './styles/navbar.css'

export const NavbarComponent = () => {
  const [menuClass, setMenuClass] = useState('topnav');

  const getResponsiveMenu = () => {
    setMenuClass(prevClass => 
      prevClass === 'topnav' ? prevClass + ' responsive' : 'topnav'
    );
  }

  return (
    <div className={menuClass} id='myTopnav'>      
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <a href="javascript:void(0)" className='icon' onClick={getResponsiveMenu}>
        <i className='fa fa-bars'></i>
      </a>
    </div>
  )
}
