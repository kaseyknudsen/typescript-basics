function shout(text) {
    return text.toUpperCase();
}
function scream(text, shout) {
    console.log(`${shout(text)}!!!!!`);
}
let shoutAgain;
shoutAgain = (text) => text.toUpperCase();
shoutAgain("hello");
scream("hello again", shout);
export {};
