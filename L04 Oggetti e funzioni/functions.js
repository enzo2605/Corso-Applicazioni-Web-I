function sumAll(initVal, ...args) {
    let sum = initVal;
    for (let val of args) {
        sum += val;
    }
    return sum;
}

console.log(sumAll(1, 2, 3, 4, 5, "ciao")); // 15

let x = 10;
let fourth = (x) => { return x**2 * x**2 };
console.log(fourth(x)); // 10000