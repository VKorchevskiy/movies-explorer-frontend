import './Login.css';
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import InputAuth from '../InputAuth/InputAuth';
import SubmitAuth from '../SubmitAuthForm/SubmitAuth';
import { IsLoggedInContext } from '../../contexts/IsLoggedInContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Login({ className, onLogin }) {
  const { values, setValues, handleChange, errors, isValid, resetForm } = useFormWithValidation()
  const isLoggedIn = useContext(IsLoggedInContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      return;
    }
    setValues({
      ...values,
    });
    onLogin(values);
    resetForm();
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
              error={errors.email}
              value={values.email || ''}
              onChange={handleChange}
            />
            <InputAuth
              className="login__input"
              description="Пароль"
              nameInput="password"
              typeInput="password"
              placeholder="Введите пароль"
              error={errors.password}
              value={values.password || ''}
              onChange={handleChange}
            />
          </div>
          <SubmitAuth
            className='login__submit-auth'
            isValid={isValid}
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
