// debugger
const dayNumber = parseInt(prompt("Enter a Number"))

// if (dayNumber === 0) {
//     console.log("Today is a Sunday");
// } else if (dayNumber === 1) {
//     console.log("Today is a Monday");
// } else if (dayNumber === 2) {
//     console.log("Today is a Tuesday");
// } else if (dayNumber === 3) {
//     console.log("Today is a Wednesday");
// } else if (dayNumber === 4) {
//     console.log("Today is a Thursday");
// } else if (dayNumber === 5) {
//     console.log("Today is a Friday");
// } else if (dayNumber === 6) {
//     console.log("Today is a Saturday");
// } else {
//     console.log("Please Enter valid day number");
// }
debugger
switch(dayNumber){
    case 0 :
        console.log(`your Entered Number iS ${dayNumber} : So Today is a Sunday`);
        break;
    case 1 :
        console.log(`your Entered Number iS ${dayNumber} : So Today is a Monday`);
        break;
    case 2 :
        console.log(`your Entered Number iS ${dayNumber} : So Today is a Tuesday`);
        break;
    case 3 :
        console.log(`your Entered Number iS ${dayNumber} : So Today is a Wednesday`);
        break;
    case 4 :
        console.log(`your Entered Number iS ${dayNumber} : So Today is a Thursday`);
        break;
    case 5 :
        console.log( `your Entered Number iS ${dayNumber} : So Today is a Friday`);
        break;
    case 6 :
        console.log(`your Entered Number iS ${dayNumber} : So Today is a Saturday`);
        break;
    default:
        console.log(`your Entered Number iS ${dayNumber} : So Please Enter valid day number in A Week`);
}
console.log("program ended!!");
