const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);


// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI) //PI - object - not overwrite

const chai = {
    name: 'GinnerChai',
    price: 250,
    isAvaliable: false,

    orderChai: function() {
        console.log("Chai nahi bni");
        
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai)); //property ka descripter = undefined
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
console.log(Object.getOwnPropertyDescriptor(chai, 'price'));
console.log(Object.getOwnPropertyDescriptor(chai, 'isAvaliable'));

Object.defineProperty(chai, 'name', { // to change the object property.
    writable: false,
    // enumerable: false //kuch object ke property print nahi hgi.
    enumerable: true
})
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


// for (let [key, value] of chai) {
//     console.log(`key: ${key}, value:${value}`);
// } // chai is not iterable

// for (let [key, value] of Object.entries(chai)) {
//     console.log(`${key}: ${value}`);
// }

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}