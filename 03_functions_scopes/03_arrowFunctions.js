//this keyword: refers to current context

const user = {
    username: "jayesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to Website`);
    }

}

user.welcomeMessage()
user.username = "Jayesh Thar" //here we change current context.
user.welcomeMessage()

//brower - global object => window object

//Arrow function

// function chai() {
//     let username = "jayeshthar"
//     console.log(this);
//     // console.log(this.username); //no this in function
// }
// chai()


// const chai = function() {
//     let username = "jayesh thar"
//     console.log(this.username);
// }
// chai()


const chai = () => {
    let username = "jayesh thar"
    console.log(this.username);
    console.log(this);
}
chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4, 5));

//Implicite return => mai mai leta hu no need to write. but in explicite we have to write return keyword.

// const addTwo = (num1, num2) =>  (num1 + num2)

// console.log(addTwo(4, 1));

//object return

const addTwo = (num1, num2) =>  {username: "jayesh"}
console.log(addTwo(4, 6));

//we have to warp the object into ()

const addTwoo = (num1, num2) =>  ({username: "jayesh"})
console.log(addTwoo(4, 6));







