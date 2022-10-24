let a = Number(prompt("what question do you want"));
if(a==1){
    //number1
    let b= Number(prompt("enter your number "));
    let c=0
    let d=b
    for(;d>0;c++){
        d=Math.floor(d/10);
    }
    console.log(b+" has "+c+" digit(s)");      
}else if(a==2){
    //number2
    let e= Number(prompt("enter your number"));
    let f= 0
    let g=e
    for(g>0;f++;){
        g=Math.floor(g/10);
    }
    console.log("the first digit is "+ e/Math.pow(10, f-1));
    console.log("last digit is "+e%10);
}else if(a==3){
    //number3
    let h =Number(prompt("enter your number"));
    let i =0
    let g=h
    for(;g>0;){
        i=g%10
        g=Math.floor(g/10);
        if(i==0){
            console.log("zero");
        }else if(i==1){
            console.log("one");
        }else if(i==2){
            console.log("two");
        }else if(i==3){
            console.log("three");
        }else if(i==4){
            console.log("four");
        }else if(i==5){
            console.log("five");   
        }else if(i==6){
            console.log("six");
        }else if(i==7){
            console.log("seven");
        }else if(i==8){
            console.log("eight");
        }else{
            console.log("nine");
        }   
    }   
}else if(a==4){
    //number4
    let j = Number(prompt("enter number 1"));
    let k = Number(prompt("enter number 2"));
    let max = Math.max(j,k);
    for(;(max/j==Math.floor(max/j)&&max/k==Math.floor(max/k))==false;){
        max=max*2
    }
    console.log(max+" is the lcm of "+j+" and "+k);

}else{
console.log("thats not a question");
}