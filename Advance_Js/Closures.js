// Closures: Closure is a function that has access to the parent scope, even after the parent function has closed. But closer are not functions. They are the functions that have access to the parent scope, even after the parent function has closed.

function outer() {
    let count = 4;

    return function inner() {
        count++;
        return count;
    }
    
}
let increment = outer(); // only return the inner function. It will not return the count variable.
console.log(increment());
console.log(increment());
console.log(increment());

//Conclusion: Closure is a function that has access to the parent scope, even after the parent function has closed. But closer are not functions. They are the functions that have access to the parent scope, even after the parent function has closed.

// so as the example show that the inner function has access to the count variable even after the outer function has closed. So, this is the closure.