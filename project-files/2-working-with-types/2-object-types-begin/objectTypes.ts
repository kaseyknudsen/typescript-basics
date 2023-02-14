/* type alias is like giving our type a variable name. It's convention
to have the type alias start with a capital letter */
type Game = {
  title: string;
  genres: string[];
  price?: number;
};

let game: Game = {
  title: "Super mario Sunshine",
  genres: ["platformer", "adventure"],
  price: 35,
};

let gameTwo: Game = {
  title: "Super mario Sunshine",
  genres: ["platformer", "adventure"],
};

console.log(game.price);


let games: Game[] = [game, gameTwo];

//nullish coalescing operator. Use this in case there is no price in one of the objects
for (const game of games) {
  //console.log((game.price ?? 0) * 100);
  //optional chaining--add a question mark after price
  console.log(game.price?.toString())
}

type Bike = {
  brand: string;
  model: string;
  price: number;
};

let bike: Bike = {
  brand: "Cannondale",
  model: "Synapse",
  price: 2900,
};

type Dog = {
  name: string;
  breed: string;
  color: string;
  size: string[];
  "year born": number;
};

let dog1: Dog = {
  name: "Murphy",
  breed: "Labradoodle",
  color: "red/blonde",
  size: ["Small", "Medium", "Large"],
  "year born": 2017,
};
console.log(bike.brand);
console.log(`My dog's name is ${dog1.name}. Hi is a ${dog1.breed}, his color is ${dog1.color}, and
his size is ${dog1.size[1]}. He was born in ${dog1["year born"]}.`);

// 2 types of optional types in typescript: parameters & properties. Signifies that the property may or may not exist
//optional properties: add a question mark at end
type Shoes = {
  brand: string;
  model: string;
  year: number;
  size?: string;
};

let runningShoes: Shoes = {
  brand: "Brooks",
  model: "Ghost",
  year: 2022,
};

console.log(runningShoes.brand);
