const useremail = "jayeshthar@ai"

if(useremail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//but what if we have empty string

const useremails = ""

if(useremails) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//what about empty Array
const useremailss = []

if(useremailss) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// All other are consider truthy: "0", 'false', "false", " ", [], {}, function(){} =>empty function is also consider in truthy values.

//cheak for Array:
if (useremailss.length === 0) {
    console.log("Array is empty");
}

//simalrly for cheaking object:
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {   //Object.keys(emptyObj) => this return array
    console.log("Object is empty");
}

if (false ==0 && false == '' && 0 == '') {
    console.log("empty");
}

// Nullish coalescing Operator (??): null undefined ------------

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 15 ?? 20

console.log(val1);

//terniary operator:
condition ? true : false




