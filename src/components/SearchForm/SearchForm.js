import ErrorInput from '../ErrorInput/ErrorInput';
import './SearchForm.css';
import React from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function SearchForm({ children, className, searchMovies }) {
  const { values, setValues, handleChange, errors, setErrors, isValid, setIsValid, resetForm } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) {
      return;
    }
    searchMovies(values);
    resetForm();
    setIsValid(true);
  };

  return (
    <div className={`search ${className || ''}`.trim()}>
      <form className="search__form" onSubmit={handleSubmit} >
        <input
          className="search__input-text"
          type="text"
          name="search"
          id="search"
          placeholder="Фильм"
          required
          value={values.search || ''}
          onChange={handleChange}
        />

        <input className={`button search__submit-button ${isValid ? '' : 'search__submit-button_disable'}`.trim()} type="submit" name="search" value="" disabled={!isValid} />
      </form>
      {children}
      <ErrorInput className='search__error' error={errors.search} />
    </div>
  )
}

export default SearchForm;
