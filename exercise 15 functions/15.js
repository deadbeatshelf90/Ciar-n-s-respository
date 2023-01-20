let a = Number(prompt("enter question number"));
if(a==1){
    let array1 = []
    b = Number(prompt("enter the number of numbers"));
    for(i=0;i<b;i++){
        array1.push(Number(prompt("enter the (next) number")));
    }
    function question1(array1){
        count = 0
        for(k=0;k<array1.length;k++){
            count = count + array1[k]
        }
        mean = count/array1.length
        return mean+" is the mean the array"
    }
    reply = question1(array1);
    document.write(reply);
}else if(a==2){
    array1 = []
    b = Number(prompt("enter the number of numbers"));
    for(i=0;i<b;i++){
        array1.push(Number(prompt("enter the (next) number")));
    }
    function question2(array1){
        array2 = []
        count = 0
        for(c=0;c<array1.length;c++){
            for(d=0;d<array1.length;d++){
                if(array1[c]==array1[d]){
                    count = count + 1
                }
            }
            array2.push(count);
            count = 0
        }
        f=0
        for(e=0;e<array2.length;e++){
            if(array2[e]>f){
                f = array2[e]
            }
        }
        for(g=0;g<array2.length;g++){
            if(f==array2[g]){
                h = g
            }
        }
        array3 = []
        present = false
        for(j=0;j<array2.length;j++){
            for(k=0;k<array3.length;k+2){
                if(array1[j]==array3[k]){
                    present = true
                }else{
                    present = false
                }
            }
            if(present == false){
                array3.push(array1[j]);
                array3.push(array2[j]);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            }
        }
        for(y=0;y<array3.length;y+2){
            z=z+(array3[y]+" appears "+array3[y+1]+" times");
        }
        return z
    }
    reply = question2(array1);
    document.write(reply);  
}else{
    document.write("not a question");
}