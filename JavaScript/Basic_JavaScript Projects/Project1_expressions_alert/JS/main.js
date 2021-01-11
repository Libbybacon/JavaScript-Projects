window.alert("Hello, World!"); //Displaying string in alert box
document.write("Hello, World!"); //Displaying a string in the document


var Dog = "  Phoneix is my dog.  " //Defining a variable and assigning it a string value
document.write(Dog); //Displaying a string in the document

var Name = "My name is Libby" //Defining a variable and assigning it a string value
window.alert(Name); //Displaying a string in an alert box

var quote = "I don\'t like it when people sing the \"happy birthday\" song to me.  " //Defining a variable and assigning it a string values;
                                                                                    //Using \ to escape characters
document.write(quote); //displaying a string in the document

document.write("This is me concatenating" + " a string" + " made of several strings..."); //Displaying a concatenated string in the document

var concatenate = " Two strings " + "added together. " //Defining a variable and assigning it a value of concatenated strings
document.write(concatenate); //Displaying a string in the document

var Family = "The Bacons", Dad = "Bink", Mom = "Edie", //Defining and assigning string values to multiple variables
    Daughter = "Libby", Son = "Cap";

var Family = Family.fontcolor("green"), Dad=Dad.fontcolor("blue"), //Using the str.fontcolor method to assign colors to variables
    Mom=Mom.fontcolor("orange"), Daughter=Daughter.fontcolor("purple"), 
    Son=Son.fontcolor("red");

document.write(Mom); //Displaying a string in the document

document.write(8*7); //Displaying the result of an expression in the document