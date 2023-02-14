const book1 = {
    title: "Atlus Shrugged",
    author: "Ayan Rand",
};
const book2 = {
    title: "1984",
    author: "George Orwell",
    genres: ["sci-fi", "dystopian future"],
    eBook: false,
    readingAge: 18,
};
const book3 = {
    title: "Harry Potter",
    author: "J K Rowling",
    genres: ["fantasy fiction", "high fantasy"],
    eBook: true,
    readingAge: 11,
};
const books = {
    read: [book2],
    notRead: [book3],
    wantToRead: [book1],
};
export {};
// Full list of utility types => https://www.typescriptlang.org/docs/handbook/utility-types.html
