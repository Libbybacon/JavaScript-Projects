function my_Family() { //Creating and defining a function
    var Family = {
        Father: "Bink",
        Mother: "Edie",
        First_son: "Cap",  //Declaring and naming a variable; assigning key/value pairs as vaules of variable Family
        Second_son: "Nat",
        Daughter: "Libby",
        Third_son: "Peter",
        Fourth_son: "Sam"
    };
    delete Family.Second_son;
    document.getElementById("family").innerHTML = "The second son in my family is: " + Family.Second_son; //using getElementById method to display the value of a key assigned to variable Family
}