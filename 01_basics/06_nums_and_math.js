const score = 400
console.log(score);     //Here score is automatically converted to a Number 

const balance = new Number(100) //here we can converted to number(also we can converting to String or any other Datatype)
console.log(balance);

console.log(balance.toString().length);  //balance -> string -> number => find length
console.log(balance.toFixed(2));         //here Upto two decimal point will show

const otherNumber = 1230.963
console.log(otherNumber.toPrecision(5));    //Upto to 5 digit from the left side of the number
console.log(otherNumber.toPrecision(3));    //here, Automatically converted to exponainal number 

const hundred = 1000000;
console.log(hundred.toLocaleString())        //1,000,000
console.log(hundred.toLocaleString('en-IN')) //10,00,000

//+++++++++++++++++Maths++++++++++++++++++++++++++
console.log(Math.abs(-4)); //Using Math library and '.abs' => absulute value which means that Negative values converted into Positive but Positive not converted to Negative.
console.log(Math.round(4.65)); //RoundOff values
console.log(Math.ceil(5.01)); //ceillng //The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number
console.log(Math.floor(3.9));    //The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
console.log(Math.min(2,0,4,8,6,5,7,9));  //Min Term from array
console.log(Math.max(2,0,4,8,6,5,7,9));  //Max Term from array


//Here there are many methods persent such are:- squareRoot, cuberoot, trigonometry values, exponansial, logerithme and etc....... Refers from MDN Document's

//******************************************************************************************

console.log(Math.random());     //It generate any random values between '0-1'
console.log(Math.random() * 10); // '0-9'
console.log((Math.random() * 10) + 1); // '1-10'

//===================================================================================
//-----------------------------------------------------------------------------------
//QUES:- FINDING THER RANDOM NUMBER BETWEEN TWO NUMBER ??? OR MAKE DICE FOR ANYGAMES.

const min = 1;
const max = 6;
console.log((Math.random() * (max - min + 1)) + 1);
console.log(Math.floor(Math.random() * (max - min + 1)) + 1);





