let a = Number(prompt("enter question number"));
if(a==5){
    function question5(string){
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
    reply = question5(prompt("enter your string"));
    document.write(reply);
    document.write("<br>");
}else if(a==6){
    function question6(string){
        count = 0
        array1 = string.split("");
        for(i=0;i<array1.length;i++){
            if(array1[i]=="A"||array1[i]=="B"||array1[i]=="C"||array1[i]=="D"||array1[i]=="E"||array1[i]=="F"||array1[i]=="G"||array1[i]=="H"||array1[i]=="A"||array1[i]=="I"||array1[i]=="J"||array1[i]=="K"||array1[i]=="L"||array1[i]=="M"||array1[i]=="N"||array1[i]=="O"||array1[i]=="P"||array1[i]=="Q"||array1[i]=="R"||array1[i]=="S"||array1[i]=="T"||array1[i]=="U"||array1[i]=="V"||array1[i]=="W"||array1[i]=="X"||array1[i]=="Y"||array1[i]=="Z"){
                count += 1
            }
        }
        return "There is "+count+" Uppercase Letters in "+string
    }
    reply = question6(prompt("enter your string"));
    document.write(reply);
    document.write("<br>");  
}else if(a==7){
    
}else{
    document.write("not a question");
    console.log("not a question");
}