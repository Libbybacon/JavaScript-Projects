function validateForm() {
    if (document.signup.fname.value == "") {
        alert ("Please provide your first name");
        return false;
    }
    if (document.signup.lname.value == "") {
        alert ("Please provide your last name");
        return false;
    }
    if (document.signup.number.value == "") {
        alert ("Please provide your phone number");
        return false;
    }
    if (document.signup.email.value == "") {
        alert ("Please provide your email");
        return false;
    }
    return( true );
}

function openForm() {
    document.getElementById("popForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popForm").style.display = "none";
}