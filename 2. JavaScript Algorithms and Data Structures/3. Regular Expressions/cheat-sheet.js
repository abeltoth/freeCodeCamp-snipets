let testStr = "freeCodeCamp";
let testRegex = /Code/; // True if the string is substring (case sensitive)
testRegex.test(testStr); // Returns true

let petRegex = /dog|cat|bird|fish/; // Find multiple values (true if at least one is substring)

/asddas/i // Ignores te case of the substring

"Hello, World!".match(/Hello/); // Returns ["Hello"]

let testStr = "Repeat, repeat, Repeat";
let repeatRegex = /Repeat/gi;
testStr.match(repeatRegex); // Returns ["Repeat", "Repeat", "Repeat"]

let unRegex = /.un/; // . Matches every character

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);

// /[^aeiou]/gi matches all characters that are not a vowel

// /^asd/ searches for asd at the begining of the string
// /asd$/ searches for asd at the end of the string

// + is to find 1 or more characters
// * is to find 0 or more characters
// {} is to find custom number of characters

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/g;
text.match(myRegex); // Returns [ '<h1>', '</h1>' ] and not [ '<h1>Winter is coming</h1>' ] because of ?
// ? is for lazy seaching (info above)
// \w matches [A-Za-z0-9_] all letter number and _
// \W matches [^A-Za-z0-9_] opposite of above
// \d matches [0-9] single digit between 0-9
// \D matches [^0-9] opposite of above
// \s matches whitespace
// \S matches non whitespace

let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
// ? makes optional the previous character

// Lookaheads:
// Given the string foobarbarfoo:
lookaheadpositive = /bar(?=bar)/ // finds the 1st bar("bar" which has "bar" after it)
lookaheadnegative = /bar(?!bar)/ // finds the 2nd bar("bar" which does not have "bar" after it)
lookbehindpositive = /(?<= foo)bar/ // finds the 1st bar("bar" which has "foo" before it)
lookbehindnegative = /(?< !foo)bar/ // finds the 2nd bar("bar" which does not have "foo" before it)
mixed = /(?<= foo)bar(?=bar)/ // finds the 1st bar("bar" with "foo" before it and "bar" after it)

// /1 repeats the first capture group /2 the second...etc

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); // Returns "Camp Code"