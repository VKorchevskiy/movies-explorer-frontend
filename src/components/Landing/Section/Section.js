import './Section.css';
import React from 'react';
import TitleSection from '../TitleSection/TitleSection';

function Section({ title, children, className, bookmark }) {
  return (
    <section className={`section ${className || ''}`.trim()}>
      <TitleSection title={title} bookmark={bookmark} />
      {children}
    </section>
  )
}

export default Section;
