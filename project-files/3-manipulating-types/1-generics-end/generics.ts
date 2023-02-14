import type {Employee, Manager, Person} from "./generics.d.js";

const tim: Data = {
    createdAt: '01/01/2022',
    updatedAt: '01/01/2022',
    age: 24,
    data: {
        name: 'Tim',
        job: 'Security'
    }
}

const jack: Person<Employee, string> = {
    createdAt: '01/01/2022',
    updatedAt: '01/01/2022',
    data: {
        name: 'Jack',
        job: 'Receptionist'
    }
}

const anna: Person<Manager, Date> = {
    createdAt: new Date(),
    updatedAt: new Date(),
    data: {
        name: 'Anna',
        manages: [tim, jack]
    }
}

// interface SuperString {name: string};
// interface SuperString {job: string};
interface SuperString {data: Employee};

type Age = {
    age?: number
}
interface Data extends SuperString, Age {
    createdAt: string,
    updatedAt: string,
}

/* The line below is used to prevent duplicate variables.
Please don't copy it to thje `=begin` folder */

export {}