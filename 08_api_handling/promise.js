// Promise - is an object representing the eventual completion or failure of an asynchronous operation.

const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task: e.g., database calls, cryptography, network requests, etc.
    setTimeout(function() {
        console.log('Async Task is complete');
        resolve(); // Resolve the promise after completing the async task
    }, 1000);
});

// Promise is done; now we have to consume it
promiseOne.then(function() {
    console.log("Promise consumed"); // Handle the resolved promise
});

// Doing this all in one structure
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async Task 2");
        resolve(); // Resolve the promise after async task 2
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved"); // Handle the resolved promise
});

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Jayesh", email: "Jayeshthar1409@gmail"}); // Passing an object as a parameter to resolve
    }, 1000);
});
promiseThree.then(function(user) {
    console.log(user); // Log the resolved user object
});

// Perfect use of resolve and reject with chaining (multiple .then() with .catch())
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // Simulate an error condition
        if (!error) {
            resolve({username: "jay", password: "jay@123"}); // No error, resolve with user data
        } else {
            reject('ERROR: Something went wrong'); // Error occurred, reject with an error message
        }
    }, 1000);
});

promiseFour.then((user) => {
    console.log(user); // Log the resolved user object
    return user.username; // Return the username for the next .then() in the chain
}).then((myUsername) => {
    console.log(myUsername); // Log the returned username from the previous .then()
}).catch(function(error) {
    console.log(error); // Handle any errors that occurred in the promise chain
}).finally(() => console.log("The promise is either resolved or rejected")); // Execute this block regardless of promise outcome


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username: "Mayank", password: "may123"})
        } else {
            reject('Error: JS went wrong')
        }
    }, 1000)
})

// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
// } //here error is that, an async is not handle error by it own so we have write in try and catch block

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error); // grassfully we handle the error.
    }
}
consumePromiseFive()

//example for practices

//from try and actch

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
//getAllUsers()


//from .then , .catch or . finally
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))