const coding = ["js", "py", "java", "cpp", "rb"]

coding.forEach( function (val) { // inside forEach we pass callback function where function name isnot there name() => (), and inside that we have to pass para or args by writting a variable which act like passing parameter.
    console.log(val); // here val is just  variable where is act like passing values from recpesting function like coding and pass a values and we print it.
} )

coding.forEach( (item) =>  { // beacuse it callback instand of "greet = () =>  {}" we write () => {}.
    console.log(item);
} ) 


// suppose we wirte function which take avlues and print it, so can we pass out this function usinf forEach loop 

function printMe(item) {
    console.log(item);
}

console.log(printMe); // here have to give referance like "printMe" not excecute the function by writing like this "printMe()" other wise it is undefinede


coding.forEach( (item, index, arr) => { // we can pass or write multiple attribute
    console.log(item, index, arr);
} )


//array inside object

const mycoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]
//accessing the object values write inside the array.
mycoding.forEach( (item) => {
    console.log(item.languageName);
} )



