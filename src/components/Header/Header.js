import './Header.css';
import React from 'react';
import logo from '../../images/logo/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <img src={logo} alt="Логотип." className="header__logo" />
      </Link>
      <button className="header__menu-button"></button>
      <Navigation isNavigationOpen={false} />
    </header>
  )
}

export default Header;
