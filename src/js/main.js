const closeButton = document.getElementById('close-button');
const menuBar = document.getElementById('menu-bar');
const personBtn = document.getElementById('person');
const toggleIcon = document.getElementById('toggle');
const loginContainer = document.getElementById('loginContainer');
const submitBtn = document.getElementById('submit-btn');
let menuBarVisible = false;

const user = JSON.parse(localStorage.getItem('user'));
console.log(user);

if (user.loggedIn) {
  const registerLink = document.querySelector('a[href="./register.html"]');
  const loginLink = document.querySelector('a[href="./login.html"]');
  const navbar = document.querySelector('navbar');
  
  if (registerLink) {
    navbar.removeChild(registerLink);
  }
  
  if (loginLink) {
    const userName = user.name;
    const loginButton = loginLink.querySelector('p.navbar-item');
    const aButton = document.getElementById('loginButton');
    aButton.href = '#';
    loginButton.innerHTML = `Hola, <span class='username'>${userName}
    </span><img src='./img/down-outline.png'>`;
  }
}

personBtn.addEventListener('click', () => {
    loginContainer.style.display = 'flex';
});

toggleIcon.addEventListener('click', (event) => {
    if (!menuBarVisible) {
        menuBar.style.display = 'flex';
        closeButton.style.display = 'flex';
        menuBarVisible = true;
        event.stopPropagation();
    }
});

submitBtn.addEventListener('click', () => {
    loginContainer.style.display = 'none';
    personBtn.style.display = 'none';
    toggleIcon.style.display = 'flex';
    menuBarVisible = false;
});

closeButton.addEventListener('click', () => {
    menuBar.style.display = 'none';
    menuBarVisible = false;
});

document.addEventListener('click', (event) => {
    if (menuBarVisible && !menuBar.contains(event.target)) {
        menuBar.style.visibility = 'hidden';
        closeButton.style.display = 'none';
        console.log('clicked outside menuBar');
        menuBarVisible = false;
    }
});
