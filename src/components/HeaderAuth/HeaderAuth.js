import './HeaderAuth.css';
import React from 'react';
import Logo from '../Logo/Logo';

function HeaderAuth({ className, title }) {
  return (
    <header className={`header-auth ${className || ''}`.trim()}>
      <Logo className="header-auth__logo" />
      <h2 className={`header-auth__title`}>{title}</h2>
    </header>
  )
}

export default HeaderAuth;
