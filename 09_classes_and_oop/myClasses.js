// // ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("jayesh", "chai@gmail.com", "123")
// console.log(chai);
// console.log(chai.password);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//behind the scene // if class ka syntax nahi hota to kaise hota:----------

function Users(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

Users.prototype.encryptPassword = function() {
    return `${this.password}abc`
}
Users.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const tea = new Users("jay", "jay@1409.com", "jay1409")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

//CONCLUSION:- This code demonstrates how to create reusable objects in JavaScript using a constructor function and prototypal inheritance, a common practice before the introduction of the class syntax in ES6. The User constructor initializes username, email, and password properties, while methods like encryptPassword and changeUsername are added to the User.prototype. This approach allows all User instances to share these methods, making the code more memory-efficient and encapsulating functionality for user-related operations. If the class syntax wasn't available, this would be the standard method to achieve similar object-oriented behavior in JavaScript.
