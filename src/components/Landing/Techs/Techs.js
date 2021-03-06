import './Techs.css';
import { techs } from '../../../utils/constant';
import React from 'react';
import TechCard from '../TechCard/TechCard';

function Techs({ className }) {
  return (
    <div className={`tech-cards ${className || ''}`.trim()}>
      <h3 className="tech-cards__title">7 технологий</h3>
      <p className="tech-cards__description">На курсе веб-разработки мы освоили технологии, которые применили в&#160;дипломном&#160;проекте.</p>
      <ul className="tech-cards__list">
        {
          techs.map((tech, i) => <TechCard key={i} tech={tech} />)
        }
      </ul>
    </div>
  )
}

export default Techs;
