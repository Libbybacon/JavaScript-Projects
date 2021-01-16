function Function_1(){  //Defining a function and naming it
    var str = "Purple is my favorite color"; // Defining and naming a variable and assigning it a string value
    var result = str.fontcolor("purple"); //Defining and naming a variable and using the str.fontcolor method to assign a color
    document.getElementById("favorite_color").innerHTML=result; //using getElementById method to display a string in document
}

function displayDate(){ //Defining and naming a function
    document.getElementById("date").innerHTML= Date(); //using getElementById method to display result of a function in document
}

function concatenate() { //Defining and naming a function
    var sentence = "This is how to"; 
        sentence += " concatenate strings";           //Using the += operator to concatenate multiple strings and assign the concatenated 
        sentence += " with the plus and equal signs." //string to the variable "sentence"

        document.getElementById("string").innerHTML = sentence; //Using getElementById method to display variable in document
}