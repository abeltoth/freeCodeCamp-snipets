// Object
let duck = {
    name: "Aflac", //Own properties
    numLegs: 2,
    sayName: function () { return "The name of this duck is " + this.name + "."; }
};

// Constructor
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
let hound = new Dog();

// instanceof checks if an object created with a given constructor
crow instanceof Bird; // => true

Bird.prototype.numLegs = 2; // Adds all bird objects numLegs property and sets it to 2

Bird.prototype = {
    constructor: Bird, // define the constructor property
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

// Object has own or prototype properties
for (let property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

// Constructor property
let duck = new Bird();
console.log(duck.constructor === Bird);  //prints true

Bird.prototype.isPrototypeOf(duck); // returns true

// Create new object with Object.create
let animal = Object.create(Animal.prototype);

// Inheritance
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

// Add custom method:
Bird.prototype.fly = function () {
    console.log("I'm flying!");
};

// Mixins help to reuse code
let flyMixin = function (obj) {
    obj.fly = function () {
        console.log("Flying, wooosh!");
    }
};
flyMixin(bird);
bird.fly(); // prints "Flying, wooosh!"

// Make private variables by defining them in the constructor
function Bird() {
    let hatchedEgg = 10;
    this.getHatchedEggCount = function () {
        return hatchedEgg;
    };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

// Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("Chirp, chirp!");
})();

// With IIFE we can create modules
let motionModule = (function () {
    return {
        glideMixin: function (obj) {
            obj.glide = function () {
                console.log("Gliding on the water");
            };
        },
        flyMixin: function (obj) {
            obj.fly = function () {
                console.log("Flying, wooosh!");
            };
        }
    }
})();
motionModule.glideMixin(duck);
duck.glide();