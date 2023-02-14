const myButton = document.querySelector(".main-button") as HTMLButtonElement;

if (myButton) myButton.click();

// The 'Employee' and 'TeamLead' type aliases are in the 1-generics-end/generics.ts file

let ken: Employee = {
    name: 'Ken',
    job: 'dancer',
}

let john = ken as TeamLead;

/* The line below is used to prevent duplicate variables.
Please don't copy it to thje `=begin` folder */

export {}