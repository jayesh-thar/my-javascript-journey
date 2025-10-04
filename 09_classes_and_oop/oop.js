//Object literal : property + methods

const user = {
    username: "Jayesh",
    loginCount: 8,
    signedIn: true,

    getUserDetail: function () {
        console.log("Got user detail");
        // console.log(`Username: ${username}`);
        console.log(`Username: ${this.username}`);
        console.log(this); // current contest
        
    }
}
console.log(user.username);
console.log(user.getUserDetail());
console.log(this); // glogal contest mai kuch nai hai but it will be change. Try this log.this in brwoser, where at that current contest have multiple things 

// Construtor function 

//const promiseOne = new Promise() // this was the Construtor function where the 'new' create a new instance thing any changing to the main instance

function User(username, loginCount, isLoggesIn) {
    this.username = username;
    this.loginCount = loginCount
    this.isLoggesIn = isLoggesIn

    this.greeting = function() {
        console.log(`welcome ${this.username}`);
        
    }
    
    //return this //No needed to write but it return by defualt
}
const userOne = new User("Jayesh Thar", 12, true)
const userTwo = new User("Jay", 11, false)

console.log(userOne);
console.log(userOne.construtor);
console.log(userTwo);

// NOTES: 
// 1. when the 'new' keyword is used then a new empty  bject is create which called as instance(instance of that new empty object)
// 2. Construtor function will called at a every new keyword used
// 3. Passing a values as an argumenet with 'this.'

//LEARN MORE ABOUT 'instanceOf' keyword by MDN Docmumentation