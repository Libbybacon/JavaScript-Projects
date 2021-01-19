//========== SWITCH STATEMENT =========//

function makeFunction() {  //Create function 'makeFunction'
    var makeResponse; //Declare variable 'makeResponse'
    var Makes = document.getElementById("carMake").value; //Declare varaible 'Makes", assign it value of values of input element 'carMake' in doc
    var makeString = "Vroom vroom!  Congratulations, you just won a brand new "; //Declare and initialize variable "makeString"
    switch(Makes) { //Switch statement
        case "Toyota":
            makeResponse = makeString + "Toyota!";
        break;
        case "Honda":
            makeResponse = makeString + "Honda!";
        break;
        case "Subaru":
            makeResponse = makeString + "Subaru!";  //Creating cases for String statement, assigning values to "makeResponse" variable based on condition
        break;
        case "Ford": 
            makeResponse = makeString + "Ford!";
        break;
        case "Chevrolet":
            makeResponse = makeString + "Chevrolet!";
        break;
        case "Nissan":
            makeResponse = makeString + "Nissan!";
        break;
        case "Mercury":
            makeResponse = makeString + "Mercury";
        break;
        default:
            makeResponse = "Please enter the vehicle make exactly as it appears in the list, thank you!" //Default output
    }
    document.getElementById("response").innerHTML = makeResponse; //Display appropriate "makeResponse" output in doc
}

//======= GETELEMENTSBYCLASSNAME() METHOD =======//

function changeWords() { //Create function "changeWords"
    var alter = document.getElementsByClassName("change"); //Assign values of class "change" to variable "alter"
    alter[0].innerHTML = "Life Savers are great" 
    alter[2].innerHTML = "But they rot your teeth :(" //Change values of class "change" at indeces 0 and 2
}

//================ CANVAS ELEMENT ==============//


    var c = document.getElementById("canvas"); //Assign doc element "canvas" to value of Variable "c"
    var ctx = c.getContext("2d");
   
    var grd = ctx.createLinearGradient(0, 0, 750, 375);
    grd.addColorStop(0, "lightblue");
    grd.addColorStop(1, "white");  //Add purple color gradient across canvas
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,750,375);

    //----Snowman body circles----//
    ctx.beginPath();
    ctx.arc(375, 312, 60, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(375, 222, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(375, 150, 35, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();


    //-----Snowman eyes and buttons---//
    ctx.beginPath();
    ctx.arc(363, 139, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(387, 139, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(355, 154, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(365, 162, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(375, 168, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(385, 162, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(395, 154, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(375, 222, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(375, 202, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(375, 242, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    //----Snowman arms----//
    ctx.beginPath();
    ctx.moveTo(415, 222);
    ctx.lineTo(500, 175);
    ctx.moveTo(480, 185);
    ctx.lineTo(500, 185);
    ctx.moveTo(480, 185);  //Right arm of snowman
    ctx.lineTo(480, 165);
    ctx.moveTo(415, 222);
    ctx.lineTo(500, 175);
    ctx.strokeStyle = "brown";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(335, 222);
    ctx.lineTo(250, 175);
    ctx.moveTo(270, 185);
    ctx.lineTo(250, 185);  //Left arm of snowman
    ctx.moveTo(270, 185);
    ctx.lineTo(270, 175);
    ctx.strokeStyle = "brown";
    ctx.stroke();
    
    //------Snowman nose-----//

    ctx.beginPath();
    ctx.moveTo(370,150);
    ctx.lineTo(383, 155);
    ctx.lineTo(375, 145);
    ctx.lineTo(370, 150);
    ctx.fillStyle = "orange";
    ctx.fill();

    //-----Text-------//

    ctx.font = "40px Arial";
    ctx.strokeStyle = "purple";
    ctx.strokeText("Snowman!", 75, 75);

    


