// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *


let string = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    string = string + "*";
  }
  string  = string + "\n";
}
console.log(string);