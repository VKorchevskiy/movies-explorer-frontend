import './Profile.css';
import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ className, onLogout, editProfile }) {
  const currentUser = useContext(CurrentUserContext);
  const [userData, setUserData] = useState({
    name: currentUser.name,
    email: currentUser.email,
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.name || !userData.email) {
      return;
    }

    setUserData({
      ...userData,
    });

    editProfile(userData);
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
              value={userData.name}
              onChange={handleChange}
            />
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
              value={userData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <input className="button profile__button profile__button_submit" type="submit" name="profile" value="Редактировать" />
      </form>
      <input className="button profile__button profile__button_exit" type="button" name="exit" value="Выйти из аккаунта" onClick={onLogout} />
    </div>
  )
}

export default Profile;
