// Initialize a string with some trailing spaces
let myName = "jayesh     "; 

// Print the length of the string including spaces
console.log(myName.length); // Output: 11

// The line below is commented out as `truelength` is not yet defined here
// console.log(myName.truelength);

// Trim the trailing spaces and print the length of the string
console.log(myName.trim().length); // Output: 6
// The above line trims the string and then calculates the length,
// but it's inconvenient to call this for every string manually.[but ye sab pe sathe use karna hoga like for every string we have to write this code of line.]

// Initialize an array with hero names
let myHero = ["spiderMan", "thor"];

// Create an object `heroPower` with key-value pairs
let heroPower = {
    thor: "hemmer",           // Power associated with Thor
    spider: "sling",          // Power associated with Spider-Man

    // Method to log Spider-Man's power
    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spider}`);
    }
};

// Adding a method to the Object prototype
Object.prototype.jayesh = function() {
    console.log("jayesh is present in all objects");
};

// Adding a method to the Array prototype
Array.prototype.heyJayesh = function() {
    console.log("Jayesh is here");
};

// heroPower.jayesh() //we have to add or inject jayesh() function in prototype
// myHero.jayesh() // here we inject this property to all the function

// Calling the custom method on an array
myHero.jayesh(); // Output: "jayesh is present in all objects"

// Calling the custom method specific to arrays
myHero.heyJayesh(); // Output: "Jayesh is here"

// The following line would throw an error as `heroPower` does not have a method named `heroPower`
// heroPower.heroPower(); 

//# Inheritance Example

// Base object `User`
const User = {
    name: "chai",
    email: "chai@google.com"
};

// `Teacher` object with an additional property
const Teacher = {
    makeVideo: true
};

// `TeachSupport` object with its own property
const TeachSupport = {
    isAvailable: false
};

// `TASupport` object inheriting properties from `TeachSupport`
const TASupport = {
    makeAssingment: 'JS Assingment',
    fullTime: true,
    __proto__: TeachSupport // Access `TeachSupport` using "__proto__"
};

// Establishing inheritance between `Teacher` and `User`
Teacher.__proto__ = User; // Now `Teacher` has access to `User` properties

//@Modern Syntax for setting prototype:-
Object.setPrototypeOf(TeachSupport, Teacher); // Set `Teacher` as the prototype of `TeachSupport`

// Initialize another string with trailing spaces
let anotherUserName = "ChaiAurCode       ";

// Add a custom method to the String prototype to trim and calculate true length
String.prototype.truelength = function() {
    console.log(`${this}`); // Prints the original string ////referance he chaiAurCode ka tha
    console.log(`True length is: ${this.trim().length}`); // Prints the length after trimming
};

// Using the new `truelength` method on different strings
anotherUserName.truelength(); // Output: "ChaiAurCode", "True length is: 11"
"jayesh".truelength(); // Output: "jayesh", "True length is: 6"
"iceTea".truelength(); // Output: "iceTea", "True length is: 6"
// By adding the `truelength` method to the String prototype, we no longer need
// to write `trim()` manually for each string.
// [so first mean at the top of the code we write trim() function for each and every string, but know we don't have to write for allthe string.]

// -----> Conclusion: <------

// The code above demonstrates how prototypes in JavaScript allow us to add properties
// and methods to existing objects and types, making them available to all instances of those objects.
// This is a powerful feature for extending functionality without modifying the original object or type.
