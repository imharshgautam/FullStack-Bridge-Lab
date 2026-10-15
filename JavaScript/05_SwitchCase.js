// switch case

let day = 5;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}   


console.log(typeof day); // number

// use of switch case insted of if else?
// switch case is used when we have multiple conditions to check and we want to execute different code blocks based on the value of a variable.
// It is more readable and easier to manage than multiple if-else statements, especially when there are many conditions to check.

