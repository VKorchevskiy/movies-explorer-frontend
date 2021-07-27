import './Profile.css';
import React from 'react';

function Profile({ className, userName }) {
  return (
    <div className={`profile ${className || ''}`.trim()}>
      <h2 className="profile__title">Привет, {userName}!</h2>
      <form className="profile__form" name="profile" noValidate >
        <div className="profile__container-form">
          <div className="profile__container">
            <p className="profile__description">Имя</p>
            <input className="profile__input" type="text" name="name" id="name" placeholder="Введите имя" required />
          </div>
          <div className="profile__container">
            <p className="profile__description">E-mail</p>
            <input className="profile__input" type="email" name="e-mail" id="e-mail" placeholder="Введите e-mail" required />
          </div>
        </div>
        <input className="button profile__button profile__button_submit" type="submit" name="profile" value="Редактировать" />
      </form>
      <input className="button profile__button profile__button_exit" type="button" name="exit" value="Выйти из аккаунта" />
    </div>
  )
}

export default Profile;
