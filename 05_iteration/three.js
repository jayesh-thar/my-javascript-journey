// for-of Loop: this are array spcefic loop

const arr = [1, 2, 3, 4, 5]

// for (const iterator of object) {
    
// }
//iterator of object => kis object/chij ke uper lagana chate ho.

for (const num of arr) {
    console.log(num);
}

const greeting = "hello World"
for (const greet of greeting) {
    console.log(`each char is ${greet}`);
} //Extra Part: suppose you have break statment when space is detected or continue stament when space is detected then it is used.

//Maps: It is object holds key-value pairs and remenber the original insertion order of the keys. Any value may be used as either a key or a value.

const map = new Map()
map.set('in', "india")
map.set('usa', "united state of emerica")
map.set('fr', "france")
map.set('in', "india") // if we are inserting some values which is already in the map ogject then it not insert same pair of key-values.
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' , value);
}


const myObject = {
    game1: 'gta1',
    game2: 'gts2'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// } //Here the promble is: "TypeError: myObject is not iterable"
// object are not iterable, but Maps are iterable. 

const myObjects = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple"
}

for (const key in myObjects) {
    // console.log(key);
    // console.log(myObjects[key]);
    console.log(`${key} :- ${myObjects[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); // in for-in loop, here key is index.
    console.log(programming[key]);
}

const maps = new Map()
map.set('in', "india")
map.set('usa', "united state of emerica")
map.set('fr', "france")
map.set('in', "india")

for (const key in maps) {
    console.log(key); //nothing print 
}

//Note: Object => FOR-IN || Array => FOR-OF


