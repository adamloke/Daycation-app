// MAP FUNCTION

// Set the map
let myMap = L.map("map").setView([47.195242, 18.596261], 13);
// Create a style for the map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibG9iby1kZWwtYm9zcXVlIiwiYSI6ImNrZDFobzhkajBjaGYyem53bmg2cTU1OWgifQ.qiriHL0rZUNLWvqLenS8SA'
}).addTo(myMap);
// Create markers to places of interest
let marker = L.marker([47.195242, 18.596261]).addTo(myMap);


// Travel options dropdown

function dropdownFunction() {
    document.getElementById("travel-dropdown").classList.add("show");
}

window.onclick = function(event) {
    if (!document.getElementsByClassName("drop-button")[0].contains(event.target)) {
        document.getElementById("travel-dropdown").classList.remove("show");
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
    console.log(slideIndex);
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

// Review section functions