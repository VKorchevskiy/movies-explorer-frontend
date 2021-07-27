import './TitleSection.css';
import React from 'react';

function TitleSection({ title, bookmark, className }) {
  return (
    <h2 id={bookmark} className={`title ${className || ''}`.trim()}>{title}</h2>
  )
}

export default TitleSection;
