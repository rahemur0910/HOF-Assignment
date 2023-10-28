// create sample product list
const priceUsd = 
{
    item1: 150,
    item2: 300,
    item3: 250,
    item4: 50,
    item5: 99,
};

console.log("IN USD: ",priceUsd);
// Function to convert price from usd to inr

function convertInr(price)
{
    const exRate = 80;
    return price * exRate;
}

// create a new object with price in INR

const priceINR = Object.fromEntries(  // list of key value pair into an object
    Object.entries(priceUsd).map(([item,price]) =>
    [
        item,
        convertInr(price)
    ])
);

console.log("IN INR:",priceINR);