import './TitleSection.css';
import React from 'react';

function TitleSection({ title, bookmark }) {
  return (
    <h2 id={bookmark} className="title">{title}</h2>
  )
}

export default TitleSection;
