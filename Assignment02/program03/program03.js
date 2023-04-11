// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph elementa.
addNewParagraph('hamza');
function addNewParagraph(text) {
  const newParagraph = document.createElement('p');
  newParagraph.innerHTML = text;
  document.body.appendChild(newParagraph);

}