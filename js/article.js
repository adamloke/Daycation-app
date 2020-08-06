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
let markerCsutora = L.marker([47.193356, 18.600640]).addTo(myMap);
markerCsutora.bindPopup("<b>Csutora restaurant</b><br>Great food, mid-high prices. Modern Hungarian cuisine").openPopup();
let markerVVSI = L.marker([47.195398, 18.597148]).addTo(myMap);
markerVVSI.bindPopup("<b>VVSI beach</b><br>1200 HUF/day not crowded, good facilities but very little shadow").openPopup();
let markerRetes = L.marker([47.198180, 18.607687]).addTo(myMap);
markerRetes.bindPopup("<b>Rétes ház</b><br>Great place to eat rétes(strudle in German). A local pastry. Also a cheap alternative for lunch. Mostly meat and fish").openPopup();
let markerSzabad = L.marker([47.200279, 18.608235]).addTo(myMap);
markerSzabad.bindPopup("<b>Free beach</b><br>A very long free beach with acceptable facilities. The parking lot isn't for free").openPopup();
let markerHalasz = L.marker([47.210897, 18.577970]).addTo(myMap);
markerHalasz.bindPopup("<b>Szunyog szigeti fish restaurant</b><br>Great food at a beautiful location. It has a huge terrace and you can arrive by boat from the south side of the lake. Not only for fish lovers").openPopup();


// Travel options dropdown

function dropdownFunction() {
    document.getElementById("travel-dropdown").classList.add("show");
}

window.onclick = function(event) {
    if (!document.getElementsByClassName("btn__secondary")[0].contains(event.target)) {
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

// REVIEW SECTION
// Star rating
let rate = 3;
const stars = document.getElementsByClassName("rating-star");
const starId = [];
for (let i = 0; i < stars.length; i++) {
    starId.push(stars[i].id)
}
starId.forEach(function(element) {
    document.getElementById(element).addEventListener("click", function() {
        let marker = document.getElementById(element).id;
        let counter = starId.indexOf(marker);
        rate = counter + 1;
        console.log(marker);
        for (let i = stars.length; i > counter; i--) {
            stars[i - 1].classList.remove("fas")
            stars[i - 1].classList.add("far")
        }
        for (let i = 0; i <= counter; i++) {
            stars[i].classList.add("fas")
            stars[i].classList.remove("far")
        }
        return rate
    });
    return rate
});

// Declaring the review container

reviewContainer = [{
        name: "Daniel Sunders",
        rating: 3,
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        name: "Nikolaj Tropov",
        rating: 4,
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        name: "Jose Gavrillo",
        rating: 5,
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        name: "Tanaka Ando",
        rating: 2,
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
]

// Display the reviews
let displayReviews = function(reviewContainer) {
    toDisplay = reviewContainer.map(objects => `
    <h5><strong>${objects.name}</strong></h5>
    <h5>${objects.rating} <i class="fas fa-star"></i></h5>
    <p>${objects.review}</p>
    <hr>
    `)
    return toDisplay.reverse()
}
document.getElementById("display").innerHTML = displayReviews(reviewContainer);

//Submit reviews

let submit = document.getElementById("submit-button")
submit.addEventListener("click", function() {
    let post = document.forms.reviewForm;
    let formData = new FormData(post);
    let user = formData.get("user");
    let currentRate = rate;
    let currentReview = formData.get("review");
    let reviewObject = { name: "", rating: 0, review: "" };
    reviewObject.name = user;
    reviewObject.rating = currentRate;
    reviewObject.review = currentReview;
    reviewContainer.push(reviewObject);
    document.getElementById("display").innerHTML = displayReviews(reviewContainer);
    document.getElementById("reviewForm").reset();
});

//Add average rating to the top

let ratingArray = [];
reviewContainer.map(object => {
    ratingArray.push(object.rating);
    return ratingArray
});
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let x = ratingArray.reduce(reducer);
let average = x / ratingArray.length


function averageRating(average) {
    return `<h4><i class="fas fa-star"></i> ${average}</h4>`
}

document.getElementById("average-rating").innerHTML = averageRating(average);

// Fill the time and cost info
// Later should be modified to take an object and get the key values from there

getTime = function() {
    return `
    <h4>Travel time:</h4>
    <ul>
    <li>Train: 1200 HUF</li>
    <li>Bus: none</li>
    <li>Car: 2500 HUF</li>
    <li>GreenGo: 12500 HUF</li>
    </ul>
    `
}

getCost = function() {
    return `
    <h4>Estimated cost:</h4>
    <ul>
    <li>Train: 1.1 h</li>
    <li>Bus: none</li>
    <li>Car: 0.25 h</li>
    <li>GreenGo: 0.25 h</li>
    </ul>
    `
}

document.getElementById("travel-time").innerHTML = getTime();
document.getElementById("travel-cost").innerHTML = getCost();

//Navbar
const menuIcon = document.getElementById("menu-icon")
menuIcon.addEventListener("click", () => {
    let x = document.getElementById("topNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
})