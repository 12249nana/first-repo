function getSum(prices, discount) {
    let sum = 0

    for (const price of prices) {
        sum += price;
    }


    const discountRest = (discount / 100) * sum;
    return sum - discountRest;
}


console.log(getSum([100, 200, 300], 30));
console.log(getSum([150, 250, 150], 10));
console.log(getSum([1000], 50));