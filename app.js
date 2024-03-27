console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let number = 1; number <= 100; number++) {
    if (number % 2 !== 0) {
        console.log(number);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (number % 3 === 0) {
        console.log('FIZZ');
    } else if (number % 5 === 0) {
        console.log('BUZZ');
    } else {
        console.log(number);
    }
}
// Exercise 3
let numberW = 1;
while (numberW <= 100) {
    if (numberW % 2 !== 0) {
        console.log(numberW);
    }
    numberW++;
}
let numberDW = 1;
do {
    if (numberDW % 2 !== 0) {
        console.log(numberDW);
    }
    numberDW++;
} while (numberDW <= 100);
let number = 1;
while (number <= 100) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (number % 3 === 0) {
        console.log('FIZZ');
    } else if (number % 5 === 0) {
        console.log('BUZZ');
    } else {
        console.log(number);
    }
    number++;
}
let numberDW2 = 1;
do {
    if (numberDW2 % 3 === 0 && numberDW2 % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (numberDW2 % 3 === 0) {
        console.log('FIZZ');
    } else if (numberDW2 % 5 === 0) {
        console.log('BUZZ');
    } else {
        console.log(numberDW2);
    }
    numberDW2++;
} while (numberDW2 <= 100);
// Exercise 4
let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);

let found = false;

for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log("Found value!");
        found = true;
        break;
    }
}

if (!found) {
    console.log("Did not find value");
}
// Bonus Exercise
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100);

for (let i = start; i <= end; i++) {
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
        console.log('FIZZBUZZ');
    } else if (i % fizzDivisor === 0) {
        console.log('FIZZ');
    } else if (i % buzzDivisor === 0) {
        console.log('BUZZ');
    } else {
        console.log(i);
    }
}