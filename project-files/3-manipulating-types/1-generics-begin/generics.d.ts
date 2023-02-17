//this file is only for type declarations, not for logic

export type Employee = {
  name: string;
  job: string;
};

export type Manager = {
  name: string;
  manages: Person<Employee>[];
};

export type Person<PersonType, DateType = string> = {
  createdAt: DateType;
  updatedAt: DateType;
  data: PersonType;
};
