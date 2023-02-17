function shout(text) {
    return text.toUpperCase();
}
//function type expression. The shout argument could be anything: t: string, a: string, etc
function scream(text, shout) {
    console.log("".concat(shout(text), "!!!!!"));
}
var shoutAgain;
shoutAgain = function (text) { return text.toUpperCase(); };
scream("Hello Murphy", shout);
console.log("hello!");
