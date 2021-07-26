import './Register.css';
import React from 'react';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import InputAuth from '../InputAuth/InputAuth';
import SubmitAuth from '../SubmitAuthForm/SubmitAuth';

function Register({ className }) {
  return (
    <div className={`register ${className || ''}`.trim()}>
      <HeaderAuth className="register__header-auth" title="Добро пожаловать!" />
      <form className="register__form" name="register" noValidate >
        <div className="register__container">
          <InputAuth
            className="register__input"
            description="Имя"
            nameInput="name"
            typeInput="text"
            placeholder="Введите имя"
            error=""
          />
          <InputAuth
            className="register__input"
            description="E-mail"
            nameInput="email"
            typeInput="email"
            placeholder="Введите e-mail"
            error=""
          />
          <InputAuth
            className="register__input"
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
