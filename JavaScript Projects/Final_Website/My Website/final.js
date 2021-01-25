// Displays contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// Hides contact form when you click close button
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Active Navbar Tab
// set array of tabs as value of variable 
var tabs = document.getElementsByClassName("tab");
// When you click on a navbar tab, that tab is switched to "active"
// and stays highlighted, previous tab is set back to non-active
for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// Slideshow
var slideIndex = 1;
  showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";  
	  }
	  for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



