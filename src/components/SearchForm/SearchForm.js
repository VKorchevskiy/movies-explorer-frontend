import './SearchForm.css';
import React, { useState } from 'react';


function SearchForm({ children, className, searchMovies }) {

  const [dataSearch, setDataSearch] = useState({
    search: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataSearch({
      ...dataSearch,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dataSearch.search) {
      return;
    }
    searchMovies(dataSearch);
  };

  return (
    <div className={`search ${className || ''}`.trim()}>
      <form className="search__form" onSubmit={handleSubmit} >
        <input className="search__input-text" type="text" name="search" id="search"
          placeholder="Фильм" required value={dataSearch.search} onChange={handleChange} />
        <input className="button search__submit-button" type="submit" name="search" value="" />
      </form>
      {children}
    </div>
  )
}

export default SearchForm;
