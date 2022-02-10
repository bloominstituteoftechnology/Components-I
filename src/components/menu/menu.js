import './Menu.less'

// This is the data we will be using, study it but don't change anything, yet.
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:
*/ 
// const headerAnchor = document.querySelector('.header');

// function menuMaker (array) {
// const menu = document.createElement('div');
// const list = document.createElement('ul');

// headerAnchor.appendChild(menu);
// menu.appendChild(list);

// menuItems.forEach(item => {
//   const listItem= document.createElement('li');
//   list.appendChild(listItem);
//   listItem.textContent= item
// })

// const menuBtn = document.querySelector('.menu-button');

// menuBtn.addEventListener('click', event => {
//   menu.classList.toggle('menu--open')
// })
// return menu;
// }

// const menuElements = menuItems.map(item => {
//   return menuMaker(item);
// })
// menuItems.forEach(item => {
//   headerAnchor.append(item)
// })

/*
  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

//this organizes the document properly, but the menu won't open.
const headerAnchor = document.querySelector('.header');

function menuMaker (array) {
const menu = document.createElement('div');
const list = document.createElement('ul');
const students = document.createElement('li');
const faculty = document.createElement('li');
const whatsNew = document.createElement('li');
const techTrends = document.createElement('li');
const music = document.createElement('li');
const logOut = document.createElement('li');

headerAnchor.appendChild(menu);
menu.appendChild(list);
menuItems.forEach(item => {
  const listItem= document.createElement('li');
  listItem.textContent= item;
  list.appendChild(listItem);
})
menu.classList.add('menu')

students.textContent= 'Students';
faculty.textContent= 'Faculty';
whatsNew.textContent= "What's New";
techTrends.textContent= 'Tech Trends';
music.textContent= 'Music';
logOut.textContent= 'Log Out';

// const buildingMenu = array.forEach((li) => {
//   list.appendChild(li);
//   console.log(li)
// })

const menuAnchor= document.querySelector('.menu-button')
menuAnchor.addEventListener('click', event => {
  menu.classList.toggle('menu--open')
})
return menu;
}

const menuElements = menuMaker(menuItems)
// })
// menuItems.forEach(item => {
//   headerAnchor.append(item)
// })