type Game = {
    title: string;
    genres: string[];
    price?: number;
};

let game: Game = {
    title: "Super Mario Sunshine",
    genres: ["platformer", "adventure"],
    price: 35,
}

let gameTwo: Game = {
    title: "Super Mario Sunshine",
    genres: ["platformer", "adventure"],
}

console.log(game.price);

let games: Game[] = [game, gameTwo];

for (const game of games) {
    // console.log((game.price ?? 0) * 100);
    console.log(game.price?.toString());
}

/* The line below is used to prevent duplicate variables.
Please don't copy it to thje `=begin` folder */
export {}