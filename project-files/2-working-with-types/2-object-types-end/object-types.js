let game = {
    title: "Super Mario Sunshine",
    genres: ["platformer", "adventure"],
    price: 35,
};
let gameTwo = {
    title: "Super Mario Sunshine",
    genres: ["platformer", "adventure"],
};
console.log(game.price);
let games = [game, gameTwo];
for (const game of games) {
    // console.log((game.price ?? 0) * 100);
    console.log(game.price?.toString());
}
export {};
