import React from 'react'
import './Header.css'
import Logo from '../logo/Logo'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
              <div className='logo'>
                    <Logo/>
                </div>
            <div className='navbar'>
              <ul>
                
                <Link to="/">
                  <li><a href="">Accueil</a></li> 
                </Link>

                <Link to="/inscription">
                   <li><a href="">Inscription</a></li>  
                </Link>
                
              </ul>
            </div>
        </div>
    )
}

export default Header
