import './ProjectCards.css';
import { projectCards } from '../../../utils/constant';
import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

function ProjectCards({ classPosition }) {
  return (
    <ul className={`project-cards ${classPosition}`}>
      {
        projectCards.map((card, i) => <ProjectCard key={i} subtitle={card.subtitle} description={card.description} />)
      }
    </ul>
  )
}

export default ProjectCards;
