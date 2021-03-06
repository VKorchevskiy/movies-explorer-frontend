import './Header.css';
import React, { useContext } from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IsLoggedInContext } from '../../contexts/IsLoggedInContext';

function Header({ className }) {
  const isLoggedIn = useContext(IsLoggedInContext);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const handleOpenHeaderMenu = () => setIsNavigationOpen(true);
  const handleCloseHeaderMenu = () => setIsNavigationOpen(false);

  return (
    <header className={`header ${className || ''}`.trim()}>
      <Logo className="header__logo" />

      {isLoggedIn ?
        <>
          <button className="button header__menu-button" aria-label="Редактировать" onClick={handleOpenHeaderMenu}></button>
          <Navigation isOpen={isNavigationOpen} onClose={handleCloseHeaderMenu} />
        </>
        :
        <div className="header__container">
          <Link className="link header__link header__link_signup" to="signup">Регистрация</Link>
          <Link className="link header__link header__link-signin" to="signin">Войти</Link>
        </div>
      }

    </header>
  )
}

export default Header;
