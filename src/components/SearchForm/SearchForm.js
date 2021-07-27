import './SearchForm.css';
import React from 'react';

function SearchForm({ children, className }) {
  return (
    <div className={`search ${className || ''}`.trim()}>
      <form className="search__form">
        <input className="search__input-text" type="text" name="search" id="search"
          placeholder="Фильм" required />
        <input className="button search__submit-button" type="submit" name="search" value="" />
      </form>
      {children}
    </div>
  )
}

export default SearchForm;
