function guessNum() {
    var num = document.getElementById("number").value;
    var count = 0;
    while (count < num) {
        document.getElementById("Loop").innerHTML = "Is " + count + " your number?";
        count++;
    }
    document.getElementById("Loop").innerHTML = count + " is your number!";
}

