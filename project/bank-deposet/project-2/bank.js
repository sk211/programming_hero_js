function getInputValue(inputID) {
    const inputFiled = document.getElementById(inputID);
    // get input value 
    const inputText = inputFiled.value
    const inputValueAmount = parseFloat(inputText);

    inputFiled.value = ""
    return inputValueAmount;
}
function updateTotalAmount(totalfiledId, inputValue) {
    const totalDepositID = document.getElementById(totalfiledId);
    const totalDepositText = totalDepositID.innerText;
    const totalDeposit = parseFloat(totalDepositText);


    const totalDepositAmount = totalDeposit + inputValue;
    totalDepositID.innerText = totalDepositAmount;
}
function getBalance() {
    const balancetotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balancetotalText)
    return balanceTotalAmount;
}

function updateBalnce(inputValue, isAdd) {
    const balanceTotal = document.getElementById("balanceTotal");
    const balanceTotalAmount = getBalance()

    if (isAdd == true) {
        const allbalanceTotal = inputValue + balanceTotalAmount;
        balanceTotal.innerText = allbalanceTotal;
    } else {
        const allbalanceTotal = balanceTotalAmount - inputValue;
        balanceTotal.innerText = allbalanceTotal;
    }

}


const depositBtn = document.getElementById("depositbtn");
depositBtn.addEventListener("click", function () {
    // put the value 
    // const totalDepositID = document.getElementById("depositTotal");
    // const totalDepositText = totalDepositID.innerText;
    // const totalDeposit = parseFloat(totalDepositText);

    // const totalDepositAmount = totalDeposit + inputValue;
    // totalDepositID.innerText = totalDepositAmount;

    // add to balance ammount 

    // const balanceTotal = document.getElementById("balanceTotal");
    // const balancetotalText = balanceTotal.innerText;
    // const balanceTotalAmount = parseFloat(balancetotalText)

    // const allbalanceTotal = inputValue + balanceTotalAmount;
    // balanceTotal.innerText = allbalanceTotal;
    const inputValue = getInputValue("deposit");

    if (inputValue > 0) {
        updateTotalAmount("depositTotal", inputValue);

        updateBalnce(inputValue, true)
    }

})

// wiithdraw blance function 

document.getElementById("withdawbtn").addEventListener("click", function () {
    // get input value 


    // const withdrawInputvalue = document.getElementById("withdaw");
    // const withdrawText = withdrawInputvalue.value;
    // const withDarAmount = parseFloat(withdrawText);
    // const withDarAmount = getInputValue("withdaw");
    // // get output value 
    // const previuesValue = document.getElementById("withdawTotla")
    // const previousText = previuesValue.innerText
    // const priviousAmount = parseFloat(previousText);

    // const totalwithdrawAmount = withDarAmount + priviousAmount;
    // previuesValue.innerText = totalwithdrawAmount;



    // input clear 



    // mainus to total blance 

    // const balanceTotal = document.getElementById("balanceTotal");
    // const balancetotalText = balanceTotal.innerText;
    // const balanceTotalAmount = parseFloat(balancetotalText)

    // const allbalanceTotal = balanceTotalAmount - withDarAmount;
    // balanceTotal.innerText = allbalanceTotal;
    const withDarAmount = getInputValue("withdaw");
    const currentBalance = getBalance()
    if (withDarAmount > 0 && withDarAmount < currentBalance) {

        updateTotalAmount("withdawTotla", withDarAmount);
        updateBalnce(withDarAmount, false)
    }
})