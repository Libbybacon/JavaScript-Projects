function getReceipt() {
    // This initializes our string so it can get passed from 
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    // Declaring variable runningTotal and setting initial value to 0
    var runningTotal = 0;
    // Declaring variable to hold value of pizza size
    var sizeTotal = 0;
    // Declaring variable that holds array of values for "size" class
    var sizeArray = document.getElementsByClassName("size");
    // For loop that iterates through size array until it reaches checked size
    for (var i = 0; i<sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            // Variable selectedSize holds value of checked size
            var selectedSize = sizeArray[i].value;
            // Update text1 to include size
            text1 = text1 + selectedSize + "<br>"
        }
    }
    // Assigning values to sizeTotal based on pizza size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Party Pizza!") {
        sizeTotal = 24;
    }
    // Set runningTotal equal to sizeTotal
    runningTotal = sizeTotal;
    // Log values in console
    console.log(selectedSize+" = $"+sizeTotal+".00"); //log item size and total
    console.log("size text1: "+text1); //log full receipt
    console.log("subtotal: $"+runningTotal+".00"); //log total dollar amount
    //These variables will get passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal, text1) {
    // Declare toppingTotal and set initial value to 0
    var toppingTotal = 0;
    // Assign array value to variable selectedTopping 
    var selectedTopping = [];
    // Get array of values of class "toppings" and assign it to variable
    var toppingArray = document.getElementsByClassName("toppings")
    // For loop to iterate through toppings array, push all selected values to 
    //selectedTopping variable
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");// Log selected topping(s) in console
            text1 = text1 + toppingArray[j].value + "<br>"; //Update receipt with topping items
        }
    }
    // Store the number of toppings selected in variable 
    var toppingCount = selectedTopping.length;
    // Determine total toppings to charge for (first one is free)
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    // Add cost of toppings to running total
    runningTotal = (runningTotal + toppingTotal);
    // Log values to console
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");// total cost of toppings
    console.log("toppingtext1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+ 
                                                        runningTotal + ".00" + "</strong></h3>";


};