// not in JS that frequently: range error

const numbers = [3, 4, 5, 8];
numbers.length = 2;
// you should not use most of the time
console.log(numbers)
console.log(numbers.length)
console.log(numbers[20]);

// referance error
console.log(money);
const money = 50;

// syntax error
// for (let i = 0; i < 5 i++) {

// }