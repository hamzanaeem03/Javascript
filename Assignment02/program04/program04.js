
// Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.


function addNewListItem() {
    let text = prompt("enter item");

    const list = document.querySelector('ul'); 
    const newListItem = document.createElement('li');
  newListItem.innerHTML = text; 
  list.append(newListItem);
}