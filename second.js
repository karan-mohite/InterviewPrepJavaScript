/* 
This is a code that prints 
hello world on our console window
*/
// console.log("Hello world..!!");

const res = require("express/lib/response");

// Artimetic operator

// let a=5;
// let b=2;
// console.log("a= ",a,"& b=",b);
// console.log("a + b=",a+b);
// console.log("a - b=",a-b);
// console.log("a * b=",a*b);
// console.log("a / b=",a/b);
// console.log("a %b ",a%b);
// console.log("a ** b",a ** b);       

//unary Operator
// a=a+1;
// a++;
// console.log("a =",a);

// a=a-1;
// a--;
// console.log("a =",a);

// console.log("a++= ",a++);
// console.log("a= ",a);

// console.log("--a= ",--a);
// console.log("a= ",a);

// console.log("a--= ",a--);
// console.log("a= ",a);


// Assignment operator

// let a=5;
// let b=2;

// a+=4;   //a=a+4;
// console.log("a = ",a);

// a%=4;   //a=a%4;
// console.log("a = ",a);

// a**=4;   //a=a**4;
// console.log("a = ",a);

// Comparision Operator
// let a=5;
// let b=2;
// console.log("a == b",a==b);
// console.log("a === b",a===b);
// console.log("a > b",a>b);
// console.log("a < b",a<b);
// console.log("a!=b",a!=b);
// console.log("a!==b",a!==b);

// Logical Operator
// let a=6;
// let b=5;

// let cond1=a<b;
// let cond2=a===6;
// console.log("cond1 && cond2",cond1 && cond2);
// console.log("cond1 && cond2",cond1 || cond2);
// console.log("cond1 && cond2",!(cond1));
 
// Conditional Statements

// let age=18;
// let mode="light";
// let color;

// if(mode==="dark")
// {
//     color ="black";
// }
// if(mode==="light")
// {
//     color ="white";
// }
// console.log(color);

// if(age>=18)
// {
//     console.log("You Can Vote..!!");
// }
// if(age<18)
// {
//     console.log("You cannot vote..!!");
// }


// let age=25;
// if(age>=18)
// {
//     console.log("You can vote..!!");
// }
// else
// {
//     console.log("You cannot vote..!!");
// }
 
 
// odd and even

// let num=10;

// if(num%2===0)
// {
//     console.log(num,"is Even Number..!!");
// }
// else
// {
//     console.log(num,"Odd Number..!!");
// }

  
// let mode="dark";
// let color;

// if(mode==="dark")
// {
//     color="black";
// }
// else if(mode === "blue")
// {
//     color="blue";
// }
// else if(mode === "Pink")
// {
//     color="pink";
// }
// else{
//     color="white";
// }
// console.log(color);

// if(mode==="dark")
// {
//     console.log("dark");
// }


// Ternary Operator 
// let age=25;
// let result=age>=18 ?"adult":"not adult";
// console.log(result);

// Practise Questions

// let name =prompt("Hello");
// console.log(name);

// let num=prompt("Enter a number:");
// let num=10;
// if(num%5===0)
// {
//     console.log(num,"num is multiple of 5");
// }
// else
// {
//     console.log(num,"num is not multiple of 5");
// }

let score=55;
let grade;

if(score >=90 && score<=100)
{
    grade="A";
}
else if(score>=70 && score <=89)
{
    grade="B";
}
else if(score>=60 && score <=69)
{
    grade="C";
}
else if(score>=50 && score<=59)
{
    grade="D";
}
else if(score>=0 && score<=49)
{
    grade="F";
}
console.log("According to your score,your grade was:",grade);


