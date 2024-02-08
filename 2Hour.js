// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Amit');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Patil';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageRam = now - 1991;
const ageSham = now - 2018;
console.log(ageRam, ageSham);

console.log(ageRam * 2, ageRam / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Rutuja';
const surname = 'Patil';
console.log(firstName + ' ' + surname);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageRam > ageSham); // >, <, >=, <=
console.log(ageSham >= 18);

const isFullAge = ageSham >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const yearnow = 2024;
const ageKajal = yearnow - 1991;
const ageChetan = yearnow - 2018;

console.log(now - 1991 > now - 2018);

let x1, y2;
x1 = y2 = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x1, y2);

const averageAge = (ageKajal + ageChetan) / 2;
console.log(ageKajal, ageChetan, averageAge);


/*
"Emma and Liam are competing in a sprint race, and they want to compare their average speeds. The average speed is calculated using the formula: Average Speed = distance / time. (distance in meters and time in seconds).

Store Emma's and Liam's distances covered and time taken in variables.
Calculate both their average speeds using the formula.
Create a boolean variable 'emmaFaster' containing information about whether Emma has a higher average speed than Liam.
TEST DATA 1: Emma covers 400 meters in 50 seconds. Liam covers 350 meters in 45 seconds.
TEST DATA 2: Emma covers 800 meters in 60 seconds. Liam covers 700 meters in 55 seconds."
*/

// Solution :

// Test Data 1
const distanceEmma1 = 400; // Emma's distance covered in meters
const timeEmma1 = 50; // Emma's time taken in seconds

const distanceLiam1 = 350; // Liam's distance covered in meters
const timeLiam1 = 45; // Liam's time taken in seconds

// Calculate average speed for Emma and Liam for Test Data 1
const speedEmma1 = distanceEmma1 / timeEmma1;
const speedLiam1 = distanceLiam1 / timeLiam1;

// Determine if Emma has a higher average speed than Liam for Test Data 1
const emmaFaster1 = speedEmma1 > speedLiam1;

// Output results for Test Data 1
console.log("Test Data 1:");
console.log("Emma's average speed:", speedEmma1);
console.log("Liam's average speed:", speedLiam1);
console.log("Is Emma faster than Liam?", emmaFaster1);

// Test Data 2
const distanceEmma2 = 800; // Emma's distance covered in meters
const timeEmma2 = 60; // Emma's time taken in seconds

const distanceLiam2 = 700; // Liam's distance covered in meters
const timeLiam2 = 55; // Liam's time taken in seconds

// Calculate average speed for Emma and Liam for Test Data 2
const speedEmma2 = distanceEmma2 / timeEmma2;
const speedLiam2 = distanceLiam2 / timeLiam2;

// Determine if Emma has a higher average speed than Liam for Test Data 2
const emmaFaster2 = speedEmma2 > speedLiam2;

// Output results for Test Data 2
console.log("\nTest Data 2:");
console.log("Emma's average speed:", speedEmma2);
console.log("Liam's average speed:", speedLiam2);
console.log("Is Emma faster than Liam?", emmaFaster2);