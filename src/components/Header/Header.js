import './Header.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { useState } from 'react';

function Header({ className }) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const handleOpenHeaderMenu = () => setIsNavigationOpen(true);
  const handleCloseHeaderMenu = () => setIsNavigationOpen(false);

  return (
    <header className={`header ${className}`.trim()}>
      <Logo className="header__logo" />
      <button className="header__menu-button" aria-label="Редактировать" onClick={handleOpenHeaderMenu}></button>
      <Navigation isOpen={isNavigationOpen} onClose={handleCloseHeaderMenu} />
    </header>
  )
}

export default Header;
