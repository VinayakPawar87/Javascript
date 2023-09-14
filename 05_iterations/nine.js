const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: 'js Course',
        price: 2999
    },
    {
        itemName: 'mob dev Course',
        price: 5999
    },
    {
        itemName: 'Data Science',
        price: 12999
    },
]

const pricetopay = shoppingCart.reduce((acc, item)=>acc + item.price, 0)
console.log(pricetopay);