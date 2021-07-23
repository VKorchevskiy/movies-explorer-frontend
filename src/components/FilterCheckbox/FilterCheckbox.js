import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <div class="button">
        <input type="checkbox" class="checkbox" id="filter-checkbox" />
        <div class="knobs"></div>
        <div class="layer"></div>
      </div>
      {/* <input className="checkbox__input" type="checkbox" id="filter-checkbox" /> */}
      <label className="checkbox__label" for="filter-checkbox">Короткометражки</label>
    </div >
  )
}

export default FilterCheckbox;
