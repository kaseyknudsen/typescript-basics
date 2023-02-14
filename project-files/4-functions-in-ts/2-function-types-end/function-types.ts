function shout(text: string): string {
    return text.toUpperCase();
}

type ShoutFn = (text: string) => string;

function scream(text: string, shout: ShoutFn): void {
    console.log(`${shout(text)}!!!!!`)
}

let shoutAgain: ShoutFn;

shoutAgain = (text) => text.toUpperCase();

shoutAgain("hello");

scream("hello again", shout);

/* The line below is used to prevent duplicate variables.
Please don't copy it to thje `=begin` folder */
export {}
