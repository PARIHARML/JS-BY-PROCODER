// 24. Closures Endgame //

// ( () => {              // IIFE //
//      const a = 10
//      console.log(a);

// })();
// ( (name) => {
//     console.log(`My Name Is ${name}`);
//     // var a = 10

// })("NaveenSingh")

function parent() {
  const a = 10;
//   console.dir(a);

  function child() {
    // const a = 10;
    console.dir(a);
  } return child
}
const result = parent();
console.dir(result);
