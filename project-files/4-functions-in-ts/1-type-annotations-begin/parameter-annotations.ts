type Employee = {
  name: string;
  job: string;
};

type Manager = {
  name: string;
  manages: Employee[];
};

/* this is telling typescript that both num1 & num2 should be numbers and the
function should return a number */

type NumOrString = number | string;

// function add(num1: number, num2: number, num3?: NumOrString): number {
//     return num1 + num2
// }

function add(num1: number, num2: NumOrString): number {
  if (typeof num2 === "number") {
    return num1 + num2;
  }

  return num1 + Number(num2);
}

//type narrowing is a way of narrowing down the exact type of our variable

//this is 'truthiness narrowing'
function subtract(num1: number, num2?: number): number {
  if (num2) {
    return num1 - num2;
  }
  return num1 + Number(num2);
}

function job(person: Employee | Manager) {
  if ("job" in person) {
    return person.job;
  } return "This person doesn't have a job."
}
