import './Register.css';
import React from 'react';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import InputAuth from '../InputAuth/InputAuth';
import SubmitAuth from '../SubmitAuthForm/SubmitAuth';

function Register({ className }) {
  return (
    <div className={`register ${className || ''}`.trim()}>
      <HeaderAuth className="register__header-auth" title="Добро пожаловать!" />
      <form className="regiser__form" name="register" noValidate >
        <div className="regiser__container">
          <InputAuth
            className="regiser__input"
            description="Имя"
            nameInput="name"
            typeInput="text"
            placeholder="Введите имя"
            error=""
          />
          <InputAuth
            className="regiser__input"
            description="E-mail"
            nameInput="email"
            typeInput="email"
            placeholder="Введите e-mail"
            error=""
          />
          <InputAuth
            className="regiser__input"
            description="Пароль"
            nameInput="password"
            typeInput="password"
            placeholder="Введите пароль"
            error="Что-то пошло не так..." //для отображения
          />
        </div>
        <SubmitAuth
          className='register__submit-auth'
          nameSubmit='Зарегистрироваться'
          question='Уже зарегистрированы?'
          link='sigh-in'
          linkText='Войти'
        />
      </form>
    </div>
  )
}

export default Register;
