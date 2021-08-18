// const body = document.getElementById("body");
// function hello() {
//     body.style.backgroundColor = "red";
// }
// const bodyGreen = document.getElementById("green-button");

// anonymous function 
// bodyGreen.onclick = function () {
//     document.body.style.backgroundColor = "green"
// }
// const bodyYellow = document.getElementById("yellow-button");

// bodyYellow.onclick = function () {
//     document.body.style.backgroundColor = "yellow"
// }

// hendel event lisitner 

const goldenColor = document.getElementById("golden-rod");

// goldenColor.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = "goldenrod"
}

// const hotpink = document.getElementById("hot-pink");
// hotpink.addEventListener('click', function () {
//     document.body.style.backgroundColor = "hotpink"
// })

// addEventLisinter function 

// document.getElementById("light-blue").addEventListener("click", function () {
//     document.body.style.backgroundColor
//         = "lightblue"
// });

function handleJustFunctionClick() {
    const clickingmethod = document.getElementById("clickMethod");
    clickingmethod.innerText = "set sujan majumder "
}
// direct action 

document.getElementById("directFunction").addEventListener("click", function () {
    const p = document.getElementById("clickingFunction");
    p.innerText = "set text new text"
});

// input value 
document.getElementById("inputValue").addEventListener("click", function () {
    const nameValue = document.getElementById("inputField");

    const p = document.getElementById("clickingFunction");
    p.innerText = nameValue.value
    nameValue.value = ''
})