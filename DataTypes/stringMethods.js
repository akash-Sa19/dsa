let str = "The cunning little fox jumps over the fench, ";

// Returns the character at the specified index of a string.
console.log(str.charAt(1));
console.log(str.indexOf("the"));
console.log(str.lastIndexOf("er"));

console.log(str.length);

// return a unique num for each char
console.log(str.charCodeAt(1));

// return a concatinated string
console.log(str.concat("and eat a lot of graps"));

// return Boolean
console.log(str.includes("The"));

// Searches a string for a match against a regular expression and returns an array of matches.
console.log(str.match("the"));

// Searches a string for a specified value or regular expression and returns a new string where the specified values are replaced.
console.log(str.replace("the", "apple"));

// JavaScript provides a variety of **string methods** that can be used to manipulate strings. Some of the commonly used string methods in JavaScript are:

// - `charAt()`: Returns the character at the specified index of a string.
// - `charCodeAt()`: Returns the Unicode value of the character at the specified index of a string.
// - `concat()`: Joins two or more strings and returns a new string.
// - `includes()`: Checks whether a string contains the specified substring and returns a boolean value.
// - `indexOf()`: Returns the index of the first occurrence of a specified value in a string.
// - `lastIndexOf()`: Returns the index of the last occurrence of a specified value in a string.
// - `length`: Returns the length of a string.
// - `match()`: Searches a string for a match against a regular expression and returns an array of matches.
// - `replace()`: Searches a string for a specified value or regular expression and returns a new string where the specified values are replaced.
// - `search()`: Searches a string for a specified value or regular expression and returns the position of the match.
// - `slice()`: Extracts a part of a string and returns a new string.
// - `split()`: Splits a string into an array of substrings.
// - `substring()`: Extracts the characters from a string between two specified indices and returns a new string.
// - `toLowerCase()`: Converts a string to lowercase letters.
// - `toString()`: Returns the value of a string.
// - `toUpperCase()`: Converts a string to uppercase letters.
// - `trim()`: Removes whitespace from both ends of a string.
// -  trimStart() and trimEnd() -> remove whitespace from a particular direction
//

// For more information on these methods and their usage, you can refer to the following links:

// - [W3Schools](https://www.w3schools.com/js/js_string_methods.asp)
// - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
// - [GeeksforGeeks](https://www.geeksforgeeks.org/javascript-string-methods/)

// I hope this helps!

// Source: Conversation with Bing, 28/1/2024
// (1) JavaScript String Methods - W3Schools. https://www.w3schools.com/js/js_string_methods.asp.
// (2) String - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String.
// (3) JavaScript String Methods - GeeksforGeeks. https://www.geeksforgeeks.org/javascript-string-methods/.
// (4) JavaScript String Reference - W3Schools. https://www.w3schools.com/jsref/jsref_obj_string.asp.
// (5) JavaScript String() Method - W3Schools. https://www.w3schools.com/jsref/jsref_string.asp.

let l = "apple";
console.log(l.substring(1));
