// //const tinderUser = new Object() => singleton object
// const tinderUser = {} // non-singleton object, but both are same to declared object.

// tinderUser.id = "123abc"
// tinderUser.name = "Jayesh"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "jayesh15@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "jayesh",
//             lastname: "thar"
//         }
//     }
// }
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

// //const obj3 = {obj1, obj2}
// //console.log(obj3); //problem like a array
// const obj3 = Object.assign({}, obj1, obj2) //combining two object.
// //const obj3 = Object.assign(obj1, obj2) // having same meaning and right in syntax
// console.log(obj3);

// //There is also one alter native way to used to combining two object in one or many to one:

// const obj4 = {...obj1, ...obj2}
// console.log(obj4);

// // so ther meaning or way to way is same but by spreading the element of object and then we stored in one object is a new or best or a very east tto used to combining two or more object into a one object.


// const users = [
//     {
//         id: 1,
//         email: "jhgcgcg@gmail.com"
//     },
//     {
//         id: 2,
//         email: "jhgefvecgcg@gmail.com"
//     }
// ]
// users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser)); //Outout of this keys return Array type.
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // ask that this property is present or not

////////////////PART-02/////////////////

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "jayesh"
}

//const {courseInstructor} = course
// console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);
// both the method is same 

const navbar = ({company}) => {

}
navbar(company = "Jayesh") //=> desturcture

//jason
// {
//     "name": "Jayesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// const {name} = JSON.parse('{"name": "Jayesh", "coursename": "js in hindi", "price": "free"}')
// console.log(name);

// const user = '{"name": "Jayesh", "coursename": "js in hindi", "price": "free"}'
// console.log(JSON.parse(user).name); //json to object
// console.log(JSON.stringify(course)); //object to json

// console.log(JSON.stringify({name: "jayesh", course: "js"})); //object to json
// console.log(JSON.stringify([1, 2, 3, 4])); //array to json

