const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Função para exibir mensagem de erro no campo de email
const showEmailError = (errorMessage) => {
  emailError.textContent = errorMessage;
  emailInput.parentElement.classList.add('error');
};

// Função para exibir mensagem de erro no campo de senha
const showPasswordError = (errorMessage) => {
  passwordError.textContent = errorMessage;
  passwordInput.parentElement.classList.add('error');
};

// Função para limpar os erros exibidos nos campos
const clearErrors = () => {
  emailError.textContent = '';
  passwordError.textContent = '';
  emailInput.parentElement.classList.remove('error');
  passwordInput.parentElement.classList.remove('error');
};

// function to validate fields
const validateFields = () => {
  clearErrors();

  if (!emailInput.value) {
    showEmailError('Email is required.');
    return false;
  }

  if (!passwordInput.value) {
    showPasswordError('Password is required.');
    return false;
  }

  return true;
};

// function to perform login
const performLogin = () => {
  const userData = localStorage.getItem('user');

  if (userData) {
    const user = JSON.parse(userData);

    if (user.email === emailInput.value && user.password === passwordInput.value) {
      user.loggedIn = true;
      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = 'index.html';
      return;
    }
  }

  alert('Invalid email or password.');
};

// submit form event listener
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validateFields()) {
    performLogin();
  }
});