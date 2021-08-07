import './Profile.css';
import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { IsLoggedInContext } from '../../contexts/IsLoggedInContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile({ className, onLogout, editProfile }) {
  const { values, setValues, handleChange, errors, setErrors, isValid, setIsValid, resetForm } = useFormWithValidation()
  const isLoggedIn = useContext(IsLoggedInContext);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (values.name === currentUser.name && values.email === currentUser.email) {
      setIsValid(false);
    }
  }, [currentUser.email, currentUser.name, values.name, values.email, setIsValid])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      return;
    }

    setValues({
      ...values,
    });

    editProfile(values);
  };


  return (
    <div className={`profile ${className || ''}`.trim()}>
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form className="profile__form" name="profile" onSubmit={handleSubmit}>
        <div className="profile__container-form">
          <div className="profile__container">
            <p className="profile__description">Имя</p>
            <input className="profile__input"
              type="text"
              name="name"
              id="name"
              placeholder="Введите имя"
              required
              autoComplete="name"
              value={values.name || currentUser.name}
              onChange={handleChange}
            />
            <span>{errors.name}</span>
          </div>
          <div className="profile__container">
            <p className="profile__description">E-mail</p>
            <input className="profile__input"
              type="email"
              name="email"
              id="e-mail"
              placeholder="Введите e-mail"
              required
              autoComplete="e-mail"
              value={values.email || currentUser.email}
              onChange={handleChange}
            />
            <span>{errors.email}</span>
          </div>
        </div>
        <input
          className={`button profile__button profile__button_submit ${isValid ? '' : 'profile__button_submit_disable'}`}
          type="submit"
          name="profile"
          value="Редактировать"
          disabled={!isValid}
        />
      </form>
      <input
        className="button profile__button profile__button_exit"
        type="button"
        name="exit"
        value="Выйти из аккаунта"
        onClick={onLogout}
      />
    </div>
  )
}

export default Profile;
