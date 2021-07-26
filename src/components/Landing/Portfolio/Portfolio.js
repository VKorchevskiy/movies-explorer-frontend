import './Portfolio.css';
import { portfolioCards } from '../../../utils/constant';
import React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

function Portfolio({classPosition}) {
  return (
    <div className={`portfolio ${classPosition}`}>
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        {
          portfolioCards.map((card, i) => <PortfolioItem key={i} {...card} />)
        }
      </ul>
    </div>
  )
}

export default Portfolio;
