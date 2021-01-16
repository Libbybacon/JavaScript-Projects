//============== WHILE LOOP ===========//

function guessNum() {  //Create and name function
    var num = document.getElementById("number").value; //Declare variable num and assign it value of element "number"
    var count = 0; //Declare variable 'count' assign it value of 0
    var digit = "";
    while (count < num) { //initiate while loop
        digit += "<br>" + "Is " + count + " your number?"; //Display string + value of 'count' 
        count++; //Add one to the varable 'count'
    }
    document.getElementById("Loop").innerHTML = digit; //Display value of 'digit' plus string in 'Loop' element when count = num
    document.getElementById("Loop2").innerHTML = count + " is your number!";
}

//======= STRING LENGTH PROPERTY =======//

function stringSize() { //Create and name function
    var sentence = document.getElementById("sentence").value; //Assign value of element 'sentence' to variable 'sentence'
    var length = sentence.length;  //Get string length of variable 'sentence
    document.getElementById("length").innerHTML = "Your sentence has "+ length + " characters."; //Display string + value of variable 'length' in element 'length'
}

//================ FOR LOOP ============//

var Colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]; //Declare variable 'colors' and assign value of an array of strings
var List = ""; //Declare variable 'list' set value to empty string
var C; //Declare variable C
function listColors() { //Create function listColors
    for (C = 0; C<Colors.length; C++) {//Set for loop conditions 
    List += Colors[C] + "<br>"; //Add value of element of array at index [c] to list and create new line
    }
    document.getElementById("color_list").innerHTML = List; //Assign value of 'List' to element 'color_list' and display in doc
}

//================= ARRAY ==============//

function iceCream(){ //Create function 'iceCream'
    var flavors = ["chocolate", "vanilla", "strawberry", "mint cookie", "chocolate chip"]; //Create object 'flavors' and assign it array of string values
    document.getElementById("flavor").innerHTML = "My favorite ice cream is " + flavors[3] + "."; //Display string and value of index 3 of 'flavors' array
}

//================ CONSTANT ============//

function constantFunction() { //Create function 'constantFunction'
    const Dog = {name: "Phoenix", breed:"husky", age:"4"}; //Create object 'dog' and assign it properties with values
    Dog.weight = 65; //Assign new property and value to object 'dog'
    Dog.name = "Mr. Phoeny" //Change value of the property "name" of object 'dog'
    document.getElementById("animal").innerHTML = "My dog " + Dog.name + " is a " + Dog.age +
    " year old " + Dog.breed + " who weighs " + Dog.weight + " pounds."; // Assign string value using values of properties of object dog to element in do
}

//============== LET KEYWORD ============//
function letFunction() { //Create function 'letFunction
var A = "Apple"; //Declare local variable A and assign it string value 'Apple'
    document.getElementById("fruit").innerHTML = A; //Display value of variable A in 'fruit' element in doc
{
    let A = "Banana"; //Declare variable A with block scope, and assign it string value 'banana
    document.getElementById("fruit2").innerHTML = "<br>" + A; //Display value of variable A in 'fruit2' element in doc
}
document.getElementById("fruit3").innerHTML = "<br>" + A //Display value of variable A in "fruit3" element in doc
}

//=========== RETURN STATEMENT ===========//

function showResult() { //Create function 'showResult'
    var A = document.getElementById("num1").value; 
    var B = document.getElementById("num2").value;   //Declare local variables and assign them values of inputs in the doc
    var C = document.getElementById("num3").value;
    var D = equationFunction(A, B, C);  //Declare local variable and assign it the return value of the function 'equationFunction'
    document.getElementById("result").innerHTML = A + " times " + B + " divided by " + C + " equals: " + D; //Displaying strings and variable values in doc
}
function equationFunction(x, y, z) { //Create function 'equationFunction' and assign it parameters x,y,z
    var S = x * y / z;  //Assign equation to value of variable S
    return S; //Return the result of the equation assigned to variable S
}

//=============== OBJECTS ===============//
function catFunction() { //Create function 'catFunction'
    let cat = {  //Declare object 'cat' with block scope
        name: "Topanga", 
        color: "grey",      //Assign characteristics with values to object 'cat'
        breed: "tabby",
        age: "4",
        about: function() { //assign a function value to 'about' characteristic of object 'cat'
            return this.name + " is a " + this.age + " year old " 
            + this.color + " " + this.breed + " cat."; //Have function return value of strings and characteristic values
     }
    };
    document.getElementById("about").innerHTML = cat.about(); //Display value of 'about' characteristic of 'cat' object in doc
}

//============ BREAK STATEMENT ===========//

//Break statement jumps out of a loop when a condition is met, 
 //continues executing code after loop

 function breakFunction() { //Create function 'breakFunction
     let letters = ["S", "T", "O", "P", " ", "N", "O", "W", " ", 4, "R", "E", "A", "L"]; // Assign array to value of variable 'letters'
     var text = ""; //Declare local variable 'text'
     var i; //Declare local variable 'i'
     for (i = 0; i < letters.length; i ++){  //Set conditions for for loop
        if (letters[i] === 4) {break;} //Set condition for breaking out of loop
         text += letters[i];
    }
    document.getElementById("broken").innerHTML = text; //Display value of variable 'text' in document
 }

 //========== CONTINUE STATEMENT ==========//
 //Skips over one iteration of loop that meets specific conditions, continues to next iterations

 function skipFunction() { //Create function 'skipFunction
     let words = ["This ", "is ", "not ", "how ", "the ", "don't ", "skip ", "not ", "function ", "works!"]; //Assign array value to variable 'words'
     var sentence = ""; //Declare variable 'sentence'
     var i;     //Declare variable 'i'
     for(i = 0; i < words.length; i++){  //Create conditions for for loop
        if (words[i] === "not ") {continue;}    
        if (words[i] === "don't ") {continue;} //Set conditions for continue statements
     sentence += words[i]; //Add values to 'sentence' value
    }
    document.getElementById("skipped").innerHTML = sentence; //Display value of 'sentence' in doc
}