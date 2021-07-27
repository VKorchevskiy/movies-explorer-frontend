import './TechCard.css';
import React from 'react';

function TechCard({ tech, className }) {
  return (
    <li className={`tech-card ${className || ''}`.trim()}>
      <p className="tech-card__description">{tech}</p>
    </li>
  )
}

export default TechCard;
