import { useCallback, useEffect, useState } from "react";
import { EMAIL_ERROR, NAME_ERROR, PASSWORD_ERROR, SEARCH_ERROR } from "../utils/constant";
import { searchValidator, nameValidator, emailValidator, passwordValidator } from '../utils/validators'

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isFieldsValid, setIsFieldValid] = useState({});

  const validateForm = () => {
    setIsValid(!Object.values(isFieldsValid).some((isFieldValid) => isFieldValid === false));
  }

  useEffect(() => {
    validateForm()
  });

  const validateField = (fieldName, value) => {
    setIsValid(false);
    setIsFieldValid({
      ...isFieldsValid,
      [fieldName]: false,
    })

    switch (fieldName) {
      case 'search':
        if (searchValidator(value)) {
          setErrors({ ...errors, [fieldName]: '' });
          setIsFieldValid({
            ...isFieldsValid,
            [fieldName]: true,
          })
        } else {
          setErrors({ ...errors, [fieldName]: SEARCH_ERROR });
          setIsValid(false);
          setIsFieldValid({
            ...isFieldsValid,
            [fieldName]: false,
          })
        }
        break;
      case 'name':
        if (nameValidator(value)) {
          setErrors({ ...errors, [fieldName]: '' });
          setIsFieldValid({
            ...isFieldsValid,
            [fieldName]: true,
          })
        } else {
          setErrors({ ...errors, [fieldName]: NAME_ERROR });
          setIsValid(false);
          setIsFieldValid({
            ...isFieldsValid,
            [fieldName]: false,
          })
        }
        break;
      case 'email':
        if (emailValidator(value)) {
          setErrors({ ...errors, [fieldName]: '' });
          setIsFieldValid({
            ...isFieldsValid,
            [fieldName]: true,
          })
        } else {
          setErrors({ ...errors, [fieldName]: EMAIL_ERROR });
          setIsValid(false);
          setIsFieldValid({
            ...isFieldsValid,
            [fieldName]: false,
          })
        }
        break;
      case 'password':
        if (passwordValidator(value)) {
          setErrors({ ...errors, [fieldName]: '' });
          setIsFieldValid({
            ...isFieldsValid,
            [fieldName]: true,
          })
        } else {
          setErrors({ ...errors, [fieldName]: PASSWORD_ERROR });
          setIsValid(false);
          setIsFieldValid({
            ...isFieldsValid,
            [fieldName]: false,
          })
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
    validateField(name, value);
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
