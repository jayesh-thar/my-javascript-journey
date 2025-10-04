const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    // return item
} )
console.log(values); // if we want to store forEach to a variable then what it will return? it will return undefined what ever if we return item or Notification.
//not satisfy when we have check values conditionally

//method-01 : filter value from the list of set

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newNum = myNum.filter( (num) => num > 4 )
const newNums = myNum.filter( (num) => {return num > 4} ) // if we open scope then we have return that condition. other wise it will return empty set or array
console.log(newNum);
console.log(newNums);

//method-02 : filter value from the list of set
const newNumss = []
myNum.forEach( (num) => {
    if (num > 4) {
        newNumss.push(num)
    }
} )
console.log(newNumss);
//Both we having same output and both are correct, in first there is no logic but in secong there is logical statement but at the output are same so both are correct and acceptable.

//multiple book object in single array. And you have filter from this list tas per the user request:-
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userBooks = books.filter( (bk) => bk.genre === 'History' )
// const userBooks = books.filter( (bk) => {return bk.publish >= 1995} )
const userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
} ) //for multiple filter

console.log(userBooks);

//NOTE: filter is done when condition is true. 



