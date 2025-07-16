"use strict";
// ==== Declaring variables ==========
// type string
let quote = "The greatest glory in living lies not in never falling, but in rising every time we fall.";
let author = "Nelson Mandela";
// type number
let year = 1944;
// type boolean
let isFamous = true;
// type string array
let otherQuotes = [
    "The way to get started is to quit talking and begin doing.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "Life is what happens when you're busy making other plans.",
];
// type number array
let publicationYears = [1940, 1962, 1976, 1983];
// type tuple
let awardsAndYear = ["Best selling author", 1999];
// type enum
var Genre;
(function (Genre) {
    Genre[Genre["Fiction"] = 0] = "Fiction";
    Genre[Genre["NonFiction"] = 1] = "NonFiction";
    Genre[Genre["Mystery"] = 2] = "Mystery";
    Genre[Genre["Romance"] = 3] = "Romance";
    Genre[Genre["Biography"] = 4] = "Biography";
    Genre[Genre["History"] = 5] = "History";
    Genre[Genre["Science"] = 6] = "Science";
})(Genre || (Genre = {}));
let genre = Genre.Mystery;
// type Book
let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    publicationYear: 1988,
    genre: Genre.Fiction,
    isAvailable: true,
};
// type Book array
const books = [book];
// function
function addBook(newBook) {
    books.push(Object.assign({}, newBook));
}
console.log(book);
