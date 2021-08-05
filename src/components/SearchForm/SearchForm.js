import './SearchForm.css';
import React, { useEffect } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function SearchForm({ children, className, searchMovies }) {
  const { values, setValues, handleChange, errors, setErrors, isValid, setIsValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    setIsValid(true)
  }, [])

  useEffect(() => {
    isValid ? setErrors({ ...errors, search: '' }) : setErrors({ ...errors, search: 'Нужно ввести ключевое слово' })
  }, [isValid])

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
        <input className="search__input-text" type="text" name="search" id="search"
          placeholder="Фильм" required value={values.search || ''} onChange={handleChange}  />

        <input className={`button search__submit-button ${isValid ? '':'search__submit-button_disable'}`.trim()} type="submit" name="search" value="" disabled={!isValid} />
      </form>
      {children}
      <span className="search__error-text">{errors.search}</span>
    </div>
  )
}

export default SearchForm;
