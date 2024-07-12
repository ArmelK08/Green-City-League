import React, { useState } from 'react';
import styles from './Header.module.css'; 
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.header}> 
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li>
            <Link to='/'>
              <a href=''>Accueil</a>
            </Link>
          </li>
          <li>
            <Link to='/inscription'>
              <a href=''>Inscription</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles['menu-icon']} onClick={toggleMenu}>
        &#9776; {/* Icône hamburger */}
      </div>
    </div>
  );
}

export default Header;
