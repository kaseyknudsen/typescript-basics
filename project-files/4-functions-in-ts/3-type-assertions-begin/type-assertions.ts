// type Employee = {
//     name: string;
//     job: string;
//   };
  
//   type Manager = {
//     name: string;
//     manages: Employee[];
//   };
  

/*  const myButton: HTMLButtonElement | null = document.querySelector(".main-button"); */
//here we are 'casting' myButton to HTMLButtonElement
const myButton = document.querySelector(".main-button") as HTMLButtonElement
//we can also write it like this:
//const myButton = <HTMLButtonElement>document.querySelector(".main-button")

//you can write an if statement like this:
if (myButton) myButton.click()

let ken: Employee = {
    name: 'Ken',
    job: 'dancer'
}

let john = ken as TeamLead