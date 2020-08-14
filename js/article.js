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
//Declare slide index variable that can be used in the following functions
let slideIndex = 1;
showSlides(slideIndex);
//Declare a function for the arrow navigation
function plusSlides(n) {
    showSlides(slideIndex += n);
}
//Declare a function for dot navigation
function currentSlide(n) {
    showSlides(slideIndex = n);
}
//The carouse function
function showSlides(n) {
    //Get the images and the dots by their class names
    let slides = document.getElementsByClassName("imgSlides");
    let dots = document.getElementsByClassName("dot");
    //This if statement assures that the carouse goes around if user is 
    //clicking on the next button
    if (n > slides.length) { slideIndex = 1 }
    //This if statement is doing the same with the prev button
    if (n < 1) { slideIndex = slides.length }
    //This two loops sets the default to the carouse. Images not visible
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //this two lines sets the visibility by the slideIndex and adds the active class
    //to the appropriate dot.
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// REVIEW SECTION
// Star rating
//Declare the rate variable and give it a default value so it won't be 0 if the user
//don' click on the stars
let rate = 3;
//Get the stars by their class names in an array
const stars = document.getElementsByClassName("rating-star");
//Create a new array for the IDs of the stars, iterate over the previous array
//and push the IDs into the new array
const starId = [];
for (let i = 0; i < stars.length; i++) {
    starId.push(stars[i].id)
}
//With the forEach method add an event listener to every star
starId.forEach(function(element) {
    document.getElementById(element).addEventListener("click", function() {
        //Get the ID that the user clicked on
        let marker = document.getElementById(element).id;
        //Set a counter that is used in the loops to fill or empty the stars based
        //on the click event
        let counter = starId.indexOf(marker);
        //set the rate value to the users choice
        rate = counter + 1;
        //This two loops are adding and removing classes to fill or empty the stars
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
// Get the data from the objects in the review container and add them to a new array
//      The function returns the reverse of the array so the last on is the first one in the display.
let displayReviews = function(reviewContainer) {
        toDisplay = reviewContainer.map(objects => `
    <h5><strong>${objects.name}</strong></h5>
    <h5>${objects.rating} <i class="fas fa-star"></i></h5>
    <p>${objects.review}</p>
    <hr>
    `)
        return toDisplay.reverse()
    }
    //Display all the reviews
document.getElementById("display").innerHTML = displayReviews(reviewContainer);

//Submit reviews
//Get the submit button by id
let submit = document.getElementById("submit-button")
    //Add the event listener
submit.addEventListener("click", function() {
    // Create a variable from the form that can be passed to a FormData object
    let post = document.forms.reviewForm;
    //Create a new FormData object from the variable
    let formData = new FormData(post);
    // Get the field contents with the get method and add them to appropriate variables
    // also use the rate from the rating function
    let user = formData.get("user");
    let currentRate = rate;
    let currentReview = formData.get("review");
    //Create a new review object and pass the previously declared variables to its keys
    let reviewObject = { name: "", rating: 0, review: "" };
    reviewObject.name = user;
    reviewObject.rating = currentRate;
    reviewObject.review = currentReview;
    //Add the new object to the container array
    reviewContainer.push(reviewObject);
    //Display the new review as soon as it is submitted
    document.getElementById("display").innerHTML = displayReviews(reviewContainer);
    //Reset the forms fields
    document.getElementById("reviewForm").reset();
});

//Add average rating to the top

// Create an array and fill it with the ratings from the review objects
let ratingArray = [];
reviewContainer.map(object => {
    ratingArray.push(object.rating);
    return ratingArray
});
// Reduce the new array and divide by the length of the array to get the average
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let x = ratingArray.reduce(reducer);
let average = x / ratingArray.length

// Create a function that puts the integer to a proper HTML context
function averageRating(average) {
    return `<h4><i class="fas fa-star"></i> ${average}</h4>`
}

// Display the average rating
document.getElementById("average-rating").innerHTML = averageRating(average);

// Fill the time and cost info
// Later should be modified to take an object and get the key values from there
//      or fetch data from a date base.

getTime = function() {
    return `
    <h4>Travel cost:</h4>
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
    <h4>Estimated time:</h4>
    <ul>
    <li>Train: 1.1 h</li>
    <li>Bus: none</li>
    <li>Car: 0.25 h</li>
    <li>GreenGo: 0.25 h</li>
    </ul>
    `
    }
    //Estimated travel time and cost is displayed
document.getElementById("travel-time").innerHTML = getTime();
document.getElementById("travel-cost").innerHTML = getCost();

//Navbar
//Get the elemnt by ID and create a variable
const menuIcon = document.getElementById("menu-icon")
    //Add an event listener to the variable what adds and removes the responsive class
    //to open the menu on small screens.
menuIcon.addEventListener("click", () => {
    let x = document.getElementById("topNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
});