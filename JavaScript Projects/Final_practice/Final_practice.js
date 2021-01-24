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


var myself = {name:"Libby", age:33, city:"Portland"};
var JSONstring = JSON.stringify(myself);
document.getElementById("demo").innerHTML = JSONstring;
    
var meAgain= '{"name":"Libby", "age":33, "city":"Portland"}';
var JSONparse = JSON.parse(meAgain);
document.getElementById("demo2").innerHTML = "My name is " + JSONparse.name + ". I am " + JSONparse.age +
                                            " years old, and I live in " + JSONparse.city;


        $(document).ready(function(){

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    }, 3000);

});

localStorage.setItem("name", "Phoenix");
localStorage.setItem("breed", "husky");
localStorage.setItem("age", 4);
document.getElementById("dog").innerHTML = localStorage.getItem("breed");


