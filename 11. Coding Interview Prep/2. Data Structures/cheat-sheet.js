// Typed arrays:
// -------------------------------------------------
// Type	                Each element size in bytes -
// -------------------------------------------------
// Int8Array	        1                          -
// Uint8Array	        1                          -
// Uint8ClampedArray	1                          -
// Int16Array	        2                          -
// Uint16Array	        2                          -
// Int32Array	        4                          -
// Uint32Array	        4                          -
// Float32Array	        4                          -
// Float64Array	        8                          -
// -------------------------------------------------
var i8 = new Int16Array(3);
console.log(i8); // Returns [0, 0, 0]
// Create same Int16Array array differently
var byteSize = 6; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
buffer.byteLength; // Returns 6
i8View.byteLength; // Returns 6
console.log(i8View); // Returns [0, 0, 0]
// Typed arrays dont have some methods (like pop(), push()) and Array.isArray() not working on them


// Stack
// Last In First Out (LIFO)


// Queue
// First In First Out (FIFO)
// enqueue() => pushes the element to the tail
// dequeue() => removes and returns an element from the front
// Priority Queue => items has a priority
// Circular Queue => if it is full starts overriding itself (useful for streaming)


// Set
// Contains each element only once
const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
console.log(set1); // output: {1, 2, 3, 5, 0}
console.log(set1.has(1));  // output: true
// We can implement union, intersection, difference, isSuperset (implementations on MDN)
set1.add();
set1.delete();
set1.has();
set1.size;
// From set to array:
var arr = [...set1];


// Map
// Stores key value pairs, iteratable in order, has functions
const map1 = new Map();
map1.set();
map1.get();
map1.has();
map1.delete();
map1.clear();
map1.keys();
map1.values();
map1.entries();
map1.size;


// Hash Table
// Provides a way to fast access values from keys
// Uses hash function to find the actual index from the key
// index calculated from the data itself
// Limited number of hash values, unlimited keys => same index can occur => we can link the values / place them the next available space (open addressing)


// Linked list
// Contains reference to the next (and prev) element
// Dinamic size, better memory usage                +
// Inserting or removing is more performant         +
// No random access of elements                     -
// Slower search                                    -
// Pointers need plus memory                        -


// Tree (can be binary (search))
// Fast search
// Some dynamic tree can balance itself
// More balanced, the operations are more efficient


// Trie Search Tree
// Used to search words, nodes stores chars
// Nodes has a flag that's marks if it is an end of a word


// Binary Heap
// Kind of tree
// Max heap: all parent nodes >= their child nodes
// Min heap: all parent nodes <= their child nodes
// Populate the tree from top to botttom from left to right
// Element order is always fixed => it can stored array like
// Heap sort: Create a heap from an array => make it max(min) heap => swap the first and last element of the array => remove the last element(into a new array)


// Graphs:

// Adjacency List
// A representation of an undirected graph
// Show the element node and the adjacent nodes with the connections
var undirectedG = {
    Node1: ["Node2", "Node3"],
    Node2: ["Node1"],
    Node3: ["Node1"]
};

// Adjacency Matrix
// A representation of a directed graph
// 2 dim array, each nested array has same number of elements as the outer array
// numbers:edges 0: no relationship, 1: relationship
var adjMat = [
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 0]
];

// Incidence Matrix
// Can show directed or undirected graphs
// 2 dim array rows: nodes, cols: edges
// 0: no edge, 1: an edge entering a node, -1: an edge leaving a node
var incMatDirected = [
    [ 0, -1,  1, -1],
    [-1,  1,  0,  0],
    [ 1,  0,  0,  1],
    [ 0,  0, -1,  0]
];


// Breadth-First Search
// Tree search from top to bottom


// Depth-First Search
// Tree search from left to right