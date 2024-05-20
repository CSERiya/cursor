import React from 'react'
import './Header.css'
import logo from '../Images/envatomarket-logo1.png'

const Header = () => {
  return (
    <>
    <div className='header'>
        <img className='logo' src={logo} alt='logo'/>
    <button className='buy'>Buy now</button>
    </div>
    </>
  )
}

export default Header
