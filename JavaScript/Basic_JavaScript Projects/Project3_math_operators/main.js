function add_Function(){ //Creating and naming a function
  var addition = 2+2; //Declaring and naming a variable and assigning it a value
  document.getElementById("math").innerHTML = "2 + 2 = " + addition; //Using getElementById method to
                                                                    //display string and result of an operation
}

function Subtract(){  //Creating and naming a function
    var minus = 41 - 3;  //Declaring and naming a variable and assigning it a value
    document.getElementById("subtract").innerHTML="41 - 3 = " + minus; //Using getElementById method to
                                                                      //display string and return of an operation
}

function Multiply() {  //Creating and naming a function
    var product = 3 * 14;  //Declaring and naming a variable and assigning it a value
    document.getElementById("multiply").innerHTML="3 * 14 = "+ product;  //Using getElementById method to
                                                                        //display string and result of an operation
}

function Divide() {  //Creating and naming a function
    var quotient = 27/9;  //Declaring and naming a variable and assigning it a value
    document.getElementById("divide").innerHTML="27 / 9 =" + quotient; //Using getElementById method to
                                                                      //display string and result of an operation
}

function Operations() { //Creating and naming a function
    var result = (13 * 4-2) / 5 * (11 + 6); //Declaring a variable and assigning it a value of the result of multiple simple math operations
    document.getElementById("answer").innerHTML = "13 multiplied by 4, subtracted by 2, then divided by 5 and multiplied by the sum of 11 plus 6 equals: " + result;
}  //Using getElementById method to display string and result of an operation

function Modulus() {  //Creating and naming a function
    var remainder = 19%7; //Declaring and naming a variable, assigning it the value of the remainder of a division operation
    document.getElementById("leftover").innerHTML = "19 divided by 7 has a remainder of: " + remainder;
} // Using getElementById method to display a string and the value of the variable "remainder"

function Unary() { //Creating and naming a function
    var num = 14 //Declaring and naming a variable, assigning it a value
    document.getElementById("negative").innerHTML = -num; //Using getElementById method to display the negative value of the variable "num"

}

var A = 7 ; //Declaring and naming a variable, assigning it an integer value
A++; //Increasing the value of the variable A by one
document.write("7 increased by 1 = " + A); //Display a string and the increased value of variable A in document

var B = 13 ; //Declaring and naming a variable, assigning it an integer value
B--; //Decreasing the value of variable B by one
document.write(" ; 13 decreased by 1 = " + B); //Display a string and the decreased value of variable B in document

window.alert(Math.random() * 50); //Creates a window alert on HTML page that generates a random number between 1 and 50

function power() { //Create and name a function
    var exp = Math.pow(6, 3); //Declare and name variable; use Math.pow method to assign integer value to variable
    document.getElementById("cubed").innerHTML = exp; //Use getElementById method to display value of variable "exp"
}

function Floor() { //Create and name a function
    var X = Math.floor(12.8); //Declare and name variable; assign variable integer value using Math.floor method
    document.getElementById("round_down").innerHTML = X;  //Use getElementById method to display value of variable X in document
}