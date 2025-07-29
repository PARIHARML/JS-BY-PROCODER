
// Array Method

const myFavFruit = [ "Apple", 'Orange','Grapes','Guava']

myFavFruit.push("Mango")

// console.log(myFavFruit[2]);
//  console.log('Orange' in myFavFruit);

// myFavFruit.shift() // Remove  1st Element from Array aur here Js engiene works More because he needs to rearrage array again//

// myFavFruit.unshift('papaya') // adding element in starting of the Array aur here Js engiene works //

const animals = [ 'Dog' , 'Cat' , 'Rat' , 'Rabbit' , 'Lion' , 'cheeta']
const evenNumber = [ 2 , 4 , 6 , 8]

const newAraay = myFavFruit.concat(evenNumber , animals ) // it give us new Array by adding previous array // 

// const newAraay2 = animals.concat(myFavFruit , evenNumber)

myFavFruit.indexOf("Grapes")
evenNumber.indexOf(6)
const isIncluded = myFavFruit.includes('Mango')

// myFavFruit.reverse()

myFavFruit.sort() // alphabetical sort krta hai String ko only if All string  1st letter capital or small //

animals.slice(3)
animals.slice(3,5) // slice apply hone ke baad element ki new array banata hai par original array me iska koi effect ni padta hai //
// animals.splice(3,5) // splice apply hone ke baad element ki new array banata hai par original array me iska effect  padta hai , spliced element ni dikhte hain origin array par//
 
// animals.splice(3,5, 'bhalu', 'leopard','zebra') // jaha se element ko  hata ta hai whahi se  new element ko v add krta ha ye splice  //


 
