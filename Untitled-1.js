let a = prompt("Did you do higher or ordinary level?");
let b = prompt("enter your grade, eg:H1 or O1");

switch(a){
case 'higher':
    switch(b){
    case 'H1':
        console.log("100 points");
        break;
    case 'H2':
        console.log("88 points");
        break;
    case 'H3':
        console.log("77 points");
        break;
    case 'H4':
        console.log("66 points");
        break;
    case 'H5':
        console.log("56 points");
        break;s
    case 'H6':
        console.log("46 points");
        break;
    case 'H7':
        console.log("37 points");
        break;
    case 'H8':
        console.log("0 points");
        break;
    default:
        console.log("Grade not recognised");
        break;
    }
    break;
case 'ordinary':
    switch(b){
    case 'O1':
        console.log("56 points");
        break;
    case 'O2':
        console.log("46 points");
        break;
    case 'O3':
        console.log("37 points");
        break;
    case 'O4':
        console.log("28 points");
        break;
    case 'O5':
        console.log("20 points");
        break;
    case 'O6':
        console.log("12");
        break;
    case 'O7':
        console.log("No points");
        break;
    case 'O8':
        console.log("No points");
        break;
    default:
        console.log("Grade not recognised");
        break;
    }
    break;
default:
    console.log("Level not recognised");
    break;
}