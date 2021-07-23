import './SearchForm.css';
import React from 'react';

function SearchForm({ children }) {
  return (
    <div className="search">
      <form className="search__form">
        <input className="search__input-text" type="text" name="search" id="search"
          placeholder="Фильм" required />
        <input className="search__submit" type="submit" name="search" value="" />
      </form>
      {children}
    </div>
  )
}

export default SearchForm;
