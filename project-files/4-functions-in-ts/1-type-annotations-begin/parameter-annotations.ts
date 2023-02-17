const language: string = 'ts'

/* this is telling typescript that both num1 & num2 should be numbers and the
function should return a number */

type NumOrString = number | string

function add(num1: number, num2: number, num3?: NumOrString): number {
    return num1 + num2
}