import SuccessMessage from '../SuccessMessage/SuccessMessage';
import ErrorInput from '../ErrorInput/ErrorInput';
import './Profile.css';
import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile({ className, onLogout, editProfile, error, setError, success, setSuccess }) {
  const { values, setValues, handleChange, errors, isValid, setIsValid } = useFormWithValidation()
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setValues({
      ...values,
      name: currentUser.name,
      email: currentUser.email,
    })
    setIsValid(false);
    setError('');
    setSuccess('')
  }, []);

  useEffect(() => {
    if (values.name === currentUser.name && values.email === currentUser.email) {
      setIsValid(false);
    }
  }, [currentUser.email, currentUser.name, setIsValid, values.email, values.name]);

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
                value={values.name || ''}
                onChange={handleChange}
              />
              <ErrorInput className='profile__error' error={errors.name} />
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
                value={values.email || ''}
                onChange={handleChange}
              />
              <ErrorInput className='profile__error' error={errors.email} />
            </div>
          </div>
          <div className="profile__edit-group">
            {success ? <SuccessMessage className='profile__success' message={success} /> : <></>}
            {error ? <ErrorInput className='profile__edit-error' error={error} /> : <></>}
            <input
              className={`button profile__button profile__button_submit ${isValid ? '' : 'profile__button_submit_disable'}`}
              type="submit"
              name="profile"
              value="Редактировать"
              disabled={!isValid}
            />
          </div>
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
