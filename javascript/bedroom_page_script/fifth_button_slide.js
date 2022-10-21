/*slides */

var slideIndex5 = 1;
showDivs5(slideIndex5);

function plus5Divs(n) {
  showDivs5(slideIndex5 += n);
}

function showDivs5(n) {
  var i;
  var x = document.getElementsByClassName("mySlides6");
  if (n > x.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex5-1].style.display = "block";  
}

/*less more*/

function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtn4");

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