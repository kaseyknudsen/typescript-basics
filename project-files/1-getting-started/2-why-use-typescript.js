// * 1. Incorrect method access

let animal = 'elephant';
typeof animal;

animal.toUpperCase();

animal = 22;

animal.toUpperCase();
animal.parseFloat();

// * 2. Missing object key

const hero = {
    firstName: 'Kamela',
    lastName: 'Khan',
    age: 17,
};

let message = `Hello ${hero.firstName}`;

message = `Hello ${hero.gender}`;

message = `Hello ${hero.firstNme}`;

// * 3. Early error detection

// Typescript playground -> https://www.typescriptlang.org/play