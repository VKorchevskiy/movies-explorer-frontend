import './TechCard.css';
import React from 'react';

function TechCard({ tech }) {
  return (
    <li className="tech-card">
      <p className="tech-card__description">{tech}</p>
    </li>
  )
}

export default TechCard;
