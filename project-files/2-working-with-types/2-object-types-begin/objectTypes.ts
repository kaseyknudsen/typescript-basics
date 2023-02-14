/* type alias is like giving our type a variable name. It's convention
to have the type alias start with a capital letter */
type Game = {
  title: string;
  genres: string[];
  price: number;
};

let game: Game = {
  title: "Super mario Sunshine",
  genres: ["platformer", "adventure"],
  price: 35,
};

let gameTwo: {
  title: string;
  genres: string[];
} = {
  title: "Super mario Sunshine",
  genres: ["platformer", "adventure"],
};

console.log(game.price);


type Bike = {
    brand: string;
    model: string;
    price: number;
}

let bike: Bike = {
    brand: 'Canonndale',
    model: 'Synapse',
    price: 2900
}

console.log(bike.brand)