// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object


const inputField = document.getElementById('input-field');
const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', () => {
  const text = inputField.value;
  localStorage.setItem('savedText', text);
});

const savedText = localStorage.getItem('savedText');
if (savedText) {
  const output = document.getElementById('output');
  output.innerText = `Saved text: ${savedText}`;
}

  