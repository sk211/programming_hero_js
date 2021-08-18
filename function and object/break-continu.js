// var i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++
// }

// for (var i = 0; i <= 20; i++) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
// }

var numbers = [12, 56, 09, 34, 67, 89, 799, 100];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        continue;
    }
    console.log(number);

}