import './Portfolio.css';
import { portfolioCards } from '../../../utils/constant';
import React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

function Portfolio({ className }) {
  return (
    <div className={`portfolio ${className || ''}`.trim()}>
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        {
          portfolioCards.map((card, i) => <PortfolioItem key={i} {...card} className="portfolio__card" />)
        }
      </ul>
    </div>
  )
}

export default Portfolio;
