import { useCallback, useState } from "react";
const validator = require("email-validator");

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const checkValidity = () => setIsValid(!Object.values(errors).some((error) => error !== ''));

  const validateField = (fieldName, value) => {
    setIsValid(true);

    switch (fieldName) {
      case 'search':
        if (value === '') {
          setErrors({ ...errors, search: 'Нужно ввести ключевое слово' });
          setIsValid(false);
        } else {
          setErrors({ ...errors, search: '' });
        }
        break;

      case 'name':
        if (value.match(/^[а-яёa-z -]{2,30}$/gi)) {
          setErrors({ ...errors, name: '' });
        } else {
          setErrors({ ...errors, name: 'Нужно ввести имя' });
          setIsValid(false);
        }
        break;

      case 'email':
        if (validator.validate(value)) {
          setErrors({ ...errors, email: '' });
        } else {
          setErrors({ ...errors, email: 'Нужно ввести e-mail' });
          setIsValid(false);
        }
        break;

      case 'password':
        if (value.match(/(?=.*[0-9])(?=.*[`~!@'"#№$;:%^*<>?|+/\-()[\]{=},.\\])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z`~!@'"#№$;:%^*<>?|+/\-()[\]{=},.\\]{8,}/g)) {
          setErrors({ ...errors, password: '' })
        } else {
          setErrors({ ...errors, password: 'Пароль должен содержать не менее одного числа, одного спецсимвола, одной латинской буквы в нижнем и верхнем регистрах и состоять минимум из восьми символов.' });
          setIsValid(false);
        }
        break;

      default: break;
    }
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    validateField(name, value);
    // setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, setValues, handleChange, errors, setErrors, isValid, setIsValid, resetForm };
}
