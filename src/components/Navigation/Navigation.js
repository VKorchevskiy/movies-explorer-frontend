import './Navigation.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation({ isNavigationOpen }) {
  return (
    <nav className={`navigation ${isNavigationOpen ? 'navigation_active' : ''}`}>
      <ul className={`navigation__list ${isNavigationOpen ? 'navigation__list_active' : ''}`}>
        <li className="navigation__item navigation__item_main">
          <NavLink className="navigation__link" activeClassName="navigation__link_active" to="/" exact>Главная</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" activeClassName="navigation__link_active" to="movies">Фильмы</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" activeClassName="navigation__link_active" to="saved-movies">Сохранённые&#160;фильмы</NavLink>
        </li>
        <li className="navigation__item navigation__item_profile">
          <NavLink className="navigation__link navigation__link_profile" activeClassName="navigation__link_active navigation__link_profile_active" to="profile">
            Аккаунт<span className="navigation__profile-icon"></span>
          </NavLink>
        </li>
      </ul>
      <button className="navigation__close"></button>
    </nav >
  )
}

export default Navigation;
