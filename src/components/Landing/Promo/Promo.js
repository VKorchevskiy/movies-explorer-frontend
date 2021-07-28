import './Promo.css';
import React from 'react';

function Promo({ className }) {
  return (
    <section className={`promo ${className || ''}`.trim()}>
      <h1 className="promo__title">Учебный проект студента&#160;факультета Веб-разработки.</h1>
    </section>
  )
}

export default Promo;
