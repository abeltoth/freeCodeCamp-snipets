function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sum += i;
    }
    return sum;
}
sumAll([1, 4]);


function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


function destroyer(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
};
destroyer([1, 2, 3, 1, 2, 3], 2, 3);


function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);

    return collection.filter(function (obj) {
        return srcKeys.every(function (key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}
spinalCase('This Is Spinal Tap');


function translatePigLatin(str) {
    return str.replace(/^[aeiou]\w*/, "$&way").replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}
translatePigLatin("consonant");


function myReplace(str, before, after) {
    if (/^[A-Z]/.test(before)) {
        after = after[0].toUpperCase() + after.substring(1)
    } else {
        after = after[0].toLowerCase() + after.substring(1)
    }
    return str.replace(before, after);
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


function pairElement(str) {
    const pairs = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C',
    }
    return str.split('').map(el => [el, pairs[el]]);
}
pairElement("ATCGA");


function fearNotLetter(str) {
    for (let i = 1; i < str.length; ++i) {
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}
fearNotLetter("abcdefghjklmno");


function uniteUnique(...arr) {
    return [...new Set(arr.flat())]
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


function convertHTML(str) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}
convertHTML("Dolce & Gabbana");


function sumFibs(num) {
    if (num <= 0) return 0;
    const arrFib = [1, 1];
    let nextFib = 0;
    while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
        arrFib.unshift(nextFib);
    }
    return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}
sumFibs(4);


function sumPrimes(num) {
    let nums = Array.from({ length: num + 1 })
        .map((_, i) => i)
        .slice(2);
    for (let n in nums) {
        nums = nums.filter(val => val == nums[n] || val % nums[n] != 0);
    }
    return nums.reduce((prevSum, cur) => prevSum + cur);
}
sumPrimes(13);


function smallestCommons(arr) {
    // Euclidean algorithm for the greatest common divisor.
    // ref: https://en.wikipedia.org/wiki/Euclidean_algorithm
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    // Least Common Multiple for two numbers based on GCD
    const lcm = (a, b) => (a * b) / gcd(a, b);

    let [min, max] = arr.sort((a, b) => a - b);
    let currentLCM = min;

    while (min < max) {
        currentLCM = lcm(currentLCM, ++min);
    }

    return currentLCM;
}
smallestCommons([1, 5]);


function dropElements(arr, func) {
    return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
}
dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
});


function steamrollArray(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
steamrollArray([1, [2], [3, [[4]]]]);


function binaryAgent(str) {
    return str.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


function truthCheck(collection, pre) {
    return collection.every(obj => obj[pre]);
}
truthCheck(
    [
        { user: "Tinky-Winky", sex: "male" },
        { user: "Dipsy", sex: "male" },
        { user: "Laa-Laa", sex: "female" },
        { user: "Po", sex: "female" }
    ],
    "sex"
);


function addTogether(first, second) {
    if (typeof first !== "number") {
        return undefined;
    }
    const sum = second =>
        typeof second === "number" ? first + second : undefined;
    return typeof second === "undefined" ? second => sum(second) : sum(second);
}
addTogether(2, 3);


var Person = function (firstAndLast) {
    var fullName = firstAndLast;

    this.getFirstName = function () {
        return fullName.split(" ")[0];
    };

    this.getLastName = function () {
        return fullName.split(" ")[1];
    };

    this.getFullName = function () {
        return fullName;
    };

    this.setFirstName = function (name) {
        fullName = name + " " + fullName.split(" ")[1];
    };

    this.setLastName = function (name) {
        fullName = fullName.split(" ")[0] + " " + name;
    };

    this.setFullName = function (name) {
        fullName = name;
    };
};
var bob = new Person("Bob Ross");
bob.getFullName();


function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr.map(el => {
        return { name: el.name, orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + el.avgAlt, 3) / GM)) };
    });
}
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);