console.log("Hello world") //This will print hello to console
// Single line comment
/*
Multi line comment
This comment will cover
several lines
*/
//Variables

/*
There are two ways to declare variables in javascript

var a = 10;

let a = 10;

const x = 20;

*/

let a =10;
console.log(a);

const x =20;
console.log(x)

let bob =20;
console.log(bob)
let boB =10;
console.log(boB)

// Datatypes

/*
Numbers
Strings
Booleans
*/

let temp=10; //Datatype number

let temp1="10"; //Datatype string

/*
All numbers in javascript are floating point numbers
*/

/*
All variables in javascript must begin with a
letter or an underscore_. You can not a reserved word
as a variable word.
*/

//Arithmatic Operaters

//Addition

console.log(5+2);

console.log("abc+def");

//Substraction

console.log(5-2);

//multiplication

console.log(5*2);

//division

console.log(5/2);

//exponent

console.log(3**4);

//increment

let h=11;

console.log(h++);

console.log(h);

let k =10;

console.log(++k);

//decerment operator

let c = 5;

console.log(c--);

console.log(c);

console.log(--c);

//comparison operators

//equlas ==

console.log(5 == 3);

console.log(4 == 4);

// not equals !=

console.log(5!=4);

console.log(4!=4);

// greater than >

console.log(5>4);

console.log(4>5);

// less than <

console.log(5<4);

console.log(4<5);

//greater than or less than >=

console.log(5>=4);

console.log(4>=5);

// less than or equal to <=

console.log(5<=4);

console.log(4<=5);

//assignment operators

//equals=
//this is the simple assignment

let n = 12;

//add and assignment +=
 n+=12; //this is the same as writing n=n+12
 console.log(n);

 //subtract adn assignment -=
 n-=4; //this is the same as writing n=n-4
 console.log(n);

 //multiply and assignment *=
 n*=5; // this is the same as writing n=n*5
 console.log(n);

 //divide and assignment %=

 let y=4;

 y%=2; //this is the same as writing y=y%2
 console.log(y);

        //conditional operator ?:

/*
the conditional operator evaluates an expression for the true or false.
if true it executes the first statement,
otherwise it executes the second statement
*/

let first=10;
let second=12;

console.log(first>second?"True":"False");

        //typeof operator
let myString = "hello";
console.log(typeof(myString));

let myNumber=10;
console.log(typeof(myNumber));

        //user input
/*
the promt() function is used to take input from the user.
the default datatype is string.
to convert the input to a number, wrap the prompt in a NUMBER() function call 
*/

let mySecondString= prompt("enter something");

let mySecondNumber= Number(prompt("enter a number"));
console.log(mySecondNumber);

        //if statement
/*
the if statement is a control statement which executes if th etest condition evaluates to true
*/

let myage=400;

if(myage>500)//'myage>500' is the test condition 
             //everything inside of '{}' is the code block
{
    console.log("You are over 500 years old");
}
        //if else statements
/*
if else is also a control statement,
if the test condition is true it executes the code in the code block,
otherwise it executes the code in the else block
*/

if(myage=500){
    console.log("You are over 500 years old");
}else{
    console.log("You are not over 500 years old");
}

        //if else-if else statement
/*
similar to the two control statemnet above,
this can test multiple different conditions,
if they all fail it will run the else condition
*/

if(myage>500){
    console.log("You are over 500 years old");
}else if(myage<500){
    console.log("You are less than 500 years old");
}else{
    console.log("You must be 500 years old");
}
//checks whether if conditions are true or not in the sequence they appear in the code,
//if a condition returns as "true" all following conditions will be ignored.

/*
logical and (&&)
returns true if both operands are true
*/
a = true;
let b = true;
console.log(a && b); //will print true to the console as both a and b are true
b = false;
console.log(a&&b); //will print false to the console as a and b are not both true

let firstNumber=10;
let secondNumber=20;
if((firstNumber>5)&&(secondNumber>15))//if either of the expressions return as false the else statement will print
{
    console.log("first is greater than 5 and second than 15");
}else{
    console.log("one of the expressions failled the test");
}
/*
logical or (||) - if either a or b is true it is all true
*/
a=true
b=true
console.log(a||b);

/*
logical not (!) - reverses the results, if true becomes false, if false becomes true
*/
console.log(!(a));

/*
switch statement
*/
let myVar = 'A';
switch(myVar){
case 'A':
    console.log("you got an A");
    break;
case 'B':
    console.log("you got a B");
    break;
default:
    console.log("grade not recognised");
}

//while loops
//as long as true continuously runs code.
let count = 0
while(count<10){
    console.log(count);
    count++; //count = count + 1
}

//Do while loop
//Always runs code at least once 
do{
    console.log(count);
    count++;
}while(count<20);   

/*
for loops
for(initialization; test condition; increment statement){
code in here will run if the test condition is true
}

Initialisation: this step executes first, it only executes once, you can declare and initialise a loop control variable
here. It is optional but you must put in a semi-colon at the end ; 
Test condition: if the test condition is true the block of the code executes, otherwise, it does not.
Increment statement: after the body of the loop executes, control goes to the increment statement which allows you to 
update any control variable values. this statement is optional but a semi_colon is needed at the end ;
*/

for(let i=0;i<2;i++){
    console.log("HELLO",i);
}
//we get the same output from this 
let j=0;
for(;j<2;j++){
    console.log("hello",j);
}
//we get the same output from this
let l=0;
for(;l<2;){
    console.log("hello",l);
    l++
}

//star patterns
/*
you cannot write patterns to the console so we use 'document.write("*")
to write to a html page we use 'document.write("<br />")
*/

//example of square 5 star pattern:
for(let j = 0; j<5; j++){
    for(let k = 0;k<5; k++){
        document.write("*" );
    }
    document.write("<br />");
}
//expected outcome in html
/*
*****
*****
*****
*****
*****
*/
//k controls the columns
//j controls the rows

//break statement

let m = 0;
document.write("entering loop:<br>");
while(m<20){
    m = m+1;
    if(m==5){
        break;
    }
    document.write(m+"<br>");
}
document.write("leaving loop:<br>");
//will print all numbers from 1 to 5 and then end the while loop.

//continue statement
m = 0;
document.write("entering loop:<br>");
while(m<20){
    m = m+1;
    if(m==5){
        continue;
    }
    document.write(m+"<br>");
}
document.write("leaving loop:<br>");
//will print all numbers from 1 to 20 excluding 5 

//ARRAYS


/*
the array object allows you to store multiple values in a single variable.
it stores a fixed size, sequential collection of the same or mixed type
*/

//to create an array

let myArray = new Array("apples","oranges");
let myArray2 = ["apples","oranges"];

//to access elements of an aray we use indexing

/*
indexing is when tou type the array name followed by square brackets.
The number you put between the square brackets is the same number of the element in the array you wish to access.
*/

//all arrays start with index value of '0'
document.write(myArray2[0]); // this will print apples
document.write(myArray2[1]); // this will print oranges

//to change an array element
//use indexing to locate the element and then an assignment operation to assign a new value.

myArray2[0]="lemmon";
document.write(myArray2[0]);
document.write("<br>");
//very important
document.write(myArray2);
myArray2[10]="test";
document.write(myArray2);

//to add elements to an array you can use the push command.
//they will be pushed onto the end of the array.

myArray2.push("lime");

//to remove the last element from an array you can use the pop command.

myArray2.pop();//this removes the last element

//to create an empty array you can use the 'new Array()' command or a pair of empty square brackets

let myArray3=new Array();
let myArray4=[];

//to use a for loop to access the array elements
//to add elements using a for loop
for(let i = 0;i<10;i++){
    myArray4=[i]=i;
}
document.write("<br>");
document.write(myArray4);
document.write("<br>");
document.write(myArray4.length);//tells no. items in array