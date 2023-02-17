function shout(text: string): string {
    return text.toUpperCase()
}

type ShoutFn = (text: string) => string

//function type expression. The shout argument could be anything: t: string, a: string, etc
function scream(text: string, shout: ShoutFn): void {
    console.log(`${shout(text)}!!!!!`)
}

let shoutAgain: ShoutFn;

shoutAgain = (text) => text.toUpperCase()



