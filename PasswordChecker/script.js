var flag = 0;
function func() {
    const passwordField = document.getElementById("password");
    const password = passwordField.value;
    var colors =
        ["red", "orange", "pink", "yellow", "green"];
    var PointsForPassword = 0;
    var suggestions = '';
    var typeOfPassword = '';
    var borderColor = "";
    if (password.length >= 8) {
        PointsForPassword += 1
    }
    else {
        suggestions += "*Add more Characters" + "\n";
    }

    if (password.match(/[A-Z]/)) {
        PointsForPassword += 1
    }
    else {
        suggestions += "*Add atleast one uppercase" + "\n";
    }

    if (password.match(/[a-z]/)) {
        PointsForPassword += 1
    }
    else {
        suggestions += "*Add atleast one lowercase" + "\n";
    }
    if (password.match(/\d/)) {
        PointsForPassword += 1
    }
    else {
        suggestions += "*Add atleast one Number" + "\n";
    }
    if (password.match(/[^a-zA-Z\d]/)) {
        PointsForPassword += 1
    }
    else {
        suggestions += "*Add atleast one special character" + "\n";
    }

    if (PointsForPassword === 5) {
        typeOfPassword = "Strong: Meets all criteria "
        borderColor = "green";


    }
    else if (PointsForPassword > 2) {
        typeOfPassword = "Medium: Meets some criteria "
        borderColor = "blue";

    }
    else if (PointsForPassword > 0) {
        typeOfPassword = "Weak: Fails most criteria"
        borderColor = "red";
    }

    document.getElementById("suggestionContainer").innerText = suggestions;
    document.getElementById("typeOfPassword").innerText = typeOfPassword;
    passwordField.style.borderColor = borderColor;



}
function showPassword() {
    console.log()
    if (flag === 0) {
        document.getElementById("password").type = 'text';
        flag = 1;

    }
    else {
        document.getElementById("password").type = 'password';
        flag = 0;
    }

}

