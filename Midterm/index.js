var slideIndex = 1;


window.onload = function startup(){
	var x = setInterval(showSlides, 3000 );

	var dot= document.getElementsByClassName('dot');
	for(var i=0;i<dot.length;i++){
      dot[i].addEventListener("click", function(){
      	clearInterval(x);
		x = setInterval(showSlides, 3000);
	}, false);   
 }	
};

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshowInfo");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
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