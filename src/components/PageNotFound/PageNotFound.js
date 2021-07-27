import './PageNotFound.css';
import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound({ className }) {
  return (
    <div className={`page-not-found ${className || ''}`.trim()}>
      <div className="page-not-found__content">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__text">Страница не найдена</p>
      </div>


      <Link to="signin" className="link page-not-found__link">Назад</Link>
    </div>
  )
}

export default PageNotFound;
