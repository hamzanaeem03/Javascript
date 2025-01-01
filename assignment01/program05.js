// // 5. Write a JavaScript program which computes the average marks of the
// // following students Then, this average is used to determine the corresponding
// // grade.

let marks1 = +prompt("enter marks of first subject");
let marks2 = +prompt("enter marks of second subject");
let marks3 = +prompt("enter marks of third subject");
let marks4 = +prompt("enter marks of fourth subject");
let marks5 = +prompt("enter marks of fifth subject");
let avgMarks= (marks1+marks2+marks3+marks4+marks5)/5;
if(avgMarks<60){
    document.write("your grade is F "+'&nbsp;&nbsp;&nbsp;');
}
else if (avgMarks<70 &&avgMarks>=60 ){
    document.write("your grade is D "+'&nbsp;&nbsp;&nbsp;');
}
else if (avgMarks<80 &&avgMarks>=70 ){
    document.write("your grade is C "+'&nbsp;&nbsp;&nbsp;');
}
else if (avgMarks<90 &&avgMarks>=80 ){
    document.write("your grade is B "+'&nbsp;&nbsp;&nbsp;');
}
else{
    document.write("your grade is A "+'&nbsp;&nbsp;&nbsp;');
}
