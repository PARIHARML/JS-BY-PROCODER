// Object in Depth => Non-primitive Data Type
// 1- object Literals
// const user = {
//   fistName: "Naveen Singh",
//   lastName: "Parihar",
//   education: 12 ,
//   age : 24 ,
//   cityName: "Rewa",
//   stateName: " Madhya Pradesh",
// };
// const user2 = {
//   fistName: "Naveen Singh",
//   lastName: "Parihar",
//   education: 12 ,
//   age : 24 ,
//   cityName: "Rewa",
//   stateName: "Madhya Pradesh",
// };

// const userName1 = "";
// const userName2 = "";

// const myName = "Naveen";
// const myLastName = "Parihar";
// const user1 = "Adarsh";
// const user2 = {
//   firstName: "Aakash Singh",
//   Parihar: "SoftwareEngg",
//   Naveen: "Frontend-@-Developer",
//   'Software-@-Engg' : 'Data-@-Scientist'
// };

// console.log(user2.firstName);
// console.log(user2['first' + 'Name']);
// console.log(user2[myLastName]);
// console.log(user2[myName]);
// console.log(user2['Software-@-Engg']);
//  let user1 = {

//    tahsilName :'Raipur',
//   firstName  :'NAVEEN SINGH'
//  }

const user2 = {
  firstName: "Aakash Singh",
  LastName: "Parihar",
  address: {           // Nesting Of Object //
    city: "Rewa",
    pinCode: 486001,
    state: 'Madhya Pradesh'
  },
};
user2.age = 24 // this is the 1st way of adding variable in the object //
user2['is-Student'] = true
user2.mobileNumber = 9109560059
user2.address.villageName = 'Budhiya'

// Object.seal(user2)// no one  can 'delete or update' our object but they can manipulate existing key: value//

Object.freeze(user2) // this is more strong then seal()- Even manipulation not possible // 

console.log('is-Student' in user2); // we can check any key present or not // 





 