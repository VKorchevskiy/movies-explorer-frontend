import './PageNotFound.css';
import React from 'react';

function PageNotFound({ className, goBack }) {
  return (
    <div className={`page-not-found ${className || ''}`.trim()}>
      <div className="page-not-found__content">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__text">Страница не найдена</p>
      </div>

      <input className="button page-not-found__button" type="button" onClick={goBack} value="Назад"></input>
    </div>
  )
}

export default PageNotFound;
