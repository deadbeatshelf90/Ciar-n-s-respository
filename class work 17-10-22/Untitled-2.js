//number 1
let n=Number(prompt("enter your number"));
let a=1
for(;a<=n;a+=2){
    console.log(a);
}
//number2
let b=Number(prompt("enter your number"));
let c=1
for(d=1;d<=b;d++){
    c*=d;
}
console.log(c);
//number3
let e = 12345678
for(f=1;f<=4;){
    let g=Number(prompt("enter your number"));
    if(e==g){
        console.log("you win");
        f=f+10
    }
    f++
}
if(f>4){
    console.log("you loose");
}
//number4
let h = Number(prompt("enter your number"));
let i = 0
for(j=1;j<=h;j++){
    i=i+j
}
console.log(i);