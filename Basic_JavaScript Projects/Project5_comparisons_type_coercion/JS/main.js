
//========DATA TYPES========
function type_string(){ //Create and name a function
document.getElementById("string").innerHTML = (typeof "Button"); //Use getElementById method to display data type when user clicks button
}

function type_number() {  //Create and name a function
document.getElementById("number").innerHTML = (typeof 314); //Use getElementById method to display data type when user clicks button
}

function type_boolean(){  //Create and name a function
document.getElementById("boolean").innerHTML = (typeof false); //Use getElementById method to display data type when user clicks button
}

function type_NaN() {  //Create and name a function
document.getElementById("NaN").innerHTML = (typeof 11/0); //Use getElementById method to display data type when user clicks button
}

//=============NaN============

function yesNaN() {  //Create and name a function
document.getElementById("true").innerHTML = isNaN('button'); //Use getElementById method to display isNaN result when user clicks button
}

function noNaN() {  //Create and name a function
document.getElementById("false").innerHTML = isNaN('27');  //Use getElementById method to display isNaN result when user clicks button
}

//============INFINITY============

function infinity() { //Creating and naming function
    var X = 3E333;  //Declaring and assigning value to variable
document.getElementById("posinfinity").innerHTML = X; //Using getElementById method to display value of variable X when user clicks button
}

function negInfinity(){ //Creating and naming a function
    var Y = -3E333; //Declaring and assigning value to a variable
document.getElementById("neginfinity").innerHTML = Y; //Using getElementById method to display value of variable Y when user clicks button
}

//============BOOLEANS============

function yesBoolean() { //Creating and naming a function
    var T = 8 > 5 && 8 < 10;   //Declaring a variable T and assigning it a boolean value
document.getElementById("true_boolean").innerHTML = T; //Using getElementById method to display boolean value when user clicks button
}

function noBoolean() { //Creating and naming a function
    var F = 13*7 <= 90;  //Declaring a variable T and assigning it a boolean value
document.getElementById("false_boolean").innerHTML = F; //Using getElementById method to display boolean value when user clicks button
}

console.log(12*18); //Using console.log() function to perform a math operation and display result in console

//============COERCION==============

function coercion() { //Creating and naming function
    var C = "15" + 12; //Declaring variable "C" and assigning it value of a string plus a number
document.getElementById("coerced").innerHTML = C; //Using getElementById method to display value of variable C when user clicks button
}

console.log(17<2); //Using consolo.log() function to display a boolean value of false in the console

//============COMPARISONS=============

function isEqual() { //Creating and naming function
    var T = 36/3 == 6*2;  //Declaring variable T and assigning boolean value
document.getElementById("equal").innerHTML = T; //Using getElementById method to display boolean value when user clicks button
}

function notEqual() {  //Declaring and naming function
    var F = 17*4/9 == 196/13*2; //Declaring variable F and assigning it a boolean value
document.getElementById("not_equal").innerHTML = F; //Using getElementById method to display boolean value when user clicks button
}

//============TRIPLE EQUAL SIGNS=========

function fullMatch() { //Creating and naming function
    var A = "banana"; //Declaring variable A and assigning it string value
    var B = "banana"; //Declaring variable B and assigning it string value
document.getElementById("fullMatch").innerHTML = A === B; //Using getElementById method to display boolean value when user clicks button
}

function fullDifferent() { //Creating and naming a function
    var A = 8; //Declaring variable A and assigning it a number value
    var B = "dog"; //Declaring variable B and assigning it a string value
document.getElementById("fullDifferent").innerHTML = A === B; //Using getElementById method to display boolean value when user clicks button
}

function sameValue() { //Creating and naming function
    var A = "10"; //Declaring variable A and assigning it string value
    var B = 10; //Declaring variable B and assigning it number value
document.getElementById("sameValue").innerHTML = A === B; //using getElementById method to display boolean value when user clicks button
}

function sameData() { //Creating and naming a function
    var A = 7; //Declaring variabe A and assigning it number value
    var B = 77; //Declaring variable B and asssigning it a number value
document.getElementById("sameData").innerHTML = A ===B; //Using getEmlementById method to display a boolean value when user clicks button
}

//============AND, OR OPERATORS=============

function andTrue() { //Creating and naming a function
    var A = 7 * 8; //Declaring variabe A and assigning it number value
    var B = 14 * 4; //Declaring variabe B and assigning it number value
    var C = 10 * 10; //Declaring variabe C and assigning it number value
    var D = 25 * 4; //Declaring variabe D and assigning it number value
document.getElementById("andTrue").innerHTML = A == B && C == D; //Using getEmlementById method to display a boolean value when user clicks button
}

function andFalse() { //Creating and naming a function
    var A = 18; //Declaring variabe A and assigning it number value
    var B = 6 * 3; //Declaring variabe B and assigning it a number value
    var C = "eighteen"; //Declaring variabe C and assigning it a string value
document.getElementById("andFalse").innerHTML = A == B && A == C; //Using getEmlementById method to display a boolean value when user clicks button
}

function orTrue() {  //Creating and naming a function
    var A = 24; //Declaring variabe A and assigning it number value
    var B = 48/2; //Declaring variabe B and assigning it number value
    var C = 12 + 13; //Declaring variabe C and assigning it number value
document.getElementById("orTrue").innerHTML = A == B || A == C; //Using getEmlementById method to display a boolean value when user clicks button
}

function orFalse() {  //Creating and naming a function
    var A = "apples"; //Declaring variabe A and assigning it a string value
    var B = "fruit"; //Declaring variabe A and assigning it string value
    var C = 100; //Declaring variabe A and assigning it a number value
document.getElementById("orFalse").innerHTML = A == B || A == C; //Using getEmlementById method to display a boolean value when user clicks button
}

//=============NOT OPERATOR===============

function notTrue() { //Creating and naming a function
    var A = 5 * 3; //Declaring variabe A and assigning it number value
    var B = 16; //Declaring variabe B and assigning it a number value
document.getElementById("notTrue").innerHTML = !(A >= B); //Using getEmlementById method to display a boolean value when user clicks button
}

function notFalse() { //Creating and naming a function
    var A = 4 * 3; //Declaring variabe A and assigning it a number value
    var B = 33 / 3; //Declaring variabe B and assigning it a number value
document.getElementById("notFalse").innerHTML = !(A > B); //Using getEmlementById method to display a boolean value when user clicks button
}
