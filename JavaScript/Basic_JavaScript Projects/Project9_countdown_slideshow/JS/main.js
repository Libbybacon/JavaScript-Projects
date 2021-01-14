function countdown() { //Create function 'countdown
    var seconds = document.getElementById("seconds").value; //Declare local variable 'seconds and assign it value of element "seconds"

    function tick() { //Create function 'tick'
        seconds = seconds - 1; //Sets variable seconds to the value of it's original value (from the input) minus one 
        timer.innerHTML = seconds; //sets the element 'timer' in the doc to the value of the variable 'seconds'
        setTimeout(tick, 1000);  //Calls function 'tick' every 1000 milliseconds
    if(seconds == -1) {    
        alert("Time's up!");  //When the value of the variable 'seconds' reaches -1 an alert box pops up
    }
    }
    tick(); //Call function 'tick'
}

//==================== SLIDESHOW ================//

var slideIndex = 1;    //Declare global variable 'slideIndex and assign it value
showSlides(slideIndex);

//==== PREVIOUS/NEXT CONTROLS ====//
function plusSlides (n) {  //Create and name function 'plusSlides, give it parameter 'n', links to previous and next buttons in doc
    showSlides(slideIndex += n); //Clicking the 'next' button takes you to the next slide and shows it
}

//======== IMAGE CONTROL BY DOTS ========//
function currentSlide (n) {  //New function currentSlide with parameter 'n'. links to dots in document
    showSlides(slideIndex = n); //shows slide associated with dot number
}

function showSlides(n) { 
    var i; //Declare local variable 'i' 
    var slides = document.getElementsByClassName("mySlides"); //Declare variable 'slides, assign it value of class 'mySlides', creates array of slides
    var dots = document.getElementsByClassName("dot"); //Declare variable dots and assign it values of class "dot", creates array of dots
    if (n > slides.length) {slideIndex = 1} //Returns to first slide when you reach the end
    if (n < 1) {slideIndex = slides.length} //Goes to last slide when you push "previous" on first slide
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; //Hide inactive slides
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //Change dot attribute from "active" to standard when you switch slides
    }
    slides[slideIndex-1].style.display = "block"; //Displays current slide as block
    dots[slideIndex-1].className += " active"; //Makes dot representing active slide take on CSS properties "active"
}