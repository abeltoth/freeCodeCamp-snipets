let
// Cannot redeclare variable
// Block scope only
const UPPERCASE_ONLY = 'a';
// let but read only
// Name with uppercase letters
// Const arrays are mutable
Object.freeze(obj);
// obj will be immutable
() => { }
// if only return value, return and {} can be omitted
// if only single parameter () can be omitted
item => item * 2;
(item = 2) => item * 2 // Default parameter
function howMany(...args) { // Rest parameter
    return "You have passed " + args.length + " arguments.";
}
arr.map(); // Creates a new array with the modified values
arr.filter(); // Creates a new array filtered by the old array
arr.reduce(); // Creates a single value from a string
Math.max.apply(null, arr);
Math.max(...arr); // Spread operator. Value same as above
// Destructuring Assignment
const { name, age } = user; // Create name variable and assign value user.name (same with age)
const { name: userName, age: userAge } = user; // store variables as userName and userAge
// From nested objects:
const { johnDoe: { age: userAge, email: userEmail } } = user;
const [a, b, , , c] = [1, 2, 3, 4, 5, 6]; // a = 1, b = 2, c = 5
[a, b] = [b, a] // It changes the values of a and b
const half = ({ max, min }) => (max + min) // Instead of a full object, only some properties can passed too (In this case the incoming obj has max, min and other properties)
let asd = { x, y } = { x: x, y: y };
// Function in object:
const person = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};
// Classes (just syntax, UpperCamelCase, created with constructor)
class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const zeus = new Book('Jupiter');
// Modules:
<script type="module" src="index.js"></script> // create module from a file
// Export add module
export const add = (x, y) => {
    return x + y;
}
// Default export used when (import foo from "foo";)
export default function () { console.log("hello!") }
// Import add module
import { add } from './math_functions.js';
// Import everything from a module
import * as myMathModule from "./math_functions.js";
// Promise
// 3 state: pending, fulfilled, and rejected.
const myPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("Promise was fulfilled");
    } else {
        reject("Promise was rejected");
    }
});
myPromise.then(result => {
    // do something with the result.
});
myPromise.catch(error => {
    // do something with the error.
});