type Employee = {
  name: string;
  job: string;
};

type Manager = {
  name: string;
  manages: Employee;
};

const tim = {
  createdAt: "01/01/2022",
  updatedAt: "01/01/2022",
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
  createdAt: "01/01/2022",
  updatedAt: "01/01/2022",
  data: {
    name: "Anna",
    manages: [tim, jack],
  },
};
