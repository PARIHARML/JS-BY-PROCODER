
                                    // Higher Order Function //

// function a(b){

//     console.log( b, "kya Haal Chaal");
    // console.log(typeof b, "iska type hai");
    
// }   
// a('Nahi-Batauga')                               
// a('chal hattt')                               
// a({username: 'NaveenSingh', age: 25 , City: 'Rewa'})                               
// a([8,4,6,2])  

// console.log(a);
// console.dir(a);  // function behind the seen object hi hota hai we (can know with the help of console.dir(a)) //
// console.dir('Naveen');
// console.dir(123654); // Number ek object nahi hota hai but jS me Number Naam se ek Object hota Hai . //

// debugger

function a(b){   // a is a function which is a higher order function because i am passing function inside it. isliye a ek higher order function ban chuka hai. A higher order function is a function that takes one or more functions as Arguments . OR its return value is a function as a result.//

    // console.log( b);
    console.dir(b);

    b()  // call back Function - function ko hm directly call ni karte hain . A function that is passed as an argument to another function with the intention of being executed later. //
}

// function sayHi(){
// console.log("Haaayiieeeee");


// }
// call back function process start from here.. when we call any function during thats time we pass another fun as an argument ,So passed fun called call back function //
a(function (){                //  Anonymous Function - when we pass function without name as an argument  //
console.log("Haaayiieeeee");  

})

// const x = sayHi   
// x()

// x.age = 25
