type Employee = {
  name: string;
  job: string;
};

type Manager = {
  name: string;
  manages: Person<Employee>[];
};

//this is a generic. 2nd value in Person object will default to string
//optional type parameters MUST follow required type parameters
type Person<PersonType, DateType = string> = {
  createdAt: DateType;
  updatedAt: DateType;
  data: PersonType;
};

//2nd value will default to string
const tim: Person<Employee> = {
  createdAt: "01/01/2022",
  updatedAt: "01/01/2022",
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
