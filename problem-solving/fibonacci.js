// 0,1,1,2,3,5,13,21,34,55

// 3rd =2nd +1st
// 4th =3rd +2nd
// 5th = 4th+3rd 
// 6th = 15th +14th 

// 119th = 118th +117th 

// nth = (n-1)th + (n-2)th 
// tth = (i-1) + (i+2)th 
// const fibo = [0, 1]

// for (let i = 2; i <= 10; i++) {
//     //   nth = (n-1)th + (n-2)th 
//     //  ith = (i-1) + (i+2)th
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

// function fibonicce(num) {
//     const fibo = [0, 1];
//     for (let i = 2; i <= num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }
// const fibonicceSeric = fibonicce(3);
// console.log(fibonicceSeric);

// validation input  
function fibonicce(num) {
    if (typeof num != "number") {
        return "place give a number"
    };
    if (num < 2) {
        return "please enter a prositave number gater then 1";
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fibonicceSeric = fibonicce(12);
console.log(fibonicceSeric);