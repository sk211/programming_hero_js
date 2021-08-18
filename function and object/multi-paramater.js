// function addTwoNumber(number1, number2) {
//     console.log(number1, number2);
// }
// addTwoNumber(21, 40);

// function addTwoNumber1(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumber1(21, 40);

// function addNumber(num1, num2) {
//     console.log(num1, num2);
// }
// var firstNumber = 20;
// var secondNumber = 30;
// addNumber(firstNumber, secondNumber);
// addNumber(firstNumber + secondNumber);
// addNumber(firstNumber * secondNumber);

function addNewNumber(numb1, numb2) {
    // console.log(numb1, numb2);
    var total = numb1 + numb2;
    var total = numb1 - numb2;
    return total;
}


var result = addNewNumber(20, 200);
console.log(result);

// eid ar salami 

function edierSalami(note, koto) {
    var result = note * koto;
    return result;
}

var total = edierSalami(100, 5);
console.log(total);
var total1 = edierSalami(1000, 5);
console.log("Total salami pailam", total1);
