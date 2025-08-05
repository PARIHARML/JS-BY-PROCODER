
                               // SetTimeOut and setInterval //
// debugger
const timer1 = setTimeout('console.log("Hii-1")',1000) //1000 mili-second == 1sec// ye functionality hame browser pradaan krta hai ye javascript means ECMA Script me mention Nah hai AUR setTimeout ek (Higher order function hai) but ye Asynchronous code hai matlb ye memory me kahi jaakar save hota h pahle phir (print== run) hota hai. agr  //  

// const timer4 = setInterval('console.log("Hii-1")',5000)// infinite time "Hii-1" print hota rahega bina koi Thakawat ke😂//

// clearInterval(timer4)

const timer2 = setTimeout('console.log("Hii-2")',0)// if i put zero second ya kuch v put na karu to ye teeno timer me se sb se pahle print hoga but behavior asynchronous hi rahega aue haa normal console.log('helloworld!!!'); ke baad code run hoga aur print hoga //

// const timer3 = setTimeout(a,3000,"NaveenSingh",200,"Adarsh",{},[1,2,3])
// const timer3 = setInterval(a,3000,"NaveenSingh",200,"Adarsh",{},[1,2,3])

// clearTimeout(timer3)

      // now i am Passing Anonymous function inside setTimeout() function //

    setTimeout(function(){
        console.log("Wecome To Duniya of JavaScript");
        
    })

function a(){
    
    console.log(arguments[0]); // ye deprecate ho gaya hai so we need not use//
    console.log( 'Chalo Bolo', 'helloworld!!!');
    console.log('Lo Bol Diya helloworld!!!');
    
}
// a()

console.log("main sab se pahle print houga setTimeout se pahle bhale hi setTimeout() me   time kuch v ho"); // beacuse i am synchronous code mera behavior (synchronous===one task at time) hai means == high priority //
