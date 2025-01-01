
// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let Userinput1 = +prompt("enter first number ");
let Userinput2 = +prompt("enter second number ");
if(Userinput1>Userinput2){
    console.log(Userinput1 +" is greater than " +Userinput2);
}
else if (Userinput1<Userinput2){
    console.log(Userinput2 +" is greater than " +Userinput1);
}
else{
    console.log("the given numbers are equal");
}


