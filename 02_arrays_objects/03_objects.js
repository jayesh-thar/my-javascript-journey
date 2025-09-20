// Singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Jayesh",
    "full name": "Jayesh Thar",
    [mySym]: "mySymbolKey", //defined symbol in object.
    age: 19,
    location: "Landon",
    email: "jayeshthar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["mon", "tues"]
}

console.log(JsUser.email)   //not good for pratices
console.log(JsUser["email"]) // not used like: (JsUser[email])
// console.log(JsUser."full name") => not used like this
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(JsUser)

JsUser.email = "JayeshThar@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "JayeshThar4002@gmail.com"
console.log(JsUser.email) //After freeze we can change the value but alo there is no error if we change values.


JsUser.greeting = function() {
    console.log("Hello JS user");
}
console.log(JsUser.greeting());
console.log(JsUser.greeting);

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo());




