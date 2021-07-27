import './ProjectCards.css';
import { projectCards } from '../../../utils/constant';
import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

function ProjectCards({ className }) {
  return (
    <ul className={`project-cards ${className ||''}`.trim()}>
      {
        projectCards.map((card, i) => <ProjectCard key={i} subtitle={card.subtitle} description={card.description} />)
      }
    </ul>
  )
}

export default ProjectCards;
