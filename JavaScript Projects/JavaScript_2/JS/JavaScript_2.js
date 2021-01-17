function validateForm() {
    var fname = document.forms["basicForm"]["firstName"].value;
    if (fname =="") {
        alert("Please enter a first name");
        return false;
    }
    var lname = document.forms["basicForm"]["lastName"].value;
    if (lname == "") {
        alert("Please enter a last name");
        return false;
    }
    var bday = document.forms["basicForm"]["birthday"].value;
    if(bday == "") {
        alert("Please enter a birthday");
        return false;
    }
    var email = document.forms["basicForm"]["birthday"].value;
    if(email == "") {
        alert("Please enter an email address");
        return false;
    }

}