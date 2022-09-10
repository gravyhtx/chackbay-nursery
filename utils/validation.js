export const validateEmail = (email) => {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const successMessage = "Email is valid."

  let errors = [];

  const errorMessage = errors.length > 0 ? errors.join(' ') : "";

  if (!email.match(emailFormat)) {
    errors.push("Please enter a valid email address.")
  }

  if (!errors.length && email.match(emailFormat)) {
    return [true, successMessage]
  } else {
    return [false, errorMessage]
  }
}

export const validatePassword = (password, passwordReEnter, complexPassword) => {

  complexPassword = complexPassword ? complexPassword : false;

  const pwFormatSpaces = /^\S*$/;  // No white space
  const pwFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;  // 6 to 20 characters with at least one numeric digit, one uppercase an one lowercase letter
  
  let errors = [];

  const successMessage = "Password is valid."
  const errorMessage = errors.length ? errors.join(' ') : "";

  if (!complexPassword && (password < 6 || password > 20 || (passwordReEnter && passwordReEnter < 6) || (passwordReEnter && passwordReEnter > 20))) {
    errors.push("Password must be between 6 to 20 characters.");
  }

  if (complexPassword && !password.match(pwFormat)) {
    errors.push("Password must be between 6 to 20 characters with at least one numeric digit, one uppercase, and one lowercase letter.");
  }

  if (!password.match(pwFormatSpaces)) {
    errors.push("Password cannot contain spaces.");
  }

  if (password !== passwordReEnter) {
    errors.push("Password fields do not match.");
  }

  if (!errors.length && passwordMatch) {
    return [true, password, successMessage]
  } else {
    return [false, password, errorMessage]
  }
}

export const validateCaptcha = (captcha) => {}