// add all forloop number total  
let sum = 0;
for (let i = 1; i <= 6; i++) {
    sum = sum + i;
}
console.log(sum);
let sum1 = 0;
for (let i = 6; i >= 1; i--) {
    sum1 = sum1 + i;
}
console.log(sum1);

// deffrent method with function 
function sum2(i) {
    if (i == 1) {
        return 1;
    }
    return sum2(i - 1) + i
}
console.log(sum2(6));