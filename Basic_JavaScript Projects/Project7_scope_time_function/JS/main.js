//=======GLOBAL AND LOCAL VARIABLES=======//

var A = 3; //Declaring global variable A and assigning it a number value

function Multiply() { //Creating, naming a function
    var X = 3; //Declaring variable X, assigning it number value
   document.getElementById("multiply").innerHTML = A * X; //Displaying product of variables A and X in doc
}

function Addition() { //Creating, naming function
    var Y = 3;  //Declaring local variable Y, assigning number value
    document.getElementById("add").innerHTML = Y + X; //Display sum of variables Y and X in doc
}

//=============IF, ELSE STATEMENTS============//

function Time() { //Create & name function
    if (new Date().getHours() > 19) { //If statement
        document.getElementById("greeting").innerHTML = "Good evening to you!"; //potentially display greeting in HTML doc
    }
}

function oldEnough() {  //Create function
   var Age = document.getElementById("age").value; //Assign variable Age value of "age" element in doc
    if (Age >= 25) {  //If statement
        document.getElementById("oldEnough").innerHTML = "Congratulations, you can rent a car!";  //Potentially show string in doc
    }
}

function my_Number() {  //Create, name function
    var guess = document.getElementById("guessNumber").value; //Assign value of element"guessNumber to variable guess
    if (guess == 3) {  //If statement
        Answer = "You guessed it, 3  is my favorite number!"; //Result if IF statement is true
    }
    else {
        Answer = "Sorry, that's not my favorite number, try again..." //Result if IF statement is false
    }
    document.getElementById("answer").innerHTML = Answer; //Display one of two values for Answer in HTML doc
}

function timeOfDay() { //Create and name function
    var Time = new Date().getHours(); //Declare variable Time and assign value 
    var Answer; //Declare variable Answer
    if (Time < 12 == Time > 0) {
        Answer = "It's the morning!"
    }                                       //Using if, else if, and else statements to create values for variable Answer
    else if (Time > 12 == Time < 18) {
        Answer = "It's the afternoon!"
    }
    else {
        Reply = "It's nighttime!"
    }
    document.getElementById("Time").innerHTML = Reply; //Assign appropriate value of Reply to element "Time" and display in doc
}