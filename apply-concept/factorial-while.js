// function getFactorial(number) {

//     let factorial = 1;
//     let i = 1;
//     while (i <= number) {
//         factorial = factorial * 1;
//         i++;
//     }
//     return factorial;
// }

// const myFactorial = getFactorial(6);
// console.log(myFactorial);

function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * 1
        i--;
    }
}

const myFactorial = getFactorial(6);
console.log(myFactorial);