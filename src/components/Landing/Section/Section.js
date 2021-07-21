import './Section.css';
import React from 'react';
import TitleSection from '../TitleSection/TitleSection';

function Section({ title, children, classPosition, bookmark }) {
  return (
    <section className={`section ${classPosition}`}>
      <TitleSection title={title} bookmark={bookmark} />
      {children}
    </section>
  )
}

export default Section;
