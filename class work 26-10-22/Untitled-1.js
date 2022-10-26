let a = Number(prompt("what question do you want?"));
if(a==1){
    //number1
    let b = Number(prompt("enter your number"));
    let c =0
    let d =b
    for(;d>0;c++){
        d=Math.floor(d/10);
    }
    let e =b
    let f =0
    let g =0
    for(;e>0;){
        f=e%10
        e=Math.floor(e/10);
        g=g+(f**c)
    }
    if(b==g){
        console.log(b+" is an armstrong number");
    }else{
        console.log(b+" is not an armstrong number");
    }
}else if(a==2){
    //number2

}else{
    console.log("that is not a question");
}