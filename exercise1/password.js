function validate() {
    let password = document.getElementById('inputPassword').value;
    let verify = document.getElementById('inputVerify').value;
    let error = document.getElementById('lblError');

    if (password != verify)
        error.innerText = "The passwords entered don't match";
    else if (password.length < 8)
        error.innerText = "The passwords are not at least 8 characters long";
    else
        error.innerText = "";
}
