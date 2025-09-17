// ******************Conversion*********************

let score = "33abc"

console.log(typeof score);              //string
console.log(typeof (score));            //string

//Explicit Type Conversion: You can explicitly convert values to different types using functions like Number, String, Boolean and etc.

let valueInNumber = Number(score)
console.log(typeof (valueInNumber));    //number
console.log(valueInNumber);             //NaN

//  "33" => 33
//  "33abc" => NaN
//  true => 1; false => 0
//  null => 0
//  undefined => NaN

console.log('hello' / 2); // NaN (string 'hello' cannot be converted to a number)

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//  1 => true; 2 => false
//  "" => false
//  "jayesh" => true
//  null => false
//  undefined => false

let someNumber = 123

let stringNumber = String(someNumber)
console.log(stringNumber);            // 123
console.log(typeof stringNumber);     // string 

// Implicit Type Conversion: JavaScript will automatically convert values to the appropriate type in certain situations, which can lead to unexpected behavior if you're not aware of it. For example:-

console.log(1 + '2'); // "12" (number 1 is converted to a string)
console.log('10' - 5); // 5 (string '10' is converted to a number)



// *************************Operation*********************************

console.log(true);   // true
console.log(+true);  // 1
console.log(-true);  // -1
console.log(-+true); // -1
console.log(+-true); // -1

console.log(false);   // false
console.log(+false);  // 0
console.log(-false);  // -0
console.log(+-false); // -0
console.log(-+false); // -0

console.log(1 + 2 +3);      // 6
console.log("1" + 2 +3);    //123
console.log(1 + "2" +3);    //123
console.log(1 + 2 +"3");    //33 => (1+2) + "3"




