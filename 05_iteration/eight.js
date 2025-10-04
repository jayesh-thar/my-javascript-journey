// //Reduce Method:

// const myNums = [1, 2, 3]

// // const myTotal = myNums.reduce( function (acc, currval)  {
// //     console.log(`acc: ${acc} and currval: ${currval}`);
// //     return acc + currval
// // }, 0) //acc=0
// // console.log(myTotal);

// const myTotal = myNums.reduce(  (acc, currval) => acc+currval, 0) 
// console.log(myTotal);

const shoppingCart = [
    {
        itemNmae: "js course",
        price:2999
    },
    {
        itemNmae: "py course",
        price:999
    },
    {
        itemNmae: "data science course",
        price:12299
    },
    {
        itemNmae: "mobile dev course",
        price:1299
    }
]
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);


