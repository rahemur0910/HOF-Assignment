/*Filtering and Capitalizing: Books Published After 2010 with Author Names.
Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.*/
/*---------------------------------------------------*/
// sample list of book with author and publication

const booksList =
[
    {titel: "Book 1", author: "author 1", year: 2000},
    {titel: "Book 2", author: "author 2", year: 2002},
    {titel: "Book 3", author: "author 3", year: 2023},
    {titel: "Book 4", author: "author 4", year: 2006},
    {titel: "Book 5", author: "author 5", year: 2008},
    {titel: "Book 6", author: "author 6", year: 2010},
    {titel: "Book 7", author: "author 7", year: 2012},
    {titel: "Book 8", author: "author 8", year: 2014},
    {titel: "Book 9", author: "author 9", year: 1998},
    {titel: "Book 10", author: "author 10", year: 2016},
];

// Funtion to capitalize author name

function capitalizeAuthorName(authorName)
{
    return authorName.replace(/\b\w/g, (char) => char.toUpperCase());
    //`/\b` matches a word boundary
    //`\w` matches any word character
    //`/g` is a global flag
    // `/\b\w/g` is a regular expression that matches and captures the first character of each word in a string. It will not match spaces or punctuation, only the first letter of each word.
}

// Filter and process the books.

const filteredAndCapitalizedBooks = booksList.filter((book) => book.year >=2010).map((book) => ({
        titel: book.titel,
        author: capitalizeAuthorName(book.author),
        //The filter method is used to filter the booksList array based on a condition. 
        //The map method is then used to create a new array by transforming the filtered books
}));

console.log(filteredAndCapitalizedBooks);

