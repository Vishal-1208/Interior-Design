/*slides */

var slideIndex4 = 1;
showDivs4(slideIndex4);

function plus4Divs(n) {
  showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("mySlides5");
  if (n > x.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex4-1].style.display = "block";  
}


/*less more*/

function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

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