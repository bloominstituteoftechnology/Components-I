import './article.less'
import data from './artical_data'
// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules


const artticles = document.querySelector('.articles'); 



data.data.forEach((val)=>artticles.appendChild(articleMaker(val))); 
artticles.appendChild(articleMaker({'title':'How to invert a binary tree!?!?','date':new Date(),firstParagraph:'Its really quite simple,Its really quite simpleIts really quite simpleIts really quite simpleIts really quite simple',secondParagraph:"Be sure to make the function recursive!Be sure to make the function recursive!Be sure to make the function recursive!Be sure to make the function recursive!Be sure to make the function recursive!",thirdParagraph:'Its really only a couple lines of code!Its really only a couple lines of code!Its really only a couple lines of code!Its really only a couple lines of code!Its really only a couple lines of code!'}));
function articleMaker(obj){
  let containerDiv = document.createElement('div');  
  containerDiv.classList.add('article'); 
  let title = elementWithInnerTextMaker('h2',obj.title); 
  let date = elementWithInnerTextMaker('p',obj.date); 
  date.classList.add('date'); 
  let firstParagraph = elementWithInnerTextMaker('p',obj.firstParagraph); 
  let secondParagraph = elementWithInnerTextMaker('p',obj.secondParagraph); 
  let thirdParagraph = elementWithInnerTextMaker('p',obj.thirdParagraph); 
  let expandButton = elementWithInnerTextMaker('span','+'); 
  expandButton.classList.add('expandButton'); 
  expandButton.addEventListener('click',()=>containerDiv.classList.toggle('article-open')); 
  appendAll(containerDiv,[title,date,firstParagraph,secondParagraph,thirdParagraph,expandButton])
  return containerDiv; 
}


function elementWithInnerTextMaker(type,str){
  let tempElement = document.createElement(type); 
  tempElement.innerText = str;
  return tempElement; 
}

function appendAll(doc, arr){
  arr.forEach(val => {
    doc.appendChild(val); 
  });
}


/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
