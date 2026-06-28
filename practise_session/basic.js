/*
JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. 
    While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. 
    JavaScript is a prototype-based, garbage-collected, dynamic language, supporting multiple paradigms such as imperative, functional, and object-oriented.
*/

// import {sumOfNum} from "./sum.js"; // if deault not used
import sumoooofffftwoooooo from './sum.js'


let a = 10;
console.log(a);

const b = 100;
console.log(b);

var c = 1000000;
console.log(c);

// # Scope:

// 1. Global scope:
// before all are global scope bcz all at top of everything and can access in everywhere in this file

// 2. Block Scope: also called function scope
// block: {...}
//ex: in function variable declered like...
const addition = () => {
  const number_one = 10;
  const number_two = 20;
  console.log("Sum is: " + (number_one + number_two));
};
addition();

// 3. local scope:
// other then global all are local scope
// ex all block scope -> local scope...
// "Local scope is a characteristic of variables that makes them local (i.e., the variable name is only bound to its value within a scope which is not the global scope)."

/*
NOTE's
    var
        Declares a variable, optionally initializing it to a value.

    let
        Declares a block-scoped, local variable, optionally initializing it to a value.

    const
        Declares a block-scoped, read-only named constant.
*/

// ==============================================================
// ==============================================================
// ==============================================================

// Function:
// a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output

function hello() {
  console.log("Hello world");
}
hello();
// with function keyword and can declare directly

// arrow function:
const hellos = () => {
  console.log("hello from  arrow function...");
};
console.log(hellos);
// can't declared directly, want something to store bcz it's a callback

// parameter in function:

function sum(one, two) {
  console.log("Sum: " + (one + two));
}
sum(20, 50);

// object: collection of properties, and a property is an association between a name (or key) and a value

const user = {
  name: "jayesh",
  age: 20,
  city: "Rajkot",
};
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.city);

//passing object in function:

// nested object
const users = {
  user01: {
    name: "jay",
    age: 15,
  },
  user02: {
    name: "jayesh",
    age: 20,
  },
};

function printUser(user) {
  console.log(user.user01.name);
  console.log(user.user02.name);
}
printUser(users);

// arr:

const person = ["jayesh...", "jayesh........"];
console.log(person[0]);
console.log(person[1]);

// lly we can passed arr in function also

// Classes:

// Define a simple class
class Car {
  // Constructor to initialize properties
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  // Method to display car info
  getInfo() {
    return `${this.brand} (${this.year})`;
  }
}

// Create an object (instance) of the class
const myCar = new Car("Toyota", 2022);

// Log the object directly
console.log("Car object:", myCar);

// Log a specific property
console.log("Brand:", myCar.brand);

// Log using the class method
console.log("Car Info:", myCar.getInfo());

/*
    # Execution Context in JavaScript: 
        - The execution context in JavaScript is an abstract environment where code is evaluated and executed. It contains all the information necessary for the JavaScript engine to execute the code, such as variables, functions, and the value of this. There are two primary types of execution contexts:
            1. Global Execution Context (GEC): This is created when the script starts running. It handles code that is not inside any function and sets up the global scope, including variables and functions declared at the top level.
            2. Function Execution Context (FEC): This is created whenever a function is invoked. Each function call generates its own execution context, which is nested within the global or another function's context.


    # Phases of Execution Context Creation
    - The creation of an execution context occurs in two phases:
        1. Creation Phase: The JavaScript engine allocates memory for variables and functions. Variables declared with var are initialized to undefined, while function declarations are stored in memory. The scope chain is established, linking the current context to its parent contexts for variable resolution. The value of this is determined based on the context (e.g., window in the global context or the object invoking a method).
        2. Execution Phase: The code is executed line by line. Variables are assigned their actual values, and functions are executed as needed.

*/


function helloss() {
  console.log("Hello from helloss.... ");
  byebye();
}

function byebye(){
  console.log("Hello from byebye....");
}
helloss()



// Assigning to properties

const userss = {}

userss.name = "jayesh";
console.log(userss);

userss.age = 20;
console.log(userss);


const key = "city" // define 'key'
userss[key] = "Rajkot" // assigning 'value'
console.log(userss);



// Destructuring


// in Array:
const people = ["jayesh", "Divya", "Mayank"];
const [a1, b1, c1] = people;

console.log(people);
console.log(a1);
console.log(b1);
console.log(c1);
// const peoples = people.map((a) => console.log(a)) // mapping


// in function 
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}
greet({ name: "Bob", age: 30 });



// Comma Operation: 
//    for loop, to allow multiple variables to be updated each time through the loop. It is regarded bad style to use it elsewhere, when it is not necessary. Often two separate statements can and should be used instead.

const x1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const y1 = [10, 20, 30, 40, 50]

for(let i=0, j=0; i<=x1.length, j<=y1.length; i++, j++){
  console.log(x1[i], " | ",y1[j])  
}


// typeof:

const myFun = () => 5 + 2;
const shape = "round";
const size = 1;
const foo = ["Apple", "Mango", "Orange"];
const today = new Date();

console.log(typeof myFun);
console.log(typeof shape);
console.log(typeof size);
console.log(typeof foo);
console.log(typeof today);

console.log(typeof doesntExist);



// Date:

const date = new Date();
console.log(date);
console.log(date.getFullYear())
console.log(date.getTime()) // in sec from starting 
console.log(date.setTime(Date.parse("June 28, 2026")))




// then() catch() finally()


fetch("https://jsonplaceholder.typicode.com/posts").then(() => {
  console.log("google...")
}).catch((err) => {
  console.log("err", err) // if url wrong or somewhere like link not exsit then catch with err
}).finally(
  console.log("Done...")
)


// Promise: object return after async function resolve or reject

// const getData = async () => {
//   let data = await fetch("https://jsonplaceholder.typicode.com/posts")
//   console.log(await data.json());
// }
// console.log("Completed...");
// getData();

// Custom Promises:

// function eclosoed by other function and use it's outer variables and all to perform a task


function increament(){
  let count = 1;
  function doingIncrement() {
    console.log(count++)
  }
  return doingIncrement;
}

const countss = increament();
countss()
countss()
countss()
countss()
countss()
countss()

// can keep multiple nested function also..


// At Top import it
// import sumOfNum from "./sum";

console.log("Sum: " + sumoooofffftwoooooo(4, 5))

