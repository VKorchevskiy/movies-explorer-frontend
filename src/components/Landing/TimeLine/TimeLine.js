import './TimeLine.css';
import React from 'react';

function TimeLine({ classPosition }) {
  return (
    <div className={`time-line ${classPosition}`}>
      <p className="time-line__text time-line__text_time time-line__text_time_backend">1 неделя</p>
      <p className="time-line__text time-line__text_time time-line__text_time_frontend">4 недели</p>
      <p className="time-line__text time-line__text_time_description">Back-end</p>
      <p className="time-line__text time-line__text_time_description">Front-end</p>
    </div>
  )
}

export default TimeLine;
