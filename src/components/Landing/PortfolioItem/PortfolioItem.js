import './PortfolioItem.css';
import React from 'react';

function PortfolioItem({ description, link }) {
  return (
    <li className="portfolio-item">
      <p className="portfolio-item__description">{description}</p>
      <a className="portfolio-item__link" href={`${link}`} target="_blank" rel="noreferrer">&#8599;</a>
    </li>
  )
}

export default PortfolioItem;
