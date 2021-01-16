//=========== concat() method ==========//

function sentenceFunction() { //Create and name a function
    var Adjective = "The " + document.getElementById("adjective").value;
    var Noun = " " + document.getElementById("noun").value + " woke up and ";
    var Verb = " " + document.getElementById("verb").value;  // Declaring variables and assigning them values of strings plus input element values in the doc
    var Adverb = " " + document.getElementById("adverb").value + " for the rest of the day.";
    var Sentence = Adjective.concat(Noun, Verb, Adverb); //Using concat() method to combine values of four variables
    document.getElementById("concatenate").innerHTML = Sentence; //Displaying result of concatenation in the document
}

//===== slice() and toUpperCase() methods =====//

// toUpperCase(): change all letters of a string to uppercase//

function Slice() { //Create and name function
    var fruits = "Apple, Orange, Mango, Kiwi, Strawberry, Grape, Banana"; //Declare variable, assign it string value
    var slice = fruits.slice(15,20);  //Use slice() method to assign section of string value to variable "slice"
    document.getElementById("favorite").innerHTML = slice.toUpperCase(); //Use toUpperCase method on variable "slice" and 
                                                                        //assign that value to "favorite element in doc"
}

//============== search() method =============//

// search(): find position of specific value within a string

function letterNumber() { //Create and name function
    var alphabet = " abcdefghijklmnopqrstuvwxyz"; //Declare variable alphabet and assign a string value
    var T = alphabet.search("t");  //use search() method to place value of a string, assign that value to variable T
    document.getElementById("number").innerHTML = T; //Assign value of variable T to "number" element in doc
}

//============ toPrecision() method ==========//

//Formats a number using a specified number of digits//

function toPrecise() {
    var num = 11454265667.2148712395234;
    document.getElementById("precise").innerHTML = num.toPrecision(6);
}

//============== toFixed() method ============//

// Make a number a string rounded to specified number of decimal places//

function toFixed () { // Create and name a function
    var num = 19384798.193874914783453; //Assign number value to variable num
    document.getElementById("rounded").innerHTML = num.toFixed(5); //Use toFixed() method to round variable num  
                                                                  //to five decimal places and display in doc
}

//=============== valueOf() method ============//

//Returns the primitive value of string object//

function getValue() { //Create and name function
    var string = "This is a string!"; //Assign string value to variable 'string'
    var value = string.valueOf(); //Use valueOf() method to return primitive value of string
    document.getElementById("primitive").innerHTML = value; //Display value of variable 'value' in document
                                                                  
}