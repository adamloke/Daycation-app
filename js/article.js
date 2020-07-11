// Map function

function initMap() {
    let location = { lat: 47.195242, lng: 18.596261 };
    let map = new google.maps.Map(document.getElementById("map"), { zoom: 6, center: location });
    let marker = new google.maps.Marker({ position: location, map: map });
}

// Travel options dropdown

function dropdownFunction() {
    console.log(document.getElementById("travel-dropdown").classList);
    document.getElementById("travel-dropdown").classList.add("show");
}

window.onclick = function(event) {
    console.log(event.target.matches('.link'));
    if (!document.getElementsByClassName("dropdown-content")[0].contains(event.target)) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Carousel without Bootstrap

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("imgSlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}