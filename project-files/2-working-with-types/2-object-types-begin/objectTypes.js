"use strict";
let game = {
    title: "Super mario Sunshine",
    genres: ["platformer", "adventure"],
    price: 35,
};
let gameTwo = {
    title: "Super mario Sunshine",
    genres: ["platformer", "adventure"],
};
console.log(game.price);
let games = [game, gameTwo];
//nullish coalescing operator. Use this in case there is no price in one of the objects
for (const game of games) {
    //console.log((game.price ?? 0) * 100);
    //optional chaining--add a question mark after price
    console.log(game.price?.toString());
}
let bike = {
    brand: "Cannondale",
    model: "Synapse",
    price: 2900,
};
let dog1 = {
    name: "Murphy",
    breed: "Labradoodle",
    color: "red/blonde",
    size: ["Small", "Medium", "Large"],
    "year born": 2017,
};
console.log(bike.brand);
console.log(`My dog's name is ${dog1.name}. Hi is a ${dog1.breed}, his color is ${dog1.color}, and
his size is ${dog1.size[1]}. He was born in ${dog1["year born"]}.`);
let runningShoes = {
    brand: "Brooks",
    model: "Ghost",
    year: 2022,
};
console.log(runningShoes.brand);
