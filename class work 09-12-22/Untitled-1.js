
let a = Number(prompt("enter a number."));
let x = 1
let array1 = new Array();
let d = 1
for(let b = 1;b<=(a*2)-1;b++){
    for(let c = 1;c<=(a*2)-1;c++){
        if(b==c){
            document.write(x);
        }else if(c==(a*2)-d){
            document.write(x);
        }else{
            document.write(" ");
        }
    }
    d=d+1
    document.write("<br>");
    if(x==a){
        array1.push("centre");
    }
    if(array1.length>0){
        x=x-1
    }else{
        x=x+1
    }
}
