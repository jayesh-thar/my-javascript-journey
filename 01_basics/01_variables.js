// Constants must be initialized when declared and cannot be reassigned.
const accountId = 92301703023;

// Using let to declare variables that can be reassigned.
// let variables have block scope, making them preferable over var.
let accountEmail = "jayeshthar1409@gmail.com";
let accountState; // When declared without a value, it's considered undefined.

// Using var to declare variables (not recommended).
// var variables have function scope and can cause unexpected behaviors in block scope.
var accountPassword = "12345";

// Avoid declaring variables without using let, const, or var. 
// This reserves memory but is considered bad practice.
accountCity = "Rajkot";  

// Reassigning values to let and var variables.
accountEmail = "jayeshthar@gmail.com";
accountPassword = "789456";
accountCity = "Diu";

// accountId = 5623124665; // Error: Assignment to constant variable.

/*
    Avoid using var due to issues with scope handling.
    Prefer const for variables that shouldn't change and let for those that can be reassigned.
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
