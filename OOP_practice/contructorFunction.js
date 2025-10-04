function Person(name, age) {
    this.name = name
    this.age = age
}

function Car(make, model) {
    this.make = make
    this.model = model
}

let myCar = new Car("Ford", "F150") //new - keyword - creates a new object 
console.log(myCar); 

let myNewCar = new Car("Audi", "A6")
console.log(myNewCar);

function Tea(type) {
    this.type = type
    this.describe = function() {
        return `this is a cup of ${this.type} tea`
    }
}

let newTea = new Tea("Green")
console.log(newTea.describe());

let newTea2 = new Tea("Black")
console.log(newTea2.describe());


function Animal(scpecies) {
    this.scpecies = scpecies
}

Animal.prototype.sound = function() {
    return `${this.scpecies} makes a sound`
}

let dog = new Animal("Dog")
console.log(dog.sound());

function drink(name) {
    if(!new.target) {
        throw new Error("Drink must be called with new keyword");
    } //new.target - check if the function is called with new keyword or not
    this.name = name
}

let tea = new drink("Green Tea")
console.log(tea);

let coffee = drink("Black Coffee")
console.log(coffee);

