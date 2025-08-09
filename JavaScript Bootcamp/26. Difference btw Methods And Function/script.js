//Difference btw Function And Methods//
// Every Method is a function but every Function is need not to be Methods //

const maths = {
  E: 2.718281828459045,

  add: function (a, b) {
    // object ke andr function ko daal dege aur usko ek key dedege add naam se to ab (key == add ek methods ban jayega . aur method ki value ek anonymous function hai)

    //    return a + b
    //    return a - b
    return a ** b; // Returning a ki power n //
  },
  subtract(a, b) {
    // new method jo ES6 ka part hai. //
    return a - b;
  },

  cube(num) {
    // return num * num * num;
    return num ** 3;
  },
};

// function add(a,b){

//    return a + b
// }
