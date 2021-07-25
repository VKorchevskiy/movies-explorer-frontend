import './InputAuth.css';
import React from 'react';

/**
 *
 * @param className - класс для внешней привязки
 * @param classInput - модификатор инпута (доступные модификаторы: input-auth__input_border_gray, input-auth__input_border_blue)
 * @param classDescription - модификатор описания
 * @param description - описание инпута
 * @param nameInput - имя инпута
 * @param typeInput - тип инпута (text, email, password)
 * @param placeholder - описание в инпуте
 * @param error - текст ошибки
 * @returns - инпут формы авторизации
 */
function InputAuth({ className, classInput, classDescription, description, nameInput, typeInput, placeholder, error }) {
  return (
    <div className={`input-auth ${className}`}>
      <p className={`input-auth__text ${classDescription}`}>{description}</p>
      <input
      className={`input-auth__input ${classInput} input-auth__input_error`}
      type={typeInput}
      name={nameInput}
      id={nameInput}
      placeholder={placeholder}
      required
      />
      <p className={`input-auth__text input-auth__text_error input-auth__text_error_active`}>{error}</p>
    </div>
  )
}

export default InputAuth;
