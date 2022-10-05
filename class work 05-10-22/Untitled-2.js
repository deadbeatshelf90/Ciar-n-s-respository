let x = Math.floor(Math.random() *3)+1;

let PlayerImput = prompt("Rock, Paper or Scissors");

switch(PlayerImput){
case 'Rock':
    switch(x){
    case 1:
        console.log("Draw");
        break;
    case 2:
        console.log("Loose");
        break;
    case 3:
        console.log("Win");
        break;
    }
break;
case 'Paper':
    switch(x){
    case 1:
        console.log("Win");
        break;
    case '2':
        console.log("Draw");
        break;
    case '3':
        console.log("Loose");
        break;
    }
break;
case 'Scissors':
    switch(x){
    case '1':
        console.log("Loose");
        break;
    case '2':
        console.log("Win");
        break;
    case '3':
        console.log("Draw");
        break;
    }
break;
default:
    console.log("Not recognised");
}