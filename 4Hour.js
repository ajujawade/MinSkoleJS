// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

const favourite = 23

if (favourite === 23) { // 22 === 23 -> FALSE
    console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Kajal is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Kajal is able to drive!');
} else {
    console.log('Someone else should drive...');
}


/*

"There are two teams, Team A and Team B. They compete in a quiz competition consisting of 3 rounds. The winner with the highest average score wins the title of 'Quiz Champion'!

1. Calculate the average score for each team, using the test data below.
2. Compare the teams' average scores to determine the winner of the competition, and print it to the console. Consider the possibility of a draw if both teams have the same average score.

3. BONUS 1: Add a requirement for a minimum score of 80. With this rule, a team only wins if it has a higher score than the other team and, at the same time, a score of at least 80 points. Use logical operators to test for the minimum score, as well as multiple else-if blocks 😉

4. BONUS 2: Extend the minimum score rule to apply to a draw as well! A draw only occurs when both teams have the same score and both have a score greater than or equal to 80 points. Otherwise, no team wins the 'Quiz Champion' title.

TEST DATA: Team A scores 85, 82, and 88. Team B scores 90, 79, and 85
TEST DATA BONUS 1: Team A scores 75, 90, and 84. Team B scores 80, 85, and 88
TEST DATA BONUS 2: Team A scores 85, 82, and 88. Team B scores 80, 85, and 88"

In this scenario, Team A and Team B compete in a quiz competition with different rounds, and the winner is determined based on their average scores.
*/

// Solution :

// Test Data 1
const scoresTeamA1 = [85, 82, 88]; // Scores for Team A in each round
const scoresTeamB1 = [90, 79, 85]; // Scores for Team B in each round

// Calculate the average score for each team for Test Data 1
const averageScoreTeamA1 = scoresTeamA1.reduce((total, score) => total + score, 0) / scoresTeamA1.length;
const averageScoreTeamB1 = scoresTeamB1.reduce((total, score) => total + score, 0) / scoresTeamB1.length;

// Determine the winner of the competition for Test Data 1
if (averageScoreTeamA1 > averageScoreTeamB1) {
    console.log(`Team A wins the Quiz Champion title with an average score of ${averageScoreTeamA1.toFixed(2)}.`);
} else if (averageScoreTeamB1 > averageScoreTeamA1) {
    console.log(`Team B wins the Quiz Champion title with an average score of ${averageScoreTeamB1.toFixed(2)}.`);
} else {
    console.log(`It's a draw! Both Team A and Team B have an average score of ${averageScoreTeamA1.toFixed(2)}.`);
}

// Test Data 2
const scoresTeamA2 = [75, 90, 84]; // Scores for Team A in each round
const scoresTeamB2 = [80, 85, 88]; // Scores for Team B in each round

// Calculate the average score for each team for Test Data 2
const averageScoreTeamA2 = scoresTeamA2.reduce((total, score) => total + score, 0) / scoresTeamA2.length;
const averageScoreTeamB2 = scoresTeamB2.reduce((total, score) => total + score, 0) / scoresTeamB2.length;

// Determine the winner of the competition for Test Data 2
if (averageScoreTeamA2 >= 80 && averageScoreTeamB2 >= 80) {
    console.log(`It's a draw! Both Team A and Team B have an average score of at least 80.`);
} else if (averageScoreTeamA2 >= 80 && averageScoreTeamA2 > averageScoreTeamB2) {
    console.log(`Team A wins the Quiz Champion title with an average score of ${averageScoreTeamA2.toFixed(2)}.`);
} else if (averageScoreTeamB2 >= 80 && averageScoreTeamB2 > averageScoreTeamA2) {
    console.log(`Team B wins the Quiz Champion title with an average score of ${averageScoreTeamB2.toFixed(2)}.`);
} else {
    console.log(`No team wins the Quiz Champion title.`);
}

// The switch Statement
const day = 'friday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

////////////////////////////////////
// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Ram';
console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator
const legalage = 23;
// legalage >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = legalage >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (legalage >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


/*

"Emily is planning a trip and wants to budget for dining out. In her city, it's customary to tip 15% if the bill value is between $40 and $200. If the bill value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. You're not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final total value (bill + tip). Example: 'The bill was $55, the tip was $8.25, and the total value was $63.25'

TEST DATA: Test for bill values of $55, $30, and $250

HINT: To calculate 15% or 20% of a value, simply multiply it by 0.15 or 0.20, respectively.
HINT: A value X is between $40 and $200 if it's greater than or equal to $40 and less than or equal to $200."

Feel free to use this question for your practice! Let me know if you need further adjustments or assistance.
*/

// Solution :

// Test data
const billValues = [55, 30, 250];

// Calculate the tip using the ternary operator
const tips = billValues.map(bill => bill >= 40 && bill <= 200 ? bill * 0.15 : bill * 0.2);

// Calculate the total value
const totalValues = billValues.map((bill, index) => bill + tips[index]);

// Print the result
for (let i = 0; i < billValues.length; i++) {
    console.log(`The bill was $${billValues[i]}, the tip was $${tips[i].toFixed(2)}, and the total value was $${totalValues[i].toFixed(2)}`);
}