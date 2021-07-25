import './Header.css';
import React from 'react';
import logo from '../../images/logo/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';

function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const handleOpenHeaderMenu = () => setIsNavigationOpen(true);
  const handleCloseHeaderMenu = () => setIsNavigationOpen(false);

  return (
    <header className="header">
      <Link className="header__link" to="/">
        <img src={logo} alt="Логотип." className="header__logo" />
      </Link>
      <button className="header__menu-button" aria-label="Редактировать" onClick={handleOpenHeaderMenu}></button>
      <Navigation isOpen={isNavigationOpen} onClose={handleCloseHeaderMenu} />
    </header>
  )
}

export default Header;
