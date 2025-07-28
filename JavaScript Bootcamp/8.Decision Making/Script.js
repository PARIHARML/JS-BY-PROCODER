// const userName = 'Naveen singh'
// const userAge      = 18
// const userAge = +prompt('Enter your Age ')// initially age a string so by adding + string converted into number

// console.log(`Name : ${userName}`);
// console.log(`Age : ${userAge}`);

// initially age a string so by adding parseInt() string into pure number."34 kee" it also remove kee part also.

// if(userAge >= 28){

//     console.log(`User Is a working professional.`);

// }
//  console.log('If condition not ran means User Is not a working professional.');

// if (userAge >= 18 && userAge <= 25) {

//     console.log('User Is a Collage Student.');
// }

//  console.log('If condition not ran means User Is not a COLLEGE STUDENT.');
debugger;
const userName = prompt("Enter your Name ") || "ProCoder";
// const userName = prompt("Enter your Name ");
// const userName = ("Enter your Name ");
if (userName) {
  console.log(`Name : ${userName}`);
}

// console.log(`Name : ${userName}`);

const userAge =
  parseInt(prompt("Enter your Age ")) || `${userName} not entered own Age`;
// const userAge = parseInt(prompt("Enter your Age "));
// const userAge = ("Enter your Age ");

if (userAge) {
  console.log(`Age : ${userAge}`);
}

// console.log(`Age : ${userAge}`);

// const userGender =
//   prompt("Enter your Gender ") || `${userName} not entered own Gender`;

// console.log(`Gender : ${userGender}`);

// debugger
// if (!userName) {
// //   console.log("proFrontend-Developer");
//     userName = 'proFrontend-Developer'
// }
// console.log(`Name : ${userName}`);
//  else {
//   console.log(`${userName} you Are Learning-WebDevelopment`);
// }

// if (!userAge) {
// //   console.log(`Age : please Enter your age`);
//     userAge = 'Please Enter your Age'
// }
// else {
//   console.log("Your Role : Congratulation!! You Selected As a  Frontend-Developer");
// }
// console.log(`Name : ${userName}`);
// console.log(`Age : ${userAge}`);
// if (0)//condition check ni hogi yaha par
//      {
//   console.log("hello");
// }
// else {
//   console.log("World");
// }

if (userAge >= 25 && userAge <= 50) {
  console.log(`${userName}  Is a working professional.`);
} else if (userAge >= 18 && userAge <= 24) {
  console.log(`${userName} Is a Collage Student.`);

  if (userAge >= 20) {
    console.log(`${userName} Age is Above 19 `);
  } else {
    console.log(`${userName} Age is Below 20 `);
    if (userName.length > 5) {
      console.log(`${userName} your Name has More than 5 Character`);
      console.log(`${userName} Total Character of your Name is : ${userName.length} Character`);
    } else {
      console.log(`${userName} your Name has Less than 5 Character`);
      console.log(`${userName} Total Character of your Name is : ${userName.length} Character`d);
    }
  }
} else if (userAge >= 5 && userAge <= 17) {
  console.log(`${userName} Is a School Student.`);
} else if (userAge >= 0 && userAge <= 4) {
  console.log(`${userName} Is a Little Baby.`);
} else
  console.log(`If Any condition not ran means ${userName} Is not a STUDENT.`);

console.log("Your Code Ended!!");
