import './Logo.css';
import { logo } from '../../utils/constant';
import React from 'react';
import { Link } from 'react-router-dom';

function Logo({ className }) {
  return (
    <Link className={`logo ${className || ''}`.trim()} to="/">
      <img src={logo} alt="Логотип." className="logo__img" />
    </Link>
  )
}

export default Logo;
