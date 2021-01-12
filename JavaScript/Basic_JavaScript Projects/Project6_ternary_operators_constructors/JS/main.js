//=============TERNARY OPERATORS============

function Ride_Function() { //Create and name a function
    var Height, Can_ride;  //Declare and name two variables
    Height = document.getElementById("Height").value; //Assign a value to the variable Height using getElementById method
    Can_ride = (Height < 52)? "You are too short":"You are tall enough"; //Assign a value to the variable Can_ride using a ternary operator
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //Use getElementById method to assign value of Can_ride variable and a string to the element
}

function Vote_Function() { //Create and name a function
    var Age, Can_vote; //Declaring and naming two variables
    Age = document.getElementById("Age").value; //Using getElemenetById method to assign a value to the vairable Age
    Can_vote = (Age > 17) ? "Congratulations, you are eligible to vote!":"You are too young too vote."; //Using a ternary operator to assign a value to the variable Can_vote
    document.getElementById("Vote").innerHTML = Can_vote; //Assigning the value of the variable Can_vote to an element in the HTML doc
}

//==========KEYWORDS and CONSTRUCTORS===========

        //---class "Vehicle"----//

function Vehicle(Make, Model, Year, Color) { //Creating and naming an object constructor function and assigning it parameters
    this.Vehicle_Make = Make; 
    this.Vehicle_Model = Model; //Defining parameters of class Vehicle
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); 
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //Creating new instances of class Vehicle and assigning them values
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); 

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year  //Assigning string and parameter values to element in HTML doc
}

        //----class "Pet"-----//

function Pet(Species, Color, Age, Weight) {  //Naming new object consutructor and defining class Pet and assigning it parameters
    this.Pet_Species = Species;
    this.Pet_Color = Color;  //Defining parameters of class Pet
    this.Pet_Age = Age;
    this.Pet_Weight = Weight;
} 
var Phoenix = new Pet("dog", "tan and white", 4, 64);
var Topanga = new Pet("cat", "gray and white", 3, 25); //Creating new instances of class Pet and assigning them values
var Zuko = new Pet("bird", "green and yellow", 5, 2);
function petFunction() {
    document.getElementById("Pet_information").innerHTML = "Phoenix is a " +
    Phoenix.Pet_Color + " " + Phoenix.Pet_Species + " who is " + Phoenix.Pet_Age + " years old and weighs "
    + Phoenix.Pet_Weight + " pounds." //Assigning string and parameter values to element in HTML doc
}

//================NESTED FUNCTIONS==========

function doubleFunction() { //Creating and naming function doubleFunction
    document.getElementById("timesTwo").innerHTML = Double(); //assigning function Double to "times two" button element in doc
    function Double() { //Creating and naming function Double()
        var Start = document.getElementById("number").value; //Declaring variable Start and assigning it the value of the input element "number" in doc
        function timesTwo() {Start *= 2;} //Creating and naming nested function timesTwo; 
        timesTwo(); //Calling timesTwo function
        document.getElementById("result").innerHTML = Start;  //assigning new value of variable start to paragraph element "result" in doc
    }
} 
    //QUESTION:
//Why does the button display "undefined" after the first time user clicks it?

