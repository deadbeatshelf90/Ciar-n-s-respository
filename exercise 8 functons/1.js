function message1()
{
    return "hello there"
}
reply = message1();
document.write(reply);


document.write("<br>");


function message2(name)
{
    return "hello there " + name;
}
reply = message2("jim");
document.write(reply);


document.write("<br>");

function square(number)
{
    return number*number;
}
reply = square(Number(prompt("enter number")));
document.write(reply);


document.write("<br>");


let a = Number(prompt("question number"));
if(a==1){
function question1(number1,number2)
{
    return number1+number2
}
reply = question1(Number(prompt("enter number one")),Number(prompt("enter number two")));
document.write("Answer to Question "+a+" is "+reply);
document.write("<br>");
}else if(a==2){
function question2(number1,number2,operator);
{
    if(operator=="+"){
        return number1+number2
    }else if(operator=="-"){
        return number1-number2
    }else if(operator=="*"){
        return number1*number2
    }else if(operator=="/"){
        return number1/number2
    }else if(operator=="%"){
        return number1%number2
    }
}
reply = question2(Number(prompt("enter number one")),Number(prompt("enter number two")),prompt("enter operator"));
document.write(reply);
document.write("<br>");
}else{
    document.write("there is no question");
}