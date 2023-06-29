const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  emailError.textContent = '';
  passwordError.textContent = '';

  if (!emailInput.value) {
    emailError.textContent = 'El campo correo electrónico es obligatorio.';
    emailInput.parentElement.classList.add('error');
  }

  if (!passwordInput.value) {
    passwordError.textContent = 'El campo contraseña es obligatorio.';
    passwordInput.parentElement.classList.add('error');
  }

  if (emailInput.value && passwordInput.value) {
    alert('¡Inicio de sesión exitoso!');
    form.reset();
  }
});