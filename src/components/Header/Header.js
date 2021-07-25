import './Header.css';
import React from 'react';
import logo from '../../images/logo/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <img src={logo} alt="Логотип." className="header__logo" />
      </Link>

      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink className="header__nav-link" activeClassName="header__nav-link_active" to="movies">Фильмы</NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__nav-link" activeClassName="header__nav-link_active" to="saved-movies">Сохранённые&#160;фильмы</NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__nav-link" activeClassName="header__nav-link_active" to="profile">
              Аккаунт<span className="header__profile-icon"></span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className="header__menu-button"></button>
      <Navigation isNavigationOpen={false} />
    </header>
  )
}

export default Header;
