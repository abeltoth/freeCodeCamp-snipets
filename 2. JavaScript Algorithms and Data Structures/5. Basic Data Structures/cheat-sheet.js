// Array
let simpleArray = ['one', 2, 'three', true, false, undefined, null];

let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];

// Reach the first item
simpleArray[0];

const arr = [];
// Add elements
arr.push('a');
arr.unshift('a');
// Remove elements
arr.pop();
arr.unshift();
// Remove from anywhere
arr.splice(2, 2); // Remove 2 elements from the 3rd
// Add to anywhere
arr.splice(2, 0, 'newelement', 'asd'); // Adds newelement, asd to index 3, 4
// Create new sub array with elements of the given array
arr.slice(2, 3);
// Copy full array
newArray = [...arr];
// Combine 2 arrays
array2 = ['asd', 'as', ...arr, 3, 'sdd'];
// Get an index of element
arr.indexOf('asd'); // returns -1 if there is no 'asd'
// Iterate throught an array
arr.every(someFunction); // Calls somefunction to every element of the array, if it returns false the iteration stops
arr.forEach(someFunction); // Iterates throught the arr
arr.map(someFunction); // create a new array by modifying each value of arr
// Check if an elem is in the array
arr.includes('elem');
/* ------------------------------------------------------------------------------------------------------------------ */

const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
};

const obj = {};
// Reach asd item
obj['asd'];

// Add property
obj['eye color'] = 'brown';
// Delete property
delete obj['eye color'];
// Check if obj has a specific property
obj.hasOwnProperty('asd');
'asd' in obj;
// Iterate through keys
for (let user in users) {
    console.log(user);
}
// Reach values when iteration
console.log(users[user]);
// Get all keys as an array
Object.keys(obj);