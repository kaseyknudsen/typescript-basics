//you can end object properties with either a comma or a semi-colon

type Book = {
  title: string;
  author: string;
  genres: string[];
  eBook: boolean;
  readingAge?: number;
};

//partial indicates generic
//Partial is function name, angle brackets are parenthesis, Book is an argument
//Partial treats each property as optional
const book1: Partial<Book> = {
  title: "Atlas Shrugged",
  author: "Ayn Rand",
};

const book2: Book = {
  title: "1984",
  author: "George Orwell",
  genres: ["sci-fi", "dystopian future"],
  eBook: false,
};

//required utility type
//required will override the ? (optional property type)
const book3: Required<Book> = {
  title: "Getting Things Done",
  author: "David Allen",
  genres: ["self-help", "self-improvement"],
  eBook: true,
  readingAge: 18,
};

const book4: Readonly<Book> = {
  //you can also use the readonly keyword before an individual property
  //readonly title: string
  title: "Harry Potter",
  author: "JK Rowling",
  genres: ["fantasy fiction", "high fantasy"],
  eBook: true,
  readingAge: 11,
};

//book4.title = "LOTR" will give us an error because of the Readonly type

type PartialBook = Partial<Book>;

type Books = Record<string, PartialBook[]>;

//record utility type: left side of the object properties must be of type string,
//and the right side must be of type Book
const books: Books = {
  read: [book2],
  notRead: [book4],
  wantToRead: [book1],
};
