// JavaScript is a prototype-based, automatically adds a prototype property to functions upon creation. This prototype object allows attaching methods and properties, facilitating inheritance for all objects created from the function.

// PropTypes are a mechanism in JavaScript, specifically in the context of React, for typechecking the props passed to components. They help developers ensure that components receive props of the correct type, and if not, they provide warnings during development. This can prevent many common bugs associated with passing incorrect data types as props.


// function multipleBy5(num) {
//     return num*5
// }
function multipleBy5(num) {
    this.num = num
    return num*5
}
//Even with the this.num = num; line in the function, the prototype remains empty {} unless you explicitly add properties or methods to it. The use of this inside the function doesn't automatically populate the prototype; it only assigns properties to the object instance when the function is used as a constructor with new

multipleBy5.power = 2 // '.' dot operator is with object, so is function is a object??? => so the answer is the function is function but also be object when we treated like object by using some operation like operator

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype); //Because multipleBy5 is just a regular function without any properties or methods defined on its prototype, the output is {}, indicating that the prototype object is currently empty.


function creatUser(username, score) {
    this.username = username
    this.score = score
}

creatUser.prototype.increment = function() {
    // score++ // it will be confused
    this.score++ // jo ayega usko increment kardo, but, but problem is not yet solve
}
creatUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`) // jis ne bhe score pucha hai usko bola do.
}

const chai = new creatUser("chai", 25)
const tea = creatUser("tea", 250)

//if we want to access the property of prototype of any object then we don't have to write like this  "chai.prototype.printMe" => instand of this write like this following code, here prototype ka kaam wo internally hota hai we don't have to write prototype multiple time that is why we write like as follow:---

chai.printMe() //if we don't write the new keyword while create an object then it can't read that property because it will remain as undefined until you use 'new' keyword => "const chai = new creatUser("chai", 25)"


/* ||||| => Important of 'new' - keyword <= |||||

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/


/* 
Here are the notes based on the provided video subtitle content => "agic of Prototype in javascript | chai aur #javascript" :-

### Notes on JavaScript Prototypes

1. **Introduction to Prototypes**
    - Prototypes are a fundamental concept in JavaScript that allow objects to inherit properties and methods from other objects.
    - Understanding prototypes is crucial for grasping inheritance in JavaScript.

2. **Significance of the 'new' Keyword**
    - The 'new' keyword is used to create new objects and is essential for understanding how prototypes work.
    - It creates a new object and sets the prototype of that object to the constructor's prototype.

3. **Objects and Functions**
    - In JavaScript, functions can behave like objects, and objects can have properties that function like methods.
    - This duality allows for flexible programming patterns.

4. **Incrementing Values in Functions**
    - Managing values within functions, including incrementing scores and handling conflicts in object properties, is vital for effective programming.
    - Properly passing values and resolving conflicts ensures smooth execution.

5. **Creating New Objects**
    - The process of creating new objects using the 'new' keyword and understanding prototype properties is crucial.
    - Constructor functions and classes can be used to instantiate objects.

6. **Object Declaration and Access**
    - Declaring objects and accessing their properties is a key aspect of JavaScript programming.
    - Objects can be declared within other objects, allowing for complex structures.

7. **Inheritance and Prototyping**
    - Understanding inheritance and prototyping is essential for accessing properties and methods effectively.
    - Proper property access and management are critical for efficient coding.

8. **Method Access within Classes**
    - Accessing properties and methods within classes simplifies code functionality.
    - Utilizing inheritance and method access enhances code efficiency.

9. **Practical Implementation**
    - Emphasizing the importance of syntax and practical implementation of object-oriented programming concepts.
    - Understanding how to use setter and getter methods for effective property management.

10. **Conclusion**
    - Mastering prototypes and inheritance in JavaScript is essential for building robust applications and improving coding practices.

These notes summarize the key points discussed in the video regarding JavaScript prototypes and their significance in programming.

*/