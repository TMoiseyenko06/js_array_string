//Task 1
let fruits = ["apple", "banana", "orange"];
fruits.push("grapefuit");

console.log(fruits);

let lastFruit = fruits.pop();
console.log(lastFruit);

//Task 2
let randomNumbers = [1, 2, 5, 7, 3, 2, 5, 4, 7, 3, 3, 6, 9];
let sortedNumbers = randomNumbers.sort();

console.log(sortedNumbers);

//Task 3
let numbers = [3, 1, 5, 2, 4];
numbers = numbers.map((num) => num * 2);
console.log(numbers);

numbers = numbers.filter((number) => number % 2 == 0);
console.log(numbers);

let sum = numbers.reduce((agg,curr) => agg + curr,0);
console.log(sum);
