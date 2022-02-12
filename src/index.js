import './index.less'
import './components/article/article.js'
import './components/menu/menu.js'
import { data } from 'msw/lib/types/context';
// import data from './components/article.js';


// import data from 'msw/lib/types/context';

//! ------------- MENU -----------

function menuMaker (linksArray) {

    //create elements from menu html
    const menuWrapper = document.createElement("div");
    const menuList = document.createElement("ul");
    

    //add class names
    menuWrapper.classList.add("menu");

    //append child to set up structure
    menuWrapper.appendChild(menuList);
    
    //loop through the array and add a list item (link) to it
    linksArray.forEach(linkText => {
        const link = document.createElement("li")
        //add text to list items
        link.textContent = linkText;
        //add the li items to the menu
        menuList.appendChild(link);
    })

    
    const hamMenu = document.querySelector(".menu-button"); //class name from index.html file 

//add event listener so that on click, it opens up 
hamMenu.addEventListener("click", evt => {
    document.querySelector("div.menu").classList.toggle("menu--open");
})

return menuWrapper;

}


//! ------------------------- ARTICLE MAKER --------------------------

function articleMaker (articleObj) {
    
   // create (instantiate) elements 
    const article  = document.createElement("div");
    const title = document.createElement("h2");
    const date = document.createElement("p");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const expandButton = document.createElement("span");

    //add class names
    article.classList.add("article");
    date.classList.add("date");
    expandButton.classList.add("expandButton");
    

    // add the elements to their respective parents with appendChild / set up the structure
    //top portion of div
    article.appendChild(title);  
    article.appendChild(date); 
    article.appendChild(para1); 
    article.appendChild(para2); 
    article.appendChild(para3); 
    article.appendChild(expandButton); 

    // articleMaker();
    // console.log(article);

    // set text content to the elements that were created

    title.textContent = articleObj.title;
    date.textContent = articleObj.date;
    para1.textContent = articleObj.firstParagraph;
    para2.textContent = articleObj.secondParagraph;
    para3.textContent = articleObj.thirdParagraph;
    expandButton.textContent = "+";
    
    //  const getTitle = dataObj.forEach(article.querySelectorAll("h2"));
    //  const getDate = dataObj.forEach(article.querySelectorAll("date"));


    // add event listener to span

    expandButton.addEventListener("click", () => {
        article.classList.toggle("article-open");
    } )
    
return article;
}

//! loop through data 
data.forEach(article => {
    const articleWrapper = document.querySelector("div.articles");
    const articleList = articleMaker(article);
    articleWrapper.appendChild(articleList);
})

// console.log(articleMaker(data));


    






