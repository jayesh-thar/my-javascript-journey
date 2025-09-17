"use strict";   //treat all JS codeas newer version or newer JS

// alert(3+3)   // we are using nodeJS, not browser, so we can write this code in "VS-code editor"

let name = "Jayesh"
let age = 19
let isLoggedIn = false

// DATATYPE IN JS :- 

// *** 1] primitive:- 

// number => numeric value // range => 2^53
// bigint => for big numbers 
// string => character
// boolean => true or false // a logical entity having two values, called true and false
// null  => standalone value // an intentional absence of any object value.
// undefined => not defined but it is own datatype or Any variable that has not been assigned a value has the value undefined
// symbol => unique // set of all non-String values that may be used as the key of an Object property // Each possible Symbol value is unique and immutable.

// 2] Non-primitive:-
// object, array and etc...

console.log(typeof name) // to find what type of datatype is defined to name
console.log(typeof "Jayesh") // string datatype
console.log(typeof 19) // number datatype

console.log(typeof undefined) // undefined datatype
console.log(typeof null) // null is object datatype 