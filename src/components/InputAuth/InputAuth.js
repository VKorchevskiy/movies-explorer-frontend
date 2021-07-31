import './InputAuth.css';
import React from 'react';

/**
 *
 * @param className - класс для внешней привязки
 * @param description - описание инпута
 * @param nameInput - имя инпута
 * @param typeInput - тип инпута (text, email, password)
 * @param placeholder - описание в инпуте
 * @param error - текст ошибки
 * @returns - инпут формы авторизации
 */
function InputAuth({ className, description, nameInput, typeInput, placeholder, error, value, onChange }) {

  return (
    <div className={`input-auth ${className || ''}`.trim()}>
      <p className={`input-auth__text`}>{description}</p>
      <input
        className={`input-auth__input ${error ? 'input-auth__input_error_active' : ''}`}
        name={nameInput}
        type={typeInput}
        id={nameInput}
        placeholder={placeholder}
        required
        autoComplete={nameInput}
        value={value}
        onChange={onChange}
      />
      <span className={`input-auth__text input-auth__text_error ${error ? 'input-auth__text_error_active' : ''}`}>{error}</span>
    </div>
  )
}

export default InputAuth;
