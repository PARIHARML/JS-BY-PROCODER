
// Function - In JavaScript //

// Function is A reusable Piece of Code Tht we Can Use Over And Over Again ///

// console.log("Hye!! I Am Naveen Singh");
// console.log("Hye!! I Am a Frontend Developer");

// function aboutMe(username, profession, age ,city){  // aboutMe(username = "ProCoder") "proCoder" is a default Value//

    // console.log(username);

    // console.log(typeof username);
    // console.log(typeof profession);
    // console.log(typeof age);
    
    
    // console.log(`Hye!! I Am ${username || "ProCoder"}`);     // Function Definition  //
    // // console.log("Hye!! I Am a Frontend Developer");

    // console.log(` I Am a ${profession || 'ParaDoXX'}`);   //  console.log() is not equal to Result of a function ,its return   type is a final output of A Function //

    // console.log(` I Am a Just ${age || 1000 } Year Old`);
    // console.log(` My City Name is ${city || "KYA KAROGE JAAN KAR"}`);
    // console.log('*********************************'); 
    // return "12 lACK KA PACKAGE MILEGA MUJKO ATLEAST"

// }

// const returnValue = aboutMe()            // function calling and saving return vAlue in A variable //

// aboutMe('Naveen Singh', 'Software Engineer', 24, 'REWA')
// aboutMe('Adarsh Singh', 'Mechanical Engineer', 25, 'SATNA')
// aboutMe('Anubhav Singh', 'Civil Engineer', 26, 'KATNI')
// aboutMe()

//  RETURN VALUE IN DEPTH //
debugger

// function addTwoNumber( a , b ){

//     return a + b;
// }

// const result = addTwoNumber( 6 , 3)

// console.log(result);

// write a program to print Square of two number by using function //

// function squareOfTwoNumber( a , b ){

//     return a ** b;
// }

// const result = squareOfTwoNumber( 2 * 2+1, 2 * 2+1)  // as a argument we can pass expression as well inside the function //

// console.log(result);

// const result = squareOfTwoNumber(squareOfTwoNumber(5,1) , squareOfTwoNumber(2,2))

function squareOfTwoNumber( a , b ){

    return a ** b;
}

const result = squareOfTwoNumber(squareOfTwoNumber(5,1) , squareOfTwoNumber(2,2))  // as a argument we can pass Function as well inside the function //

console.log(result);

