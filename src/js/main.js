const aButton = document.getElementById('loginButton');
const menuBar = document.getElementById('menu-bar');
const menuItems = menuBar.getElementsByTagName('p');

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
    aButton.href = '#';
    loginButton.innerHTML = `Hola, <span class='username'>${userName}
    </span><img src='./img/down-outline.png'>`;
  }
}

aButton.addEventListener('click', () => {
    menuBar.style.display = (menuBar.style.display === 'flex')
      ? 'none'
      : 'flex';
  });

  let selectedItem = null;
  
  const handleClick = (item) => {
    if (selectedItem) {
      selectedItem.style.color = ''; // Redefine a cor do item anterior
    }
    const buttonColor = item;
    buttonColor.style.color = '#C5AF19'; // Aplica a cor ao novo item selecionado
    selectedItem = buttonColor; // Armazena o novo item selecionado
  };
  
  for (let i = 0; i < menuItems.length; i += 1) {
    menuItems[i].addEventListener('click', () => {
      handleClick(menuItems[i]);
    });
  }
