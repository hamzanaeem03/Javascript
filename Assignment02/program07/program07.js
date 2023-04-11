// // 7. Write a function that retrieves an object from localStorage. The function
// // should take one argument, which is a string representing the key used to
// // store the object. The function should return the object

const myObject = { name: "hamza", age: 20 };
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  saveToLocalStorage("myKey", myObject);
  const retrievedObject = JSON.parse(localStorage.getItem("myKey"));
  console.log(retrievedObject);
    