
// var c = 300
let a = 300

if(true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log(a);
}


console.log(a);
// console.log(b);
// console.log(c);

//PART:2------nested scope

function one() {
    const username = "jayesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
one()


if(true) {
    const username = "jayesh"
    if(username === "jayesh") {
        const webiste = " youtube"
        console.log(username + webiste)
    }
    // console.log(website);
}  
// console.log(username);

//++++++++++++Interesting+++++++++++++


console.log(addone(5))
function addone(num) {
    return num + 1
}
// addTwo(5)
const addTwo = function(num) {
    return num + 2
}



