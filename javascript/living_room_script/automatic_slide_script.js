// Automatic Slideshow - change image every 4 seconds
var slideIndex = 0;
showDivs();

function showDivs() {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}    
  x[slideIndex-1].style.display = "block";  
  setTimeout(showDivs, 4000);    
}


