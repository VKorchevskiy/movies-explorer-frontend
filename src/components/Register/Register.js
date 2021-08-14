import './Register.css';
import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import InputAuth from '../InputAuth/InputAuth';
import SubmitAuth from '../SubmitAuthForm/SubmitAuth';
import { IsLoggedInContext } from '../../contexts/IsLoggedInContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Register({ className, onRegister, error, setError }) {
  const { values, setValues, handleChange, errors, setErrors, isValid, setIsValid, isFieldsValid, setIsFieldValid, resetForm } = useFormWithValidation()
  const isLoggedIn = useContext(IsLoggedInContext);

  useEffect(() => {
    setValues({
      ...values,
      name: '',
      email: '',
      password: '',
    });
    setIsFieldValid({
      ...isFieldsValid,
      name: false,
      email: false,
      password: false,
    })
    setIsValid(false);
    setError('');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      return;
    }
    setValues({
      ...values,
    });
    onRegister(values);
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
              error={errors.name}
              value={values.name || ''}
              onChange={handleChange}
            />
            <InputAuth
              className="register__input"
              description="E-mail"
              nameInput="email"
              typeInput="email"
              placeholder="Введите e-mail"
              error={errors.email}
              value={values.email || ''}
              onChange={handleChange}
            />
            <InputAuth
              className="register__input"
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
            className='register__submit-auth'
            isValid={isValid}
            nameSubmit='Зарегистрироваться'
            question='Уже зарегистрированы?'
            link='signin'
            linkText='Войти'
            error={error}
          />
        </form>
      </div>
    </>
  )
}

export default Register;
