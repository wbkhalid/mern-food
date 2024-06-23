import './navbar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home')
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <Link to='/' className={menu === 'home' ? 'active' : ''} onClick={() => setMenu('home')}>Home</Link>
        <a href='#explore-menu' className={menu === 'menu' ? 'active' : ''} onClick={() => setMenu('menu')}>Menu</a>
        <a href='#footer' className={menu === 'contact-us' ? 'active' : ''} onClick={() => setMenu('contact-us')}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="backet-icon" />
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default NavBar
