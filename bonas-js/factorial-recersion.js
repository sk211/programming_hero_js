// 6! = 6 * 5 * 4 * 3 * 2 * 1
// multifly  1 to 6  
let fact = 1;
for (let i = 6; i >= 1; i--) {
    fact = fact * i;
}
console.log(fact);

// with function 
// let fact = 1
function fact1(i) {
    if (i == 1) {
        return 1;
    }
    return fact1(i - 1) * i;
}
console.log(fact1(6));
