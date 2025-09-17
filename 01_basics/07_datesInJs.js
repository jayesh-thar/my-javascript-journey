//Date

const myDate = new Date() 
console.log(myDate);                        //2024-03-16T18:44:46.538Z
console.log(myDate.toString());             //Sun Mar 17 2024 00:14:46 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());         //Sun Mar 17 2024
console.log(myDate.toISOString());          //2024-03-16T18:44:46.538Z
console.log(myDate.toJSON());               //2024-03-16T18:44:46.538Z
console.log(myDate.toLocaleDateString());   //17/3/2024
console.log(myDate.toLocaleString());       //17/3/2024, 12:14:46 am
console.log(typeof myDate)                  //Object

let myCreatedDate = new Date(2024, 0, 26)   //(year, month, date) //NOTE:- month start from '0'
console.log(myCreatedDate.toDateString())
let myCreatedDate01 = new Date(2024, 0, 226) //Here Dates are added and then print it's accornding to the total dates in a months.
console.log(myCreatedDate01.toDateString())
let myCreatedDate02 = new Date(2024, 0, 26, 5, 3, 25)//(year, month, day, hour, min, sec)
console.log(myCreatedDate02.toLocaleString())

let myTimeStamp = Date.now();
console.log(myTimeStamp)        //Here a long interger number is display which is nothing but a milisecong which is follow from 01-01-1970

//*******************Calculate time from the given Dates:- 
console.log(myCreatedDate.getTime()) //milisecond from the date '26-01-2024' => (myCreatedDate02)
console.log(Math.floor(myCreatedDate.getTime()/1000)) //Converted to second by dividing 1000

let newDate = new Date()
console.log(myDate)

//****************************************************************************************
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    month: "2-digit"
}))

