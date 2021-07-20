import './Section.css';
import React from 'react';
import TitleSection from '../TitleSection/TitleSection';

function Section({ title, children }) {
  return (
    <section className="section">
      <TitleSection title={title} />
      {children}
    </section>
  )
}

export default Section;
