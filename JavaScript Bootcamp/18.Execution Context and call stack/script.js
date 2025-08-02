// Execution context in Details//

debugger

// sayHi()
// const userName = "NaveenSingH"
// const age      = 25

// function sayHi(){

//     // console.log("haayyiiee");
//     const a = 12
//     const b = 15
//     addTwoNumber(8,9)
    
// }
// function addTwoNumber(x,y){
//     kuchBhi()
//     return x + y;
// }
// function kuchBhi(){
//     console.log("kuchBhi");
    
// }

// Call stack ki help se js engine ko pata chlta hai ki avi line of control kis fuction ke andar hai aur ye LIFO Or FILO Mechanism pe work krta hai //

function whoAreYou(){
    console.log("I Am NaveenSingh");
    whoAreYou()                      // call stack size exceeded here because here function calling itself again and again thats also called RECURSION //
}
 whoAreYou()

console.log("Program Ended!!");
