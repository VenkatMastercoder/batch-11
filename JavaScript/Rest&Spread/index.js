/**
 * 1. Spread : UnPack
 *
 * 2. Rest : Pack - Array
 */

// Array
// 1. Spread: Unpack the element into individual Element

let arr1 = [1, 2, 3];
// console.log(...arr1); // 1 2 3

// Copy
let arr2 = [...arr1, 4, 5, 6]; // [1,2,3,4,5,6]
// console.log(arr2);

// Concatenation
let arr3 = [...arr1, ...arr2]; // arr1+arr2 = [1,2,3,1,2,3,4,5,6]
// console.log(arr3);

// Object
let person1 = { name: "Sam", age: 1 };

let person2 = { ...person1 }; // { name:"Sam", age:1 }
// console.log(person2);

// Concatenation
let person3 = { ...person1, city: "Chennai" }; // { name:"Sam", age:1, city:"Chennai" }
// console.log(person3);

// Spread with Function
// parameter
function add(a, b, c, ...rest) {
  console.log(a);
  console.log(rest);
}

let val = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Arg

add(...val);

/**
 * Rest - Pack element into Array
 * Note : always at last [A rest parameter must be last in a parameter list.]
 */

function sub(a, b, ...rest) {
  console.log(a - b);
  console.log(rest);
}

let val2 = [2, 2, 3, 4, 5, 6, 7, 8, 9]; // Arg

sub(...val2);

// String Methods

let names = "Car🚗Bike ";

// Help in Give Length [ 1 ]
console.log(names.length);

// In Form of Array
console.log(names.split("-"));

// Upper
console.log(names.toUpperCase());

// Lower
console.log(names.toLowerCase());

console.log(names.includes("🚗"));

console.log(names.trim());

// 1. Array Desturturing [ OnFly ]

let numArr = [1, 2, 3, 4];

// Index
console.log(numArr[2]);

let [a, b, c, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a, rest);

// 2. Object Desturting

let obj = { name: "dog", age: 1 };

// 1. Dot
console.log(obj.name);

// 2. Bracket
console.log(obj["name"]);

let { age } = { name: "dog", age: 1 };

console.log(age);
