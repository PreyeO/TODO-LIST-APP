//Defining variables
let inputToDo= document.
querySelector('#textinput');
let storeToDo= document.querySelector('#storeToDo');
let addToDo= document.querySelector('#btn');
let addTheme= document.querySelector('#theme');
//stating what to do when button is clicked
addToDo.addEventListener('click', () => {
  //everytime button is clicked, a new list is created(i used ol i can get numbers)
var orderedList=document.createElement('li')
//the innertext(li) of new ol should be = to value(text) entered in the inputholder.

//classlist helps for manupulation of the storetodo list. we can add the style giving to it fron our css.
orderedList.classList.add('list-styling');
orderedList.innerText= inputToDo.value;
//append stores the new list
storeToDo.appendChild(orderedList);
//this makes the content in the input holder delete when the button is clicked for it to enter into todoholder.
inputToDo.value='';
//this makes the content added in the todo holder cancel out when the button is clicked on it.
orderedList.addEventListener('click', () => {
  orderedList.style.textDecoration='line-through';
  //this makes the content added in the todo holder delete when the button is doubleclicked on it.
});
  orderedList.addEventListener('dblclick', () => {
    storeToDo.removeChild(orderedList);

});
});