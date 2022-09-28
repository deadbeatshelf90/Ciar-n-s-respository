//number 1
let UserNumber=Number(prompt("enter your number"));
if ((UserNumber%2)==0){
    console.log("your number was even");
}else{
    console.log("your number was odd");
}
//number 2
let UserNumber1=Number(prompt("enter your first number"));
let UserNumber2=Number(prompt("enter your second number"));
if(UserNumber1<UserNumber2){
    console.log("number 2 was bigger");
}else if(UserNumber1>UserNumber2){
    console.log("number 1 was bigger");
}else{
    console.log("they were the same number");
}
//number 3
let UserInput1 = Number(prompt("enter number 1"));
let UserInput2 = Number(prompt("enter number 2"));
let UserInput3 = Number(prompt("enter number 3"));
if(UserInput1>UserInput2){
    if(UserInput1>UserInput3){
        console.log("number 1 was the biggest");
    }
}else if(UserInput2>UserInput1){
    if(UserInput2>UserInput3){
        console.log("number 2 was the biggest");
    }
}else{
    console.log("number 3 was the biggest");
}
//number 4
let Side1 = Number(prompt("enter the length of side 1"));
let Side2 = Number(prompt("enter the length of side 2"));
let Side3 = Number(prompt("enter the length of side 3"));
if(Side1=Side2){
    if(Side1=Side3){
        console.log("this is an equalateral triangle");
    }    
}else if(Side1=Side2){
    if(Side1!=Side3){
        console.log("this is an isosceles triangle");
    }
}else if(Side1=Side3){
    if(Side1!=Side2){
        console.log("this is an isosceles triangle");
    }
}else if(Side2=Side3){
    if(Side2!=Side1){
        console.log("this is an isosceles triangle");
    }
}else{
    console.log("the triangle is scalene");
}
//number 5
let Number1 = Number(prompt("enter your first number"));
let Number2 = Number(prompt("enter your second number"));
let UserChoice = prompt("what operation do you want applied");
if(UserChoice=="add"){
    console.log(Number1+Number2);
}else if(UserChoice=="subtract"){
    let Order = prompt("which number do you want to be subtracted form");
    if (Order=="number 1"){
        console.log(Number1-Number2);
    }else{
        console.log(Number2-Number1);
    }
}else if(UserChoice=="multiply"){
    console.log(Number1*Number2);
}else if(UserChoice=="divide"){
    let Order = prompt("which number do you want to be divided from");
    if (Order=="number 1"){
        console.log(Number1/Number2);
    }else{
        console.log(Number2/Number1);
    }
}else if(UserChoice=="modulus"){
    console.log(Number1%Number2);
}else{
    console.log("invalid operation")
}