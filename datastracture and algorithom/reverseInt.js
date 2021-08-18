function reverseInt(n) {
    let reversed = n.toString().split('').reverse().join('');
    reversed = parseInt(reversed)
    return reversed;
}
const result = reverseInt([2, 3, 4, 5, 6]);
console.log(result);