import './ProjectCard.css';
import React from 'react';

function ProjectCard({ subtitle, description }) {
  return (
    <li className="project-card">
      <h3 className="project-card__subtitle">{subtitle}</h3>
      <p className="project-card__description">{description}</p>
    </li>
  )
}

export default ProjectCard;
