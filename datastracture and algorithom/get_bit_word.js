// javascript how to ge big string 

// non funcnal  way

// 1. get a normal string 
var normalString = "amar sonar bangla ami tumay valobashi"
// 2.split words into an array
var splitedString = normalString.split(" ");
// console.log(splitedString);
// 3. get hte bigges word
var sortedString = splitedString.sort(function (min, max) {
    return max.length - min.length;
})[0];
console.log(sortedString);

// pactice 
// 1 get a normal string 
// var longString = "amder dese hbe sei cele kbe kotha na bro hoye kajer vro hbe amader dese hbe sei cele kre kotha na bro hoye kaje bro hbe sonar bangladesh"
// // 2.split word into array 
// var spliteString = longString.split(" ");
// // get the beges word 
// var sorteString = spliteString.sort(function (min, max) {
//     return max.length - min.length
// })[0];
// console.log(sorteString);

// function way 
// "use strict"
function maxWord(sentenct) {
    sentenct.split(" ").sort(function (min, max) {
        return max.length - min.length;
    })[0];
}
console.log(maxWord("amar sonar bangla ami tumai valobasi banaldkslslslls"));