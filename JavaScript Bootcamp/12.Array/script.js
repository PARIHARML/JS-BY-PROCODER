// lets Learn About Array

const fruitsCollection = [
  "Apple",
  "Banana",
  "Orange",
  "Papaya",
  { fName: "NAVEEN SINGH" ,lName: "Parihar" , Age:176 },[ 2,4],
];
fruitsCollection[3] = "pumkinseed";
fruitsCollection[13] = "Flexseed"; //index 7 to 12 empty===undefined//
 
fruitsCollection[fruitsCollection.length] = "chiaseed" // adding element in the last//

fruitsCollection.push('Sitafal')// adding element in the last short version//
fruitsCollection.push("Lichi" , "Pineapple" ,"AnaaR" , '',1414)

fruitsCollection.pop() // remove element from Last //

fruitsCollection.middleName = "Singh"//  Array behind the seen Object jaisa hie treat krta hai so we can insert the value but this is not the right way.Ye Kewl just Jugaad 😍

console.log(fruitsCollection);

// fruitsCollection[3] = "Watermelon"
// fruitsCollection[3].length
// console.log([fruitsCollection[3].includes("Watermelon")]);
// console.log([fruitsCollection[3].toUpperCase("Watermelon")]);

// console.log(fruitsCollection,[fruitsCollection[3]]);
