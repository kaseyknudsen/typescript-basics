//interface is very similar to type aliases
/* the difference between interface and type alias is that
interface creates a new named object type, where a type just 
creates an alias. Interfaces always have to have an object. They can't
contain just a single type */

//we are using ES modules, which technically only supports js files, not ts files
//import types from the type declaration file. The type keyword is new
import type { Employee, Manager, Person } from "./generics.d.js";

//this is a generic. 2nd value in Person object will default to string
//optional type parameters MUST follow required type parameters
// type Person<PersonType, DateType = string> = {
//   createdAt: DateType;
//   updatedAt: DateType;
//   data: PersonType;
// };

//2nd value will default to string
const tim: Data = {
  createdAt: "01/01/2022",
  updatedAt: "01/01/2022",
  age: 22,
  data: {
    name: "Tim",
    job: "Security",
  },
};

const jack: Person<Employee, string> = {
  createdAt: "01/01/2022",
  updatedAt: "01/01/2022",
  data: {
    name: "Jack",
    job: "Receptionist",
  },
};

const anna: Person<Manager, Date> = {
  createdAt: new Date(),
  updatedAt: new Date(),
  data: {
    name: "Anna",
    manages: [tim, jack],
  },
};

type SuperString = string;
//you can add properties to interface object after they've been created
// interface AnotherSuperString {name: string}
// interface AnotherSuperString {job: string}
//you can add type aliases to an interface
interface AnotherSuperString {
  data: Employee;
}

type Age = {
  age?: number;
};

interface Data extends AnotherSuperString, Age {
  createdAt: string;
  updatedAt: string;
}
