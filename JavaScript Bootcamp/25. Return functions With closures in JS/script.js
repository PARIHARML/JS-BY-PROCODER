//Return functions With closures in JS//

//   const a = 5
//   const b = 10
function grandParent() {
  const a = 5;
  function parent() {
    // now parent function become higher order function because higher order function says if any fun takes another fun as an argument or its return value is a function. //

    // const a = 5; // variable jo parent function  ke andr define hota hai aur uska hm child function ke andr use krte hain  means memory share karte hain (Inner fun ke pass outer fun fun ke scope ka access hota With help of lexical scoping yahi to lexical scoping hai )
    const b = 10;
    function child() {
      console.log(a + b);
    }
    return child; // jab hm pura ka pura function hi return kar dete hain to sirf  function return nai hota hai uska poora scope(sirf scope nahi pura lexical scope) v return hota hai thats called closure //
  }
}
// return parent();

const add1 = grandParent();
//   console.log(add1);
console.dir(add1);
