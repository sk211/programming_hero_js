// function largestElement(numbers) {
//     let largest = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i]
//         // console.log(element);
//         if (element > largest) {
//             largest = element
//         }
//     }
//     return largest;
// }

// const ages = [12, 34, 54, 3, 54, 55];
// const oldest = largestElement(ages);
// console.log(oldest);

// const newAge = [12, 34, 54, 3, 54, 55];
// const manisAge = largestElement(ages);
// console.log(manisAge);

// find the lowest number in array 
function largestElement(numbers) {
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i]
        // console.log(element);
        if (element < largest) {
            largest = element
        }
    }
    return largest;
}

const ages = [12, 34, 54, 3, 54, 55];
const oldest = largestElement(ages);
console.log(oldest);
