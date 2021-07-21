import './NavTab.css';
import React from 'react';

function NavTab() {
  return (
    <ul className="nav-tab">
      <li className="nav-tab__item"><a className="nav-tab__link" href="#about-project" rel="noreferrer">О проекте</a></li>
      <li className="nav-tab__item"><a className="nav-tab__link" href="#techs" rel="noreferrer">Технологии</a></li>
      <li className="nav-tab__item"><a className="nav-tab__link" href="#student" rel="noreferrer">Студент</a></li>
    </ul>
  )
}

export default NavTab;
