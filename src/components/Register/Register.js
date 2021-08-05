import './Register.css';
import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import InputAuth from '../InputAuth/InputAuth';
import SubmitAuth from '../SubmitAuthForm/SubmitAuth';
import { IsLoggedInContext } from '../../contexts/IsLoggedInContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Register({ className, onRegister }) {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const isLoggedIn = useContext(IsLoggedInContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!registerData.name || !registerData.email || !registerData.password) {
      return;
    }

    setRegisterData({
      ...registerData,
    });

    onRegister(registerData);
  };

  return (
    <>
    {isLoggedIn && <Redirect to="/movies" />}
      <div className={`register ${className || ''}`.trim()}>
        <HeaderAuth className="register__header-auth" title="Добро пожаловать!" />
        <form className="register__form" name="register" onSubmit={handleSubmit} >
          <div className="register__container">
            <InputAuth
              className="register__input"
              description="Имя"
              nameInput="name"
              typeInput="text"
              placeholder="Введите имя"
              error=""
              value={registerData.name}
              onChange={handleChange}
            />
            <InputAuth
              className="register__input"
              description="E-mail"
              nameInput="email"
              typeInput="email"
              placeholder="Введите e-mail"
              error=""
              value={registerData.email}
              onChange={handleChange}
            />
            <InputAuth
              className="register__input"
              description="Пароль"
              nameInput="password"
              typeInput="password"
              placeholder="Введите пароль"
              error="Что-то пошло не так..." //для отображения
              value={registerData.password}
              onChange={handleChange}
            />
          </div>
          <SubmitAuth
            className='register__submit-auth'
            nameSubmit='Зарегистрироваться'
            question='Уже зарегистрированы?'
            link='signin'
            linkText='Войти'
          />
        </form>
      </div>
    </>
  )
}

export default Register;
