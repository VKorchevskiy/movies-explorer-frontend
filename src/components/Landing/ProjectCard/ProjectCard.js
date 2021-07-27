import './ProjectCard.css';
import React from 'react';

function ProjectCard({ subtitle, description, className }) {
  return (
    <li className={`project-card ${className || ''}`.trim()}>
      <h3 className="project-card__subtitle">{subtitle}</h3>
      <p className="project-card__description">{description}</p>
    </li>
  )
}

export default ProjectCard;
