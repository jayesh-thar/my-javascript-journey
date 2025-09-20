//Array: storing a collection of multiple element in single variable. Different Datatype. Zero based indexing. 

const myArr = [0, 1, 2, 3, 4, 5, "Jayesh", true]
const myHeors = ["Antman", "Ironman"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array Methods

myArr.push(6) //Add '6' at last
myArr.push(7)
console.log(myArr); //[ 0, 1, 2, 3, 4, 5, 'Jayesh', true, 6, 7]

myArr.pop() //Remove the last element
console.log(myArr); //[ 0, 1, 2, 3, 4, 5, 'Jayesh', true, 6 ]

myArr.unshift(9);   // Add '9' at first. All element are shift by one place.
console.log(myArr); //[ 9, 0, 1, 2, 3, 4, 5, 'Jayesh', true, 6 ]

myArr.shift() //Remove first element
console.log(myArr) //[ 0, 1, 2, 3, 4, 5, 'Jayesh', true, 6 ]

console.log(myArr.includes(9)); //used like to ask question like '9' is include or present in myArr?    //ANS: FALSE.
console.log(myArr.indexOf(9));  //-1
console.log(myArr.indexOf(999));  //-1  //Same for all for non exsicting index.
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr); //In Arra formate
console.log(newArr); //In sting formate
console.log(typeof newArr); //string

console.log("A ", myArr);
const mnr1 = myArr.slice(1, 3);
console.log(mnr1);  //[ 1, 2 ]
console.log("B", myArr); //B [ 0, 1, 2, 3, 4, 5, 'Jayesh', true, 6 ]
const mnr2 = myArr.splice(1, 3);
console.log(mnr2);  //[ 1, 2, 3 ]
console.log("c ", myArr);   //c  [ 0, 4, 5, 'Jayesh', true, 6 ]

//In ".slice" range is not included where in ".spilce" range is included, but the difference is that when we use ".slice" in original Array there is no change while in ".splice" there is some change with the original Array.