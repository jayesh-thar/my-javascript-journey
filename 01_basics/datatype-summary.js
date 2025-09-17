// DATATYPES 
// 1. primitive:- There are 7 types of primitive data type
// String, number, boolean, null, undefined, Symbol and BigInt(for large size of number)

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outSideTemp = null
let userEmail;

//How to use Symbol Datatype 
//examples: 
const id01 = Symbol('123')
const id02 = Symbol('123')

console.log(id01 === id02);  //false //if we are passing same value to it but internaly it can't be same value because of Symbol Datatype 

//How to use BigInt Datatype:-

const BigNumber = 98985137077202005106n // at the need of any big number type 'n' to convert to BigInt 


// 2. non-primitive(Reference):- There are 3 types of non-primitive data type 

//  => Array,  Object, Function

const Heroes = ["Shaktiman", "Nagraj", "Doja"];
let myObj = {
    name: "Jayesh",
    age: "19",
}

const myFuction = function() {
    console.log("Hello World");
}

console.log(typeof Heroes);     // object
console.log(typeof myObj);      // object
console.log(typeof myFuction);  // function