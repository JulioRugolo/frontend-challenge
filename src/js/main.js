const aButton = document.getElementById('loginButton');
const menuBar = document.getElementById('menu-bar');
const menuItems = menuBar.getElementsByTagName('p');
const toggleMenu = document.getElementById('toggle-button');

const user = JSON.parse(localStorage.getItem('user'));
const isMobile = window.innerWidth < 768;

if (user.loggedIn) {
  const registerLink = document.querySelector('a[href="./register.html"]');
  const loginLink = document.querySelector('a[href="./login.html"]');
  const navbar = document.querySelector('navbar');
  const togglePerson = document.getElementById('person');
  const toggle = document.getElementById('toggle');

  if (registerLink) {
    navbar.removeChild(registerLink);
  }

  if (loginLink) {
    const userName = user.name;
    const loginButton = loginLink.querySelector('p.navbar-item');
    loginButton.innerHTML = `Hola, <span class='username'>${userName}
    </span><img src='./img/down-outline.png'>`;
    togglePerson.style.display = 'none';
    toggle.style.display = 'flex';
    toggleMenu.href = '#';
    aButton.href = '#';
  }
}

if (isMobile) {
  toggleMenu.addEventListener('click', () => {
    menuBar.style.display = menuBar.style.display === 'flex' ? 'none' : 'flex';
  });
} else {
  aButton.addEventListener('click', () => {
    menuBar.style.display = menuBar.style.display === 'flex' ? 'none' : 'flex';
  });
}

let selectedItem = null;
  
const handleClick = (item) => {
  if (selectedItem) {
      selectedItem.style.color = '';
  }
  const buttonColor = item;
  buttonColor.style.color = '#C5AF19';
  selectedItem = buttonColor;
  };

  for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener('click', () => {
      handleClick(menuItems[i]);
  });
}
