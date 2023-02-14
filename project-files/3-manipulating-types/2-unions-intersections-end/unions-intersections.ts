let id: string | number;

id = 1;
id = '12';

type CanDrive = string | number | boolean;
let canDrive: CanDrive;

canDrive = 'yes';
canDrive = 0;
canDrive = true;

let ids: (string | number)[];

ids = [1, 'two', 3, 'four'];


type TeamLead = Employee & Manager;

// The 'tim' and 'jack' variables are in the 1-generics-end/generics.ts file
const jim: TeamLead = {
    name: 'Jim',
    job: 'Lead',
    manages: [tim, jack]
}

// type StringNum = string & number;

// let test5: StringNum;

// test5 = 20;

id = 5;
const singleIds = id.split('');


/* The line below is used to prevent duplicate variables.
Please don't copy it to thje `=begin` folder */
export {}
