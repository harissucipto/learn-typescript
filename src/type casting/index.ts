let leet;

// Later
leet = "1337";

// Use as number
// const number = leet as number;// Error
// console.log(number == 1337) // false
// console.log(number); // '1337'

// so in typescript there is no type casting like in javascript
// but there is a way to do it
const number = +leet; // or Number(leet)

console.log(number === 1337); // true
console.log(number); // 1337
