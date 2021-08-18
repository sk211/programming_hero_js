const loginBtn = document.getElementById("login-submit")
console.log(loginBtn);
loginBtn.addEventListener('click', function () {


    const emailField = document.getElementById("email");
    const userEmail = emailField.value;


    // get email 
    const passwordField = document.getElementById("password");
    const userPass = passwordField.value;

    if (userEmail == "sujanmajumder211@gmail.com" && userPass == "123456789") {
        console.log("valid user name and password");
        window.location.href = "bank.html"
    } else {
        console.log("Not valid user name and password");
        const alertM = document.getElementById("alert");
        alertM.innerText = " Not valid user name and password"
    }
})