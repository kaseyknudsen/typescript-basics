type Book = {
    title: string,
    author: string,
    genres: string[],
    eBook: boolean,
    readingAge?: number,
}

const book1: Partial<Book> = {
    title: "Atlus Shrugged",
    author: "Ayan Rand",
}

const book2: Required<Book> = {
    title: "1984",
    author: "George Orwell",
    genres: ["sci-fi", "dystopian future"],
    eBook: false,
    readingAge: 18,
}

const book3: Readonly<Book> = {
    title: "Harry Potter",
    author: "J K Rowling",
    genres: ["fantasy fiction", "high fantasy"],
    eBook: true,
    readingAge: 11,
}

type PartialBook = Partial<Book>;
type Books = Record<string, PartialBook[]>

const books: Books = {
    read: [book2],
    notRead: [book3],
    wantToRead: [book1],
}

/* The line below is used to prevent duplicate variables.
Please don't copy it to thje `=begin` folder */

export {}

// Full list of utility types => https://www.typescriptlang.org/docs/handbook/utility-types.html