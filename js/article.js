// Map function

function initMap() {
    var location = { lat: 47.195242, lng: 18.596261 };
    var map = new google.maps.Map(document.getElementById("map"), { zoom: 6, center: location });
    var marker = new google.maps.Marker({ position: location, map: map });
}

// Travel options dropdown

function dropdownFunction() {
    document.getElementById("travel-dropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.drop-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}