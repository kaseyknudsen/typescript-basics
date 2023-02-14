const language = 'ts';
function add(num1, num2) {
    if (typeof num2 === 'number') {
        return num1 + num2;
    }
    return num1 + Number(num2);
}
function subtract(num1, num2) {
    if (num2) {
        return num1 - num2;
    }
    return num1 + Number(num2);
}
function job(person) {
    if ("job" in person) {
        return person.job;
    }
    return "This person doesn't have a job";
}
export {};
