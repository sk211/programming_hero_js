const btn = document.getElementById("depositbtn");
// console.log(btn);
btn.addEventListener("click", function () {
    const deposit = document.getElementById("deposit");
    const newDepositAmountText = deposit.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    const depositTotal = document.getElementById("depositTotal");
    const previoustDepositAmoutnText = depositTotal.innerText;
    const previoustDepositAmoutn = parseFloat(previoustDepositAmoutnText)
    const newDepositTotal = previoustDepositAmoutn + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update balance ammount 

    const balanceTotal = document.getElementById("balanceTotal");
    const balanceTotalTex = balanceTotal.innerText;
    const priviousBalanceTotal = parseFloat(balanceTotalTex);
    const newBalanceTotal = priviousBalanceTotal + newDepositAmount
    balanceTotal.innerText = newBalanceTotal

    // clear the input 
    deposit.value = "";


})

// withdaw button 
const withdawBtn = document.getElementById("withdawbtn");
withdawBtn.addEventListener("click", function () {
    const withdawInput = document.getElementById("withdaw");
    const withdrawText = withdawInput.value;
    const newwithDrawAmount = parseFloat(withdrawText);


    // set withdraw total 
    const withDrawTotal = document.getElementById("withdawTotla");
    const previousWithdarawText = withDrawTotal.innerText;
    const previousWithdarawTotal = parseFloat(previousWithdarawText);

    const newwithdrawTotal = previousWithdarawTotal + newwithDrawAmount;
    withDrawTotal.innerText = newwithdrawTotal;

    withdawInput.value = ""

    // update balance /
    const balanceTotal = document.getElementById("balanceTotal");
    const previouseBalanceText = balanceTotal.innerText;
    const previusBalance = parseFloat(previouseBalanceText)
    const newBalanceTotal = previusBalance - newwithDrawAmount;
    balanceTotal.innerText = newBalanceTotal

})
