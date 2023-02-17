//interface is very similar to type aliases
/* the difference between interface and type alias is that
interface creates a new named object type, where a type just
creates an alias. Interfaces always have to have an object. They can't
contain just a single type */
//this is a generic. 2nd value in Person object will default to string
//optional type parameters MUST follow required type parameters
// type Person<PersonType, DateType = string> = {
//   createdAt: DateType;
//   updatedAt: DateType;
//   data: PersonType;
// };
//2nd value will default to string
const tim = {
    createdAt: "01/01/2022",
    updatedAt: "01/01/2022",
    age: 22,
    data: {
        name: "Tim",
        job: "Security",
    },
};
const jack = {
    createdAt: "01/01/2022",
    updatedAt: "01/01/2022",
    data: {
        name: "Jack",
        job: "Receptionist",
    },
};
const anna = {
    createdAt: new Date(),
    updatedAt: new Date(),
    data: {
        name: "Anna",
        manages: [tim, jack],
    },
};
export {};
