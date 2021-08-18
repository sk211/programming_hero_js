// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
var firstFactorial = factorial(7);
console.log("factorial of 7 is ", firstFactorial);

var secondFactorial = factorial(9);
console.log("factorial of 7 is ", secondFactorial);