const language: string = 'ts';

type NumOrString = number | string;

function add(num1: number, num2: NumOrString): number {
    if (typeof num2 === 'number') {
        return num1 + num2;
    }

    return num1 + Number(num2);
}

function subtract(num1: number, num2?: number): number {
    if (num2) {
        return num1 - num2;
    }

    return num1 + Number(num2);
}

type Employee = {
    name: string,
    job: string,
}

type Manager = {
    name: string,
    manages: Employee[],
}

function job(person: Employee | Manager) {
    if ("job" in person) {
        return person.job;
    }

    return "This person doesn't have a job";
}

/* The line below is used to prevent duplicate variables.
Please don't copy it to thje `=begin` folder */
export {}