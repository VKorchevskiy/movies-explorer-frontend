import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox({ className }) {
  return (
    <div className={`filter ${className || ''}`.trim()}>
      <div className="filter__button">
        <input type="checkbox" className="filter__checkbox" id="filter-checkbox" />
        <div className="filter__knobs"></div>
        <div className="filter__layer"></div>
      </div>
      <label className="filter__label" htmlFor="filter__checkbox">Короткометражки</label>
    </div >
  )
}

export default FilterCheckbox;
