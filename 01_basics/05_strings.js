const name = "Jayesh"
const age = 19

console.log(name +" : age " + age) //Not use this type of Syntex

console.log(`My name is ${name} and age is ${age}`) //Modern way to write

const userName = new String('jayeshThar')   //Console this userName in browser console
console.log(userName[0])
console.log(userName.__proto__) //Here the object is not empty, you can see this value at the browser console

console.log(userName.toLowerCase()) //Converted to lower case 
console.log(userName.length)        //To find the length of the String
console.log(userName.charAt(2))     //To find the character at the [2] Index position
console.log(userName.indexOf('T'))  //To find the index no. for char 'T'

const newName = userName.subString(0, 6) //Here from index no 0 - 5 will print //index[6] is not included 
console.log(newName)

const newUserName = userName.slice(-10, 6)
console.log(newUserName)