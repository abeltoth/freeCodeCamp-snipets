// 1
function diff(arg1, arg2) {
    return [
        ...arg1.filter(item => !arg2.includes(item)),
        ...arg2.filter(item => !arg1.includes(item))
    ];
}
function sym(...args) {
    return [...new Set(args.reduce(diff))];
}
sym([1, 2, 3], [5, 2, 1, 4]);


// 2
function updateInventory(arr1, arr2) {
    arr2.forEach(newItem => {
        if (!arr1.map(oldItem => oldItem[1]).includes(newItem[1])) {
            arr1.push(newItem);
        } else {
            const oldItemIndex = arr1.map(oldItem => oldItem[1]).findIndex(oldItemName => oldItemName === newItem[1]);
            arr1[oldItemIndex][0] += newItem[0];
        }
    });
    return arr1.sort((a,b) => (a[1] > b[1]) ? 1 : -1);
}
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];
var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
updateInventory(curInv, newInv);


// 3
function permAlone(str) {
    // Create a regex to match repeated consecutive characters.
    var regex = /(.)\1+/;

    // Split the string into an array of characters.
    var arr = str.split("");
    var permutations = [];
    var tmp;

    // Return 0 if str contains same character.
    if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

    // Function to swap variables' content.
    function swap(index1, index2) {
        tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
    }

    // Generate arrays of permutations using the algorithm.
    function generate(int) {
        if (int === 1) {
        // Make sure to join the characters as we create  the permutation arrays
        permutations.push(arr.join(""));
        } else {
        for (var i = 0; i != int; ++i) {
            generate(int - 1);
            swap(int % 2 ? 0 : i, int - 1);
        }
        }
    }

    generate(arr.length);

    // Filter the array of repeated permutations.
    var filtered = permutations.filter(function(string) {
        return !string.match(regex);
    });

    // Return how many have no repetitions.
    return filtered.length;
}
permAlone("aab");


// 4
function pairwise(arr, arg) {
    if (arr.length === 0) return 0;
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        if (pairs.length === 0) {
        pairs.push([{value:arr[i], index:i}]);
        } else {
        for (let j = 0; j < pairs.length; j++) {
            if (pairs[j][0].value === arg - arr[i] && pairs[j].length===1) {
            pairs[j].push({value:arr[i], index:i});
            break;
            } else if (j === pairs.length - 1) {
                pairs.push([{value:arr[i], index:i}]);
                break;
            }
        }
        }
    }
    pairs = pairs.filter(e => e.length === 2).map(e => e[0].index+e[1].index);
    const result = pairs.reduce((a, b) => a + b);
    return result;
}
pairwise([1, 4, 2, 3, 0, 5], 7);


// 5 Put the biggest to the end
function bubbleSort(array) {
let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
}
bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);


// 6 Put the smallest to the begining
function selectionSort(array) {
let n = array.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(array[j] < array[min]) {
                min=j; 
            }
        }
        if (min != i) {
            // Swapping the elements
            let tmp = array[i]; 
            array[i] = array[min];
            array[min] = tmp;      
        }
    }
    return array;
}
selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);


// 7 Go through the array once, insert the new element into the sorted subarray
function insertionSort(array) {
    let n = array.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = array[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < array[j])) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = current;
        }
    return array;
}
insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);


// 8 Separates the array into three subarrays, then calls itself recursively
function quickSort(array) {
    if (array.length === 0) {
        return [];
    } else {
        const pivotValue = array[0];
        // Sort elements into three piles
        let lesser = [];
        let equal = [];
        let greater = [];
        for (let e of array) {
        if (e < pivotValue) {
            lesser.push(e);
        } else if (e > pivotValue) {
            greater.push(e);
        } else {
            equal.push(e);
        }
        }
        return [...quickSort(lesser), ...equal, ...quickSort(greater)];
    }
}


// 9 Split the array in two half then merge them the third sorted array
function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
        return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
}