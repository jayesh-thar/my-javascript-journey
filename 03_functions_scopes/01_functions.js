// console.log("j");
// console.log("a");
// console.log("y");
// console.log("e");
// console.log("s");
// console.log("h");

function sayMyName() {
    console.log("j");
    console.log("a");
    console.log("y");
    console.log("e");
    console.log("s");
    console.log("h");
}
//sayMyName()

function addTwoNumber(number1, number2){    //(number1, number2) => parameter
    // console.log(number1 +number2);
    
    // let result = number1 + number2;
    // return result;

    return number1 + number2
}

// addTwoNumber()
addTwoNumber(3, 4)  //(3, 4) => argument
// addTwoNumber(3, "4")
// addTwoNumber(3, "a")
// addTwoNumber(3, null)

const result = addTwoNumber(3, 5)
console.log("Result: ", result) // undefined becuase we use console.log which is not return any type of values, therefor don't use console.log 
// if you are returning any values then stored it to any variable not use console.log

function loginUserMessage(username) {
    if(username === undefined) { //"username === undefined"  is same meaning to "!username"
        console.log("Enter your name");
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("Jayesh")  //Not print something
console.log(loginUserMessage())
//if we not pass any value then undefined is show.

/////////Part-02/////////

function calculateCartPrice(num1) {
    return num1
}
console.log(calculateCartPrice(2));

//If user give many input and we have only return one value then we use Rest Operator or Spread Operetor[...] which return many value but in the form of Array.

function calculateCartPrice01(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice01(200, 400, 600, 1000));
//here 200 and 400 assing to the variable val1 and val2, and we are returning only num1 so rest of values like 600 and 1000 are return by num1 in array form 

const user = {
    username: "jayesh",
    price: 199
}

function handleObject(anyibject) {
    console.log(`username is ${anyibject.username} and price is ${anyibject.price}`);
}
// if we declared object which is not excist then if show undefined
handleObject({
    username: "sam",
    price: 66
}) //function with object.

//-----------

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
return getArray[1]
}
//console.log(returnSecondValue (myNewArray)); 
console.log(returnSecondValue([200, 400, 500, 1000]));



