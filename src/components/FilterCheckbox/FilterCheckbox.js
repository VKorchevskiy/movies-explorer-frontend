import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox({ className, isShortMovies, setIsShortMovies }) {

  return (
    <div className={`filter ${className || ''}`.trim()}>
      <div className="button filter__button">
        <input type="checkbox" className="filter__checkbox" id="filter-checkbox" checked={!isShortMovies} onChange={() => setIsShortMovies(!isShortMovies)} />
        <div className="filter__knobs"></div>
        <div className="filter__layer"></div>
      </div>
      <label className="filter__label" htmlFor="filter__checkbox">Короткометражки</label>
    </div >
  )
}

export default FilterCheckbox;
