const aButton = document.getElementById('loginButton');
const menuBar = document.getElementById('menu-bar');
const menuBarMobile = document.getElementById('menu-bar-mobile');
const menuItems = menuBar.getElementsByTagName('p');
const toggleMenu = document.getElementById('toggle-button');
const closeMenu = document.getElementById('close-btn');
const notification = document.getElementById('notification');
const logOut = document.getElementById('logout-btn');
const bellOnSrc = './img/bell-on.png';
const bellOffSrc = './img/bell-off.png';

const user = JSON.parse(localStorage.getItem('user'));
const isMobile = window.innerWidth < 768;
if (localStorage.getItem('notification') === 'true') {
  notification.src = bellOnSrc;
} else {
  notification.src = bellOffSrc;
}

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
    const userField = document.getElementById('user-field');
    const loginButton = loginLink.querySelector('p.navbar-item');
    loginButton.innerHTML = `Hola, <span class='username'>${userName}
    </span><img src='./img/down-outline.png'>`;
    togglePerson.style.display = 'none';
    toggle.style.display = 'flex';
    toggleMenu.href = '#';
    aButton.href = '#';
    userField.innerHTML = `Hola, <span class='username'>${userName}
    </span>`;
  }
}

if (isMobile) {
  toggleMenu.addEventListener('click', () => {
    menuBarMobile.style.display = menuBarMobile.style.display === 'flex' ? 'none' : 'flex';
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

let initialX = null;

menuBarMobile.addEventListener('touchstart', (event) => {
  initialX = event.touches[0].clientX;
});

menuBarMobile.addEventListener('touchmove', (event) => {
  if (initialX && event.touches[0].clientX - initialX > 20) {
    menuBarMobile.style.display = 'none';
  }
});

menuBarMobile.addEventListener('touchend', () => {
  initialX = null;
});

closeMenu.addEventListener('click', () => {
  menuBarMobile.style.display = 'none';
});

let notificationOn = true;

notification.addEventListener('click', () => {
  if (notificationOn) {
    notification.src = bellOffSrc;
    notificationOn = false;
    localStorage.setItem('notification', false);
  } else {
    notification.src = bellOnSrc;
    notificationOn = true;
    localStorage.setItem('notification', true);
  }
});

logOut.addEventListener('click', () => {
  const userLogout = {
    ...user,
    loggedIn: false,
  };
  localStorage.setItem('user', JSON.stringify(userLogout));
  window.location.href = './index.html';
});
