import './Section.css';
import React from 'react';
import TitleSection from '../TitleSection/TitleSection';

function Section({ title, children, classPosition }) {
  return (
    <section className={`section ${classPosition}`}>
      <TitleSection title={title} />
      {children}
    </section>
  )
}

export default Section;
