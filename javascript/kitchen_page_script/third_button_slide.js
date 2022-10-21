/*slides */

var slideIndex3 = 1;
showDivs3(slideIndex3);

function plus3Divs(n) {
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides4");
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex3-1].style.display = "block";  
}


/*less more*/

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}