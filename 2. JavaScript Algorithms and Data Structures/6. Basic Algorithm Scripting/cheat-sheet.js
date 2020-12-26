// From Celsius to Farenheit
function convertToF(celsius) {
    return celsius * 9 / 5 + 32;;
}
convertToF(30);


// Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");


// Factoralize a number
function factorialize(num) {
    return num === 0 ? 1 : num * factorialize(num - 1);
}
factorialize(5);


// Find longest word in string
function findLongestWordLength(str) {
    return str.split(" ").reduce((accumulator, currentValue) => {
        return accumulator.length > currentValue.length ? accumulator : currentValue;
    }).length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");


// Return an array with the max values of the array's subarrays
function largestOfFour(arr) {
    return arr.map((subArr) => {
        return Math.max(...subArr);
    });
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Check if a string ends with a given substring (without endsWith function)
function confirmEnding(str, target) {
    return str.substring(str.length - target.length) === target;
}
confirmEnding("Bastian", "n");


// Repeat a string given times without repeat function
function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
repeatStringNumTimes("abc", 3);


// Slice a string and add ...
function truncateString(str, num) {
    return str.length > num ? str.substring(0, num) + '...' : str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);


// Truth test for the first element of an array
function findElement(arr, func) {
    return arr.find((item) => {
        return func(item);
    });
}
findElement([1, 2, 3, 4], num => num % 2 === 0);


// Check if a value is a boolean
function booWho(bool) {
    return typeof bool === 'boolean';
}
booWho(null);


// Capitalize every word
function titleCase(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}
console.log(titleCase("I'm a little tea pot"));


// Copy array into another array without modifying the original arrays
function frankenSplice(arr1, arr2, n) {
    const arr = [...arr2];
    arr.splice(n, 0, ...arr1);
    return arr;
}
frankenSplice([1, 2, 3], [4, 5, 6].findIndex(), 1);


// Remove all falsy values from an array
function bouncer(arr) {
    return arr.filter(item => item);
}
bouncer([7, "ate", "", false, 9]);


// Get a number position in a "to be sorted" list
function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}
getIndexToIns([40, 60], 50);


// Check if in an array 2 strings are substrings
function mutation(arr) {
    return arr[1].toLowerCase().split("").every(function (letter) {
        return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}
mutation(["hello", "hey"]);


// Split array to a fix sized subarrays within the array
function chunkArrayInGroups(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);