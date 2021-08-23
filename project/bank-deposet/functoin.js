function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId)
    const inputFieldId = inputField.value
    const inputValue = parseFloat(inputFieldId)
    inputField.value = ""
    return inputValue;

}
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId)
    const fieldTex = fieldTag.innerText
    const value = parseFloat(fieldTex)
    return value
}
function upDateTotal(fieldId, amount) {

    const privTotal = getInnerTextValue(fieldId)
    const newTotal = privTotal + amount
    document.getElementById(fieldId).innerText = newTotal
}
// update balance total 
function updateBalance(amount, isAdding) {
    const balanceTag = document.getElementById("balanceTotal")
    const balanceIntext = balanceTag.innerText
    const previousBalance = parseFloat(balanceIntext)
    let newBalance
    if (isAdding == true) {

        newBalance = previousBalance + amount
    } else {
        newBalance = previousBalance - amount

    }
    balanceTag.innerText = newBalance
}
// function for deposit 
document.getElementById("depositbtn").addEventListener("click", function () {
    const amount = getInputValue("deposit-input")
    if (amount > 0) {
        upDateTotal("depositTotal", amount)
        updateBalance(amount, true)
    }
})

document.getElementById("withdawbtn").addEventListener("click", function () {
    const amount = getInputValue("withdaw");
    const balance = getInnerTextValue('balanceTotal')
    if (amount > 0 && amount <= balance) {
        upDateTotal("withdawTotla", amount)
        updateBalance(amount, false)
    }
})
