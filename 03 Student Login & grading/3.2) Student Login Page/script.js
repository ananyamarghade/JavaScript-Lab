const form = document.getElementById("signupForm");

const nameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");

const nameMsg = document.getElementById("msg-name");
const emailMsg = document.getElementById("msg-email");
const passwordMsg = document.getElementById("msg-password");
const confirmMsg = document.getElementById("msg-confirm");

const submitBtn = document.getElementById("submitBtn");
const successMsg = document.getElementById("successMsg");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

const validState = {
  name: false,
  email: false,
  password: false,
  confirm: false,
};

function isUpperCaseLetter(char) {
  return char >= "A" && char <= "Z";
}

function isLowerCaseLetter(char) {
  return char >= "a" && char <= "z";
}

function isDigit(char) {
  return char >= "0" && char <= "9";
}

function isSpecialChar(char) {
  const allowedSpecials = "@#$%&!";
  return allowedSpecials.indexOf(char) !== -1;
}

function containsSpace(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      return true;
    }
  }
  return false;
}

function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

function containsWordIgnoreCase(str, target) {
  return str.toLowerCase().includes(target.toLowerCase());
}

function setFieldMessage(inputEl, msgEl, state, message) {
  inputEl.classList.remove("valid", "invalid");
  msgEl.classList.remove("valid", "invalid");

  if (state === "valid") {
    inputEl.classList.add("valid");
    msgEl.classList.add("valid");
    msgEl.textContent = message;
  } else if (state === "invalid") {
    inputEl.classList.add("invalid");
    msgEl.classList.add("invalid");
    msgEl.textContent = message;
  } else {
    msgEl.textContent = "";
  }
}

function validateName() {
  const value = nameInput.value;

  if (value.length === 0) {
    validState.name = false;
    setFieldMessage(nameInput, nameMsg, "", "");
    return;
  }

  if (value[0] === " " || value[value.length - 1] === " ") {
    validState.name = false;
    setFieldMessage(nameInput, nameMsg, "invalid", "Name cannot start or end with a space");
    return;
  }

  if (value.length < 5) {
    validState.name = false;
    setFieldMessage(nameInput, nameMsg, "invalid", "Name must be at least 5 characters");
    return;
  }

  for (let i = 0; i < value.length; i++) {
    if (isDigit(value[i])) {
      validState.name = false;
      setFieldMessage(nameInput, nameMsg, "invalid", "Name cannot contain numbers");
      return;
    }
  }

  validState.name = true;
  setFieldMessage(nameInput, nameMsg, "valid", "Name is valid");
}

function validateEmail() {
  const value = emailInput.value;

  if (value.length === 0) {
    validState.email = false;
    setFieldMessage(emailInput, emailMsg, "", "");
    return;
  }

  if (containsSpace(value)) {
    validState.email = false;
    setFieldMessage(emailInput, emailMsg, "invalid", "Email cannot contain spaces");
    return;
  }

  const atCount = countOccurrences(value, "@");
  if (atCount !== 1) {
    validState.email = false;
    setFieldMessage(emailInput, emailMsg, "invalid", "Email must contain exactly one @");
    return;
  }

  if (!value.endsWith("@sitnagpur.siu.edu.in")) {
    validState.email = false;
    setFieldMessage(emailInput, emailMsg, "invalid", "Only sitnagpur.siu.edu.in addresses are allowed");
    return;
  }

  const atIndex = value.indexOf("@");
  if (atIndex < 1) {
    validState.email = false;
    setFieldMessage(emailInput, emailMsg, "invalid", "Enter a username before @");
    return;
  }

  validState.email = true;
  setFieldMessage(emailInput, emailMsg, "valid", "Email is valid");
}

function validatePassword() {
  const value = passwordInput.value;
  const nameValue = nameInput.value;

  if (value.length === 0) {
    validState.password = false;
    setFieldMessage(passwordInput, passwordMsg, "", "");
    return;
  }

  if (containsSpace(value)) {
    validState.password = false;
    setFieldMessage(passwordInput, passwordMsg, "invalid", "Password cannot contain spaces");
    return;
  }

  if (value.length < 8) {
    validState.password = false;
    setFieldMessage(passwordInput, passwordMsg, "invalid", "Password must be at least 8 characters");
    return;
  }

  if (value.length > 16) {
    validState.password = false;
    setFieldMessage(passwordInput, passwordMsg, "invalid", "Password cannot exceed 16 characters");
    return;
  }

  let hasUpper = false;
  let hasLower = false;
  let hasDigit = false;
  let hasSpecial = false;

  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    if (isUpperCaseLetter(char)) hasUpper = true;
    else if (isLowerCaseLetter(char)) hasLower = true;
    else if (isDigit(char)) hasDigit = true;
    else if (isSpecialChar(char)) hasSpecial = true;
  }

  if (!hasUpper) {
    validState.password = false;
    setFieldMessage(passwordInput, passwordMsg, "invalid", "Password must contain one uppercase letter");
    return;
  }

  if (!hasLower) {
    validState.password = false;
    setFieldMessage(passwordInput, passwordMsg, "invalid", "Password must contain one lowercase letter");
    return;
  }

  if (!hasDigit) {
    validState.password = false;
    setFieldMessage(passwordInput, passwordMsg, "invalid", "Password must contain one number");
    return;
  }

  if (!hasSpecial) {
    validState.password = false;
    setFieldMessage(passwordInput, passwordMsg, "invalid", "Password must contain one special character (@#$%&!)");
    return;
  }

  if (containsWordIgnoreCase(value, "password")) {
    validState.password = false;
    setFieldMessage(passwordInput, passwordMsg, "invalid", 'Password cannot contain the word "password"');
    return;
  }

  if (nameValue.length > 0 && value.toLowerCase() === nameValue.toLowerCase()) {
    validState.password = false;
    setFieldMessage(passwordInput, passwordMsg, "invalid", "Password cannot be the same as your name");
    return;
  }

  validState.password = true;
  setFieldMessage(passwordInput, passwordMsg, "valid", "Password meets all requirements");

  if (confirmInput.value.length > 0) {
    validateConfirmPassword();
  }
}
function validateConfirmPassword() {
  const value = confirmInput.value;
  const passwordValue = passwordInput.value;

  if (value.length === 0) {
    validState.confirm = false;
    setFieldMessage(confirmInput, confirmMsg, "", "");
    return;
  }

  if (value !== passwordValue) {
    validState.confirm = false;
    setFieldMessage(confirmInput, confirmMsg, "invalid", "Passwords do not match");
    return;
  }

  validState.confirm = true;
  setFieldMessage(confirmInput, confirmMsg, "valid", "Passwords match");
}

function updateSubmitState() {
  const allValid =
    validState.name && validState.email && validState.password && validState.confirm;
  submitBtn.disabled = !allValid;
}

nameInput.addEventListener("input", () => {
  validateName();
  updateSubmitState();
});

emailInput.addEventListener("input", () => {
  validateEmail();
  updateSubmitState();
});

passwordInput.addEventListener("input", () => {
  validatePassword();
  updateSubmitState();
});

confirmInput.addEventListener("input", () => {
  validateConfirmPassword();
  updateSubmitState();
});

togglePassword.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  togglePassword.textContent = isHidden ? "" : "👁";
});

toggleConfirmPassword.addEventListener("click", () => {
  const isHidden = confirmInput.type === "password";
  confirmInput.type = isHidden ? "text" : "password";
  toggleConfirmPassword.textContent = isHidden ? "🙈" : "👁";
});
const googleBtn = document.getElementById("googleBtn");
googleBtn.addEventListener("click", () => {
  alert("Google sign-in is not connected yet.");
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  validateName();
  validateEmail();
  validatePassword();
  validateConfirmPassword();
  updateSubmitState();

  const allValid =
    validState.name && validState.email && validState.password && validState.confirm;

  if (!allValid) {
    return;
  }

  successMsg.classList.add("show");

  setTimeout(() => {
    successMsg.classList.remove("show");
  }, 3000);
});
