class User {
    constructor(username ){
        this.username = username 
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCouse() {
        console.log(`New course purchesed by: ${this.username}`);
    }
}

const chai = new Teacher("jayesh", "jay@gmail.com", "jay@123")
chai.addCouse()
chai.logMe()

const masalaChai = new User("Chai")
// masalaChai.addCouse() // not accessible
masalaChai.logMe() // having access
console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);

