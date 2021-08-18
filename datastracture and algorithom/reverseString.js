function newReverse(str) {

    // methos 1
    // const arr = str.split('');
    // arr.reverse();
    // const res = arr.join('')
    // return res;

    // method -2
    // return str.split('').reverse().join('')

    // method -3
    let res = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        res = char + res
    }
    return res;
}

const result = newReverse("sujan")
console.log(result);