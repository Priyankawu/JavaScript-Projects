var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
} 

// Thumbnail image controls
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log(n);
   
    var i;
    var slides = document.getElementsByClassName("mySlides"); //returns [object HTML Collection]
    console.log(slides); //[div.mySlides, div.mySlides, div.mySlides]
    console.log(slides.length);
    var dots = document.getElementsByClassName("dot");//returns [object HTML Collection]
    console.log(dots); //[span.dot, span.dot, span.dot]
    console.log(dots.length);
    if (n > slides.length) {
        slideIndex=1
    }
    if (n < 1) {
        slideIndex = slides.length //no semi-colon in if statements
    }
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";

    dots[slideIndex-1].className += "active";
}