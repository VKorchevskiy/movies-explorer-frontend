const validator = require("email-validator");
const nameRegEx = /^[а-яёa-z -]{2,30}$/gi;
const passwordRegEx = /^(?=.*[0-9])(?=.*[`~!@'"#№$;:%^*<>?|+/\-()[\]{=},.\\])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z`~!@'"#№$;:%^*<>?|+/\-()[\]{=},.\\]{8,}$/g;

export const searchValidator = (search) => search !== '';
export const nameValidator = (name) => name.match(nameRegEx);
export const emailValidator = (email) => validator.validate(email);
export const passwordValidator = (password) => password.match(passwordRegEx);
