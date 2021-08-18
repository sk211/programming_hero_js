const numbers = [44, 35, 233, 54, 90, 21, 34, 55, 78, 90, 66];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}
// console.log(sum);

function arrayTotal(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const elements = number[i];
        sum = sum + elements
    }
    return sum;
}
const total = arrayTotal([33, 33, 33])
console.log(total);