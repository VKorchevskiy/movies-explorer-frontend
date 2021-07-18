import './PageNotFound.css';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="page-not-found app__page-not-found">
      <div className="page-not-found__content">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__text">Страница не найдена</p>
      </div>


      <Link to="sign-in" className="page-not-found__link">Назад</Link>
    </div>
  )
}

export default PageNotFound;
