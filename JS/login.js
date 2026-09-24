const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const login = document.querySelector('.login-form');

login.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInputVal = emailInput.value;
  const passwordInputVal = passwordInput.value;

  localStorage.setItem('email', emailInputVal);
  localStorage.setItem('password', passwordInputVal);

  window.location.href = 'home.html';
});