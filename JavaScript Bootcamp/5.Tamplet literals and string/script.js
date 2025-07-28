const message = "Naveen singh"

// const capitalMessage = "Naveen singh".toUpperCase();
const upperCaseMessage = message.toUpperCase();
const lowerCaseMessage = message.toLowerCase();

const faltuSpace = "   Aur    Kya     Haal      Chaal   ";

const hataoFaltuSpace = faltuSpace.toUpperCase().trim().indexOf("H");
// const searchWords = faltuSpace.trim().toUpperCase().includes('KYA')
const searchWords = faltuSpace.trim().toUpperCase().replace('AUR', 'Batao')
 
const lastFourDigit = "1236"
const bankBalance   = 9990
const maskedAccountNumber = lastFourDigit.padStart(15, "*")

console.table(['word is present at indexOf =',hataoFaltuSpace]);
console.table(['word is present =', searchWords]);

// lets learn about template literals
const templateString = `Last four digit of My account number is ${lastFourDigit .padStart(15, "*")}. `

const myAccoutBalance = `I have $${bankBalance} in my Account at current Time `
console.table(['Result =', templateString]);