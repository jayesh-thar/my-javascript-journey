function SetUserName(username) {
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    // SetUserName(username)
    SetUserName.call(this, username); // Bind 'this' to the SetUserName function

    this.email = email
    this.password = password
}
const Chai = new createUser("jayesh", "jay@gmail.com", "jay123@")
console.log(Chai);

// SetUserName.call(this, username);: The call() method allows you to call a function with a specific this context. Here, it ensures that this inside SetUserName refers to the instance of createUser
