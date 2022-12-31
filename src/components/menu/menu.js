import './menu.less'

// This is the data we will be using, study it but don't change anything, yet.
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function menuMaker (items){
  const menuObj = document.createElement('div');
  const youEl = document.createElement('ul');

  menuObj.classList.add('menu')

  menuObj.appendChild(youEl);
  
  for(let i = 0; i<items.length;i++){
    let current = document.createElement("li");
    current.textContent = items[i]
    youEl.appendChild(current)
  }

  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', () => {
    menuObj.classList.toggle('menu--open');
  })

  return menuObj
}
const header = document.querySelector('.header');
header.appendChild(menuMaker(menuItems))