import './navbar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
const NavBar = () => {
  const [menu, setMenu] = useState('home')
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <li className={menu === 'home' ? 'active' : ''} onClick={()=>setMenu('home')}>Home</li>
        <li className={menu === 'menu' ? 'active' : ''} onClick={()=>setMenu('menu')}>Menu</li>
        <li className={menu === 'mobile-app' ? 'active' : ''} onClick={()=>setMenu('mobile-app')}>Mobile App</li>
        <li className={menu === 'contact-us' ? 'active' : ''} onClick={()=>setMenu('contact-us')}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="backet-icon" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default NavBar
