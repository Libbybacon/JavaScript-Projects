// Run jQuery when document is ready
$(document).ready(function() {
// Function to change navbar tab to active when you scroll 
// to that section of the website manually
function onScroll(event){
// Set initial scroll position at top of page    
var scrollPos = $(document).scrollTop();
// Initiate a function for each anchor tag
$('a').each(function() {
    var currentTab = $(this);
    var refSection = $(currentTab.attr("href"));
    if (refSection.position().top <= scrollPos && refSection.position().top
        + refPosition.height() > scrollPos) {
            $('a.active').removeClass("active");
            currentTab.addClass("active");
        }
        else {
            currentTab.removeClass("active");
        }

});
}
$(document).on("scroll", onScroll);

})