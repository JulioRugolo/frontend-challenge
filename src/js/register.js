const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const submitButton = document.getElementById('submit');

const resetError = (inputElement, errorElement) => {
  const { parentElement } = inputElement;
  parentElement.classList.remove('error');
  const errorElementCopy = errorElement.cloneNode(true);
  errorElementCopy.textContent = '';
  parentElement.replaceChild(errorElementCopy, errorElement);
};

const showError = (errorElement, errorMessage) => {
  const errorElementCopy = errorElement.cloneNode(true);
  errorElementCopy.textContent = errorMessage;
  const { parentElement } = errorElement;
  parentElement.classList.add('error');
  parentElement.replaceChild(errorElementCopy, errorElement);
};

const validateField = (inputElement, errorElement, errorMessage) => {
  resetError(inputElement, errorElement);
  if (!inputElement.value) {
    showError(errorElement, errorMessage);
    return false;
  }
  return true;
};

nameInput.addEventListener('change', () => {
  validateField(nameInput, nameError, 'The name field is required.');
});

emailInput.addEventListener('change', () => {
validateField(emailInput, emailError, 'The email field is required.');
});

passwordInput.addEventListener('change', () => {
  validateField(passwordInput, passwordError, 'The password field is required.');
});

confirmPasswordInput.addEventListener('change', () => {
  validateField(confirmPasswordInput, confirmPasswordError, 'You must confirm the password.');
});

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const user = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  localStorage.setItem('user', JSON.stringify(user));

  window.location.href = 'index.html';
});
