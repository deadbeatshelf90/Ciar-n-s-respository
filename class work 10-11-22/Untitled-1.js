let a = Number(prompt("enter question number"));
if(a==1){
    let b = Number(prompt("enter dimensions"));
    for(let c=0; c<b; c++){
        for(let d=0; d<b; d++){
            document.write("*" );
        } 
        document.write("<br/>");
    }
}else if(a==2){
    let e = Number(prompt("enter the number of rows"));
    let f = Number(prompt("enter the number of columns"));
    for(let g=0; g<e; g++){
        for(let h=0; h<f; h++){
            document.write("*" );
        }
        document.write("<br/>");
    }
}else if(a==3){
    document.write("<pre>");
    let i = Number(prompt("enter the dimensions"));
    let j = i
    for(let k=0;k<i;k++){
        for(let l=0;l<j;l++){
            if(k==0){
                document.write("*");
            }else if(k==i-1){
                document.write("*");
            }else{
                if(l==0||l==j-1){
                    document.write("*");
                }else{
                    document.write(" ");
                }
            }       
        }
        document.write("<br />");
    }
}else if(a==4){
document.write("<pre>");
let m = Number(prompt("enter dimensions"));
for(let n=0;n<m;n++){
    for(let o=0;o<m;o++){
        if(n==0||n==m-1){
            document.write("*");
        }else if(o==0||o==m-1){
            document.write("*");
        }else if(o==m-n-1){
            document.write("*");
        }else if(n==o){
            document.write("*");
        }else{
            document.write(" ");
        }
    }
    document.write("<br />");
}
document.write("<pre/>");
}else if(a==5){
    document.write("<pre>");
    let p = Number(prompt("enter dimensions"));
    for(let q=0;q<p;q++){
        for(let r=0;r<p;r++){
            while(q<p-1){
                document.write("*")
            }
            document.write("*");
        }
    document.write("<br />");
    }
    document.write("<pre/>");
}