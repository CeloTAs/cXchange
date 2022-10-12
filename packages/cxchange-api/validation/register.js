const validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.fullName = !isEmpty(data.fullName) ? data.fullName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!validator.isLength(data.fullName, { min: 3, max: 30 }))
    errors.fullName = "fullName must be between 3 to 30 characters";

  if (validator.isEmpty(data.fullName))
    errors.fullName = "fullName field is required";

  if (validator.isEmpty(data.email)) errors.email = "email field is required";

  if (!validator.isEmail(data.email)) errors.email = "email is invalid";

  if (!validator.isLength(data.password, { min: 5, max: 30 }))
    errors.password = "password must be at least 5 characters";

  if (validator.isEmpty(data.password))
    errors.password = "insert your account password";

  if (validator.isEmpty(data.password2))
    errors.password2 = "you must confirm your password";

  if (!validator.equals(data.password, data.password2))
    errors.password2 = "password mismatch";

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
