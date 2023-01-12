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
    function question2(number1,number2,operator)
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
}if(a==3){
    function question3(string){
        string2 = string.split("").reverse().join("");
        if(string==string2){
            return string+" is palidrome"
        }else{
            return string+" is not palidrome"
        }
    }
    reply = question3(prompt("enter your string"));
    document.write(reply);
    document.write("<br>");
}if(a==4){
    function question4(string){
        count = 0
        array1 = string.split("");
        for(i=0;i<array1.length;i++){
            if(array1[i]=="a"){
                count += 1
            }else if(array1[i]=="e"){
                count += 1
            }else if(array1[i]=="i"){
                count += 1
            }else if(array1[i]=="o"){
                count += 1
            }else if(array1[i]=="u"){
                count += 1
            }else if(array1[i]=="A"){
                count += 1
            }else if(array1[i]=="E"){
                count += 1
            }else if(array1[i]=="I"){
                count += 1
            }else if(array1[i]=="O"){
                count += 1
            }else if(array1[i]=="U"){
                count += 1
            }
        }
        return "There is "+count+" vowels in "+string
    }
    reply = question4(prompt("enter your string"));
    document.write(reply);
    document.write("<br>");
}else{
    document.write("there is no question");
}