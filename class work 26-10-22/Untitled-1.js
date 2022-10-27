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
    let h= Number(prompt("enter your number"));
    let i=h
    let j=i
    let k=1
    let l=0
    for(;i>0;){
        j=j%10
        for(;j>0;){
            k=k*j
            j--
        } 
        l=l+k
        k=1
        i=Math.floor(i/10);
    }
    if(l==h){
        console.log(h+" is a strong number");
    }else{
        console.log(h+" is not a strong number");
    }
}else{
    console.log("that is not a question");
}