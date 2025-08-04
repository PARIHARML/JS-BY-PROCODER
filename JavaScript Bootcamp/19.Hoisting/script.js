
// Very important Topic HoisTing in JavaScript //

// debugger

    // console.log(a); // hoisted to hota  hai but initilize nahi hota (const and let) ke case me isliye wo TDZ(Temporal dead ZOne) me chala jata hai Js daal deta hai ,isliye error deta hai we cant access before initialization but Var ke case me TDZ me ni jata ha Isliye OUTPUT deta Undefine.

    
    // var a = "NaveenSingh"  
    // const a = "NaveenSingh"
    // hi()
    
    // function hi(){  // Function declaration //
        
    //     // console.log("Hello World!!!");
    //     console.log(a);
    //     // const a = "NaveenSingh"
    //     // let a = "NaveenSingh"
    //     var a = "NaveenSingh"   // its appers like javaScript declear the var (var a;) ko top of the console.log(a); so thats why hm kahte var get hoisted and after that it seems like var a; and print (undefined) but its not true. actually whole code of function hi()..ko already memory mil jaati hai memory creation phase pe .
        
    // }
 
// whoAreYou()

// var whoAreYou = function(){ // Function Expression because (= equal to sign laga hai) // // But Both Are Function Definition //

//     console.log("Nahi Batauga😂"); // without (NAME AND assigned) function called anonymous function but when we assign into variable to usko ek Naam Mil jata Hai . // (IIFE => immediately invoked function expression )
// }


// f1()

// function f1(){
  
//     console.log(a);
//     // let a = "NaveenSingh"
//     var a = "NaveenSingh"
//     // a = "AdarshSingh"
//     // let b = "AdarshSingh"
//     // const b = "AdarshSingh"
    
// }

//  f1() // in the case function expression of we cant call a function at above(uupar call nai kar skte hain because during the time we call f1() wo kewl declear hua  hai initilize ni hua hai to error dega f1 is not a function but (let aur c0nst ke case) me error aayegi  Cannot access 'f1' before initialization kyu value unavailable hai kewl declear se kaam nahi chalega usme value assign honi chaiye )
var f1 = function(){
    console.dir(a);
    var a = "NaveenSingh" 
}
f1() 

