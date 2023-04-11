// // 2. Write a recursive function that searches an array for a specific value. The
// // function should return true if the value is found, and false if it is not. You
// // can assume that the array is not nested.


function searchvalue(array, value) {
    if (array.length === 0) {
      return false;
    }
    if (array[0] === value) {
      return true;
    }
    return searchvalue(array.slice(1), value);
  }

  const myArray = [1, 2, 3, 4, 5];
const myValue = 3;

console.log(searchvalue(myArray, myValue));