import './Login.css';
import React from 'react';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import InputAuth from '../InputAuth/InputAuth';
import SubmitAuth from '../SubmitAuthForm/SubmitAuth';

function Login({ className }) {
  return (
    <div className={`login ${className || ''}`.trim()}>
      <HeaderAuth className="login__header-auth" title="Рады видеть!" />
      <form className="login__form" name="register">
        <div className="login__container">
          <InputAuth
            className="login__input"
            description="E-mail"
            nameInput="email"
            typeInput="email"
            placeholder="Введите e-mail"
            error=""
          />
          <InputAuth
            className="login__input"
            description="Пароль"
            nameInput="password"
            typeInput="password"
            placeholder="Введите пароль"
            error="Что-то пошло не так..."
          />
        </div>
        <SubmitAuth
          className='login__submit-auth'
          nameSubmit='Войти'
          question='Ещё не зарегистрированы?'
          link='signup'
          linkText='Регистрация'
        />
      </form>
    </div>
  )
}

export default Login;
