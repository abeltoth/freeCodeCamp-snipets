() => { } // Called lambda when passed to another function
// Function that takes lambda function => Higher order function

// No dependence on the state of the program
// Do not make side effects, e.g. return new object instead modifying the original
// Try to not use global values, same input, same output (give all dependencies as arguments instead of global values)

// Pure built in functions:
arr.map();
arr.filter();
arr.slice();
arr.concat();
arr.reduce();
arr.split();
arr.join();
arr.every();
arr.some();

// Impure built in functions
arr.splice();
arr.sort();