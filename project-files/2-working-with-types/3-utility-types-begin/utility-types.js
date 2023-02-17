"use strict";
//you can end object properties with either a comma or a semi-colon
//partial indicates generic
//Partial is function name, angle brackets are parenthesis, Book is an argument
//Partial treats each property as optional
const book1 = {
    title: "Atlas Shrugged",
    author: "Ayn Rand",
};
const book2 = {
    title: "1984",
    author: "George Orwell",
    genres: ["sci-fi", "dystopian future"],
    eBook: false,
};
//required utility type
//required will override the ? (optional property type)
const book3 = {
    title: "Getting Things Done",
    author: "David Allen",
    genres: ["self-help", "self-improvement"],
    eBook: true,
    readingAge: 18,
};
const book4 = {
    //you can also use the readonly keyword before an individual property
    //readonly title: string
    title: "Harry Potter",
    author: "JK Rowling",
    genres: ["fantasy fiction", "high fantasy"],
    eBook: true,
    readingAge: 11,
};
//record utility type: left side of the object properties must be of type string,
//and the right side must be of type Book
const books = {
    read: [book2],
    notRead: [book4],
    wantToRead: [book1],
};
