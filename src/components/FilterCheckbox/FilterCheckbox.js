import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <div className="button">
        <input type="checkbox" className="checkbox" id="filter-checkbox" />
        <div className="knobs"></div>
        <div className="layer"></div>
      </div>
      <label className="checkbox__label" htmlFor="filter-checkbox">Короткометражки</label>
    </div >
  )
}

export default FilterCheckbox;
