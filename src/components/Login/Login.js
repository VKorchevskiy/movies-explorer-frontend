import './Login.css';
import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import InputAuth from '../InputAuth/InputAuth';
import SubmitAuth from '../SubmitAuthForm/SubmitAuth';
import { IsLoggedInContext } from '../../contexts/IsLoggedInContext';

function Login({ className, onLogin }) {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })
  const isLoggedIn = useContext(IsLoggedInContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      return;
    }

    setLoginData({
      ...loginData,
    });

    onLogin(loginData);
  };

  return (
    <>
    {isLoggedIn && <Redirect to="/movies" />}
      <div className={`login ${className || ''}`.trim()}>
        <HeaderAuth className="login__header-auth" title="Рады видеть!" />
        <form className="login__form" name="register" onSubmit={handleSubmit}>
          <div className="login__container">
            <InputAuth
              className="login__input"
              description="E-mail"
              nameInput="email"
              typeInput="email"
              placeholder="Введите e-mail"
              error=""
              value={loginData.email}
              onChange={handleChange}
            />
            <InputAuth
              className="login__input"
              description="Пароль"
              nameInput="password"
              typeInput="password"
              placeholder="Введите пароль"
              error="Что-то пошло не так..."
              value={loginData.password}
              onChange={handleChange}
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
    </>
  )
}

export default Login;
