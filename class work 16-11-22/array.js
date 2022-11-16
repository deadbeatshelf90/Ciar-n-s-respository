let myFace = new Array("tea","coffee",-1,2);
let a = Number(prompt("what question do you want?"));
if(a==1){
    document.write(typeof(myFace[2]));
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
          }  
        }
    }
    let g = 0
    for(let b=0;b<myFace.length+1;b++){
        if(typeof(myFace[b])=="number"||myFace[b]!=f){
            if(myFace[b]>g){
                g = myFace[b]
            }
        }
    }
    document.write(g);
}else{
    console.log("that is not a question");
} 