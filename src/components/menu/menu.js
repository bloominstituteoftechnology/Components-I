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


  // Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  // <div class="menu">
  //   <ul>
  //     {each menu item as an <li>}
  //   </ul>
  // </div>

  

  // The 'menuMaker' takes an array of menu items as its only argument.

  // Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  // Add those items to the <ul>

  function menuMaker(items) {
    const newMenu = document.createElement("div");
    newMenu.className = "menu";
    newMenu.appendChild(document.createElement("ul"));
    const innerUl = newMenu.querySelector("ul");
    items.forEach((i) => {
       const temp = document.createElement("li");
       temp.append(i);
       // temp.className = "menu-button";
       innerUl.append(temp);
    });

  // Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  // Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).
  document.querySelector(".menu-button").removeEventListener("click", open);
  // Step 5: Don't forget to return your div.menu.

  function open(e) {
    document.querySelector(".menu").classList.toggle("menu--open");
    console.log(e.target);
 }

 document.querySelector(".menu-button").addEventListener("click", open);
 return newMenu;
}

  // Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
  document.querySelector(".header").append(menuMaker(menuItems));
