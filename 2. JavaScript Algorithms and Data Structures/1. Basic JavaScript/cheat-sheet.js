// Comment 1
/* Comment 2 */

/* Data types */
undefined, null, boolean, string, symbol, bigint, number, object

/* Variables */
var ourName = 'Sanyi'; // Not contain space or start with number

/* Case sensitive variables */
ME != me

/* operators */
// +, -, /, *, %, ++, --, +=, -=, *=, /=,

/* Not works with negative numbers */

/* Escape character: \ */
"asd \"das\" da "

// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \r	carriage return
// \t	tab
// \b	word boundary
// \f	form feed

/* Strings are immutable */
"test".length // returns 4

var myArray = ["dsffsd", 33];

myArray.push("asd");
myArray.pop(); // Returns the removed value
myArray.shift(); // Returns the removed value
myArray.unshift("asd"); // Adds to the start of the array

var testObj = {
    'sd': "Namath",
    16: "Montana",
    19: "Unitas"
};

testObj.sd = testObj['sd'];
/* Add properties */
testObj.qqq = 'fsdfsf';
/* Delete properties */
delete testObj.sd;
/* Check if property exist */
myObj.hasOwnProperty("qqq");    // true

Math.random();
Math.floor();
/* Create random number between two values: */
Math.floor(Math.random() * (max - min + 1)) + min;

parseInt("22", 3); // From string to int. Second parameter (radix) shows the decimal system of the int