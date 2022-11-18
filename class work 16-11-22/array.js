let myFace = new Array("tea","coffee",-1,2);
let a = Number(prompt("what question do you want?"));
if(a==1){
    document.write(myFace[2]);
}else if(a==2){
    for(let b=0;b<myFace.length+1;b++){
        if(typeof(myFace[b])=="number"){
            if(myFace[b]<0){document.write(myFace[b]);
            }    
        }
    }
}else if(a==3){
    let c = 0
    for(let b=0;b<myFace.length+1;b++){
        if(typeof(myFace[b])=="number"){
            c = c + myFace[b]
        }
    }
    document.write(c);   
}else if(a==4){
    let d=0
    let e=0
    for(let b=0;b<myFace.length+1;b++){
        if(typeof(myFace[b])=="number"){           
            if(myFace[b]>d){
                d = myFace[b];
            }
        }
        if(typeof(myFace[b])=="number"){
            if(myFace[b]<e)[
                e = myFace[b]
            ]
        }
    }
    document.write(d+" is the maximum number");
    document.write("<br>");
    document.write(e+" is the minimum number");
}else if(a==5){
    let f = 0
    for(let b=0;b<myFace.length+1;b++){
        if(typeof(myFace[b])=="number"){
            if(myFace[b]>f){
                f=myFace[b]
            if(f==0){
                f=myFace[b];
            }
            }  
        }
    }
    let g = 0
    for(let h=0;h<myFace.length+1;h++){
        if(typeof(myFace[h])=="number"){
            if(myFace[h]<f){
                if(myFace[h]>g){
                    g = myFace[h];
                }
                if(g==0){
                    g=myFace[h];
                }
            }
        }
    }
    document.write(g);
}else if(a==6){
    let j=0
    let k=0
    for(let i=0;i<myFace.length+1;i++){
        if(typeof(myFace[i])=="number"){
            if(myFace[i]%2==0){
                j++;
            }else{
                k++
            }
        }
    }
    document.write(j+" is the number of even numbers");
    document.write("<br>");
    document.write(k+" is the number of odd numbers");
}else if(a==7){
    let myArray= new Array();
    for(let l=0;l<myFace.length+1;l++){
        myArray.push(myFace[l]);
    }
    document.write("<br>");
    document.write(myArray);
}else if(a==8){
    let m = prompt("which do you wish to add? String or Number");
    if(m=="String"){
        let m = prompt("enter the string you wish to add");
    }
    if(m=="Number"){
        let m = Number(prompt("enter the number you wish to add"));
    }
    myArray.push(m);
}else if(a==9){
    myArray.pop();
}else{
    console.log("that is not a question");
} 