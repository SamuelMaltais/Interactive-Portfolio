import React from 'react';
import "./Navbar.css"
import "./Hamburger.css"
import { pushRotate as Menu } from 'react-burger-menu'
import ContactLinks from './components/ContactLinks';
import logoImage from './images/dog.jpg'

function Navbar() {
    return ( 
        <div className="navbar-container">
            
            <label className='name-logo'>
                <img src={logoImage}
                    height={50}
                    width={50}
                    alt=''
                ></img>
                <div>
                <b>SAMUEL</b><br></br>MALTAIS
                </div>
            </label>

            <div className='navbar-links'>
            
            <a>Home</a>
            <a>Projects & Interships</a>
            <a>Skills</a>
            <a>About me</a>
            </div>
            <Menu className='hamburger-menu' right width={300} noOverlay>
            <a className='menu-item'>Home</a>
            <a className='menu-item'>Projects & Interships</a>
            <a className='menu-item'>Skills</a>
            <a className='menu-item'>About me</a>
            <ContactLinks />
            </Menu>
            <ContactLinks />
        </div>
     );
}

export default Navbar;