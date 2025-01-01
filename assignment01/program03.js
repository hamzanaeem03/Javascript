// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.


// let a = +prompt("enter 1st number");
// let b = +prompt("enter 2nd number");
// let c = +prompt("enter 3rd number");
// let d = +prompt("enter 4th number");
// let e = +prompt("enter 5th number");

if (a>b && a>c && a>d && a>e)
{
    console.log("the largest number is "+ a);
}
else if (b>a && b>c && b>d && b>e)
{
    console.log("the largest number is "+ b);
}
else if (c>a && c>b && c>d && c>e)
{
    console.log("the largest number is "+ c);
}
else if (d>a && d>c && d>b && d>e)
{
    console.log("the largest number is "+ d);
}
else
{
    console.log("the largest number is "+ e);
}