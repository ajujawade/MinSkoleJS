// Strings and Template Literals
const firstName = 'Ram';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const ram = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(ram);

const ramNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(ramNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


////////////////////////////////////
// Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
    console.log('Sarika can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarika is too young. Wait another ${yearsLeft} years :)`);
}

const birthofYear = 2012;

let century;
if (birthofYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

/*
"Emma and Liam are competing in a sprint race, and they want to compare their average speeds. The average speed is calculated using the formula: Average Speed = distance / time. (distance in meters and time in seconds).

Store Emma's and Liam's distances covered and time taken in variables.
Calculate both their average speeds using the formula.
Print a nice output to the console, saying who has the higher average speed. The message can be either "Emma's average speed is higher than Liam's!" or "Liam's average speed is higher than Emma's!"
Use a template literal to include the average speed values in the outputs. Example: "Emma's average speed (8.33 m/s) is higher than Liam's (7.69 m/s)!"
TEST DATA 1: Emma covers 800 meters in 60 seconds. Liam covers 700 meters in 55 seconds."
*/

// Solution :

// Test Data 1
const distanceEmma = 800; // Emma's distance covered in meters
const timeEmma = 60; // Emma's time taken in seconds

const distanceLiam = 700; // Liam's distance covered in meters
const timeLiam = 55; // Liam's time taken in seconds

// Calculate average speed for Emma and Liam
const speedEmma = distanceEmma / timeEmma;
const speedLiam = distanceLiam / timeLiam;

// Determine who has a higher average speed
if (speedEmma > speedLiam) {
    console.log(`Emma's average speed (${speedEmma.toFixed(2)} m/s) is higher than Liam's (${speedLiam.toFixed(2)} m/s)!`);
} else if (speedLiam > speedEmma) {
    console.log(`Liam's average speed (${speedLiam.toFixed(2)} m/s) is higher than Emma's (${speedEmma.toFixed(2)} m/s)!`);
} else {
    console.log("Both Emma and Liam have the same average speed!");
}

// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Ram'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Ram'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}