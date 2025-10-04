//Prototype: It is a property of an object that points to the object from which it was inherited.
//*** It is used to add new properties to the object.

let computer = {
  cpu: 12,
};

let lenovo = {
  screen: "HD",
  __proto__: computer, // __proto__ is used to set the prototype of the object
};

let tomHardwer = {};

console.log(`lenevo`, computer.__proto__);
console.log(`lenevo`, lenovo.__proto__);

// we access the prototype of the object using __proto__ property. suppose there are two objects computer and lenovo. So for accessing the prototype of the lenovo object we use lenovo.__proto__.

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AL",
};
Object.setPrototypeOf(tesla, genericCar);
console.log("tesla1", tesla);
console.log("tesla01", tesla.tyres);
console.log("tesla2", Object.getPrototypeOf(tesla));
console.log("tesla3", genericCar);

//hasOwnProperty: It is used to check whether the object has the property or not. It returns true if the object has the property otherwise false. return Boolean value.

let hero = {
  hero1: "Jayesh",
};
hero.hero2 = "Mayank"; // we can also add the property to the object using dot notation.

console.log("hero1", hero.hasOwnProperty("hero1")); //Yes, it has the property
console.log("hero2", hero.hasOwnProperty("hero2"));
console.log("hero3", hero.hasOwnProperty("hero3"));

//object Operation:
//1. Object.keys(): It is used to get the keys of the object.
//2. Object.values(): It is used to get the values of the object.
//3. Object.entries(): It is used to get the key-value pair of the object.
//4. Object.assign(): It is used to copy the properties of one object to another object.
//5. Object.freeze(): It is used to make the object immutable.
//6. Object.seal(): It is used to make the object non-extensible.
//7. Object.is(): It is used to compare the two objects.
//8. Object.create(): It is used to create a new object with the prototype of the existing object.
//9. Object.defineProperty(): It is used to define the property of the object.

let student = {
  name: "Jayesh",
  rollNo: 92301703023,
  course: "BTech",
};
console.log(`key of Object of student`, Object.keys(student));
console.log(`values of Student Object`, Object.values(student));
console.log(Object.entries(student)); // here it returns in form of array
console.log(Object.entries(100)); //Object can't start with number so for number it will return the empty array.

let num1 = { one: 1, two: 2 };
let num2 = { two: 4, three: 3 };

let number = Object.assign(num1, num2);
console.log(number);

// NOTE: here in num1 and in num2 there is one key which is same, so the value of key in num1 is updated by the value of key in num2. Therefor it overwrites the value of the key in num1.
//This was the disadvantage of Object.assign().

let Std = {
  name: "Jayesh",
};
Object.freeze(Std);
Std.secondname = "Jay";
console.log(Std); //It will freeze the object and we can't further add property to object.
//it help when we want to make the object immutable. Means we can't change the property of the object.

let favFood = {
  food: "Maggie",
};
Object.seal(favFood);
favFood.food = "Pizza";
delete favFood.food;
console.log(favFood);
//Not delete the property. Bcz it is sealed. Help to make the object non-extensible. Means we can't add or delete the property of the object.
console.log(favFood.food01); //Can't add new property bcz it's sealed.

console.log(Object.is(1, 1));
console.log(Object.is(`1`, 1)); //Not same bcz one is string and one is number.

let obj1 = { name: "Jayesh" };
let obj2 = { name: "Jayesh" };
console.log(Object.is(obj1, obj2)); //Not same bcz both have different reference.
console.log(Object.is(obj1, obj1)); //Same bcz both have same reference.
//Note: return true if both have same reference otherwise false.

let person01 = {
  name: "jayesh",
  age: 19,
  printInfo: function () {
    console.log(`Name: ${this.name} & Age: ${this.age}`);
  },
};

let person02 = Object.create(person01);
person02.name = "Mayank";
person02.age = 16;
person02.printInfo();

console.log(person02); //funtion is not copied bcz it is not a property of the object. It is a property of the prototype of the object.

let exam = {};
Object.defineProperty(exam, "Subject01", {
  value: "Maths",
  writable: false, //It is used to make the property read-only.
});
Object.defineProperty(exam, "Subject02", {
  value: "Physics",
  writable: true,
});
console.log(exam.Subject01);
console.log(exam.Subject02);

exam.Subject02 = "Chemistry";
console.log(exam.Subject02); //It will not update the value of the property bcz it is read-only. But if we set true then it update the value of the property.