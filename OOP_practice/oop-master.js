let car = {
    make: "Ford",
    model: "F150",
    year: 2019,
    end: 2024,
    start: function () {
        return `${this.make} Car got started in ${this.year}`;
    },
    stop: function () {
        return `${this.make} Car got stopped in ${this.end}`;
    },
};

console.log(car.start());
console.log(car.stop());


function Person(name, age) {
    this.name = name;
    this.age = age;
}

let jay = new Person("Jayesh", 19);
console.log(Person);

//prototypel chain: 

function Animal(type) {
    this.type = type
}

Animal.prototype.speak = function() {
    return `${this.type} makes a sound`
}

Array.prototype.jayesh = function() {
    return `Custom method ${this}` //this - refer to the array
}

let myArr = [1, 2, 3];
console.log(myArr.jayesh());

let myNewArr = [1, 2, 3, 4, 5, 6];
console.log(myNewArr.jayesh());


class Vehicle {
    constructor(make, model) { //constructor - initialize the object
        this.make = make
        this.model = model
    }
    start() { //method - function inside the class 
        return `${this.make} ${this.model} started`
    }
    stop() { //method
        return `${this.make} ${this.model} stopped`
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make}: This is an inherited method`
    }
}

let myCar = new Car("Audi", "A6") 
console.log(myCar.start());
console.log(myCar.stop());

console.log(myCar.drive());


let vehical = new Vehicle("Audi", "A6");
console.log(vehical.make); // it will return the make of the vehicle. Make means brand of the vehicle. not the method.


// Encapsulation: restrict direct access to some of the object's components.

class bankAccount {
    #balance = 0; //    '#'is used to make the variable private

    deposite(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return `$ ${this.#balance}`;
    }
}

let account = new bankAccount();
console.log(account.balance); //undefined because balance is private and we can't access it directly.
console.log(account.getBalance());

//Conclusion: Encapsulation is used to restrict the direct access to the object's components. It is used to protect the object from the unwanted access.


//Abstraction: It is used to hide the complex implementation details and show only the necessary details of the object.

class CoffeMachine {
    start() {
        //call DB
        // FILTER VALUE
        return `Coffe Machine started`;
    }

    brewCoffee() {
        // Complex calculation
        return `Brewing coffee`;
    }

    pressStartButton() {
        // this.start();
        // this.brewCoffee();

        let msgone = this.start();
        let msgtwo = this.brewCoffee();
        return `${msgone} + ${msgtwo}`;
    }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

console.log(myMachine.pressStartButton()); // undefined because we are not returning anything from the method. So it will return undefined.

// Polymorphism: It is used to perform a single action in different ways/from.

class Birdname {
    fly() {
        return `Bird is flying`;
    }
}

class Penguin extends Birdname {
    fly() {
        return `Penguin can't fly`;
    }
}

let bird = new Birdname();
let penguin = new Penguin();

console.log(bird.fly());
console.log(penguin.fly());


// Static method: It is used to call the method without creating the object of the class.

class Calculator {
    static add(a, b) {
        return a + b;
    }
    static substract(a, b) {
        return a - b;
    }
}

let miniCal = new Calculator();
// console.log(miniCal.add(10, 20)); // it will return error bcz add is the static method and we can't call the static method using the object of the class.

console.log(Calculator.add(10, 20)); // it will return the sum of the two numbers.