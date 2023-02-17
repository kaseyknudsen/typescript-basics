//union type
let id: string | number;

type canDrive = string | number | boolean;

let kaseyDrives: canDrive;

kaseyDrives = 'excellent'

//creates an array that can either have a number or a string inside it
let ids: (string | number)[]

ids = ['kasey', 44, 'murphy', 6]

//intersection types combine types and it's ok if they have the same properties
//this is coming from the generics.ts file
type TeamLead = Employee & Manager

const jim: TeamLead = {
    name: 'Jim',
    job: 'Lead',
    manages: [tim, jack]
}

//these values are primitive and can't be combined (primitive types aren't objects and have no methods or properties)
type StringNum = string & number;

//split method doesn't exist on a type of number
const singleIds = ids.split('')