// Sample Room Data (can later be replaced with dynamic API data)
const rooms = [
    { id: 1, name: "Cozy Apartment", price: "$150/night", location: "New York, NY", rating: 4.5, image: "room1.jpg" },
    { id: 2, name: "Luxury Condo", price: "$250/night", location: "San Francisco, CA", rating: 5.0, image: "room2.jpg" },
    { id: 3, name: "Budget Room", price: "$80/night", location: "Los Angeles, CA", rating: 4.0, image: "room3.jpg" },
    { id: 4, name: "City Loft", price: "$200/night", location: "Chicago, IL", rating: 4.8, image: "room4.jpg" }
];

// Function to get the user's location
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation, showError);
    } else {
        document.getElementById('user-location').innerHTML = "Location not available.";
    }
}

// Function to display location and filter rooms based on location
function showLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    // Fake logic to simulate rooms filtering based on location
    const userLocation = "New York, NY"; // This would be derived from latitude and longitude using an API
    
    document.getElementById('user-location').innerHTML = `Location: ${userLocation}`;
    
    const filteredRooms = rooms.filter(room => room.location === userLocation);
    displayRooms(filteredRooms);
}

// Function to display error if location fetching fails
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('user-location').innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('user-location').innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById('user-location').innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('user-location').innerHTML = "An unknown error occurred.";
            break;
    }
}

// Function to dynamically display room listings
function displayRooms(filteredRooms) {
    const roomList = document.getElementById('room-list');
    roomList.innerHTML = ''; // Clear previous room listings

    if (filteredRooms.length > 0) {
        filteredRooms.forEach(room => {
            const roomCard = `
                <div class="room-card">
                    <img src="${room.image}" alt="${room.name}">
                    <h3>${room.name}</h3>
                    <p class="price">${room.price}</p>
                    <p class="rating">Rating: <span>${room.rating}</span></p>
                    <p class="location">${room.location}</p>
                </div>
            `;
            roomList.innerHTML += roomCard;
        });
    } else {
        roomList.innerHTML = "<p>No rooms available in your area.</p>";
    }
}

// Get User Name (Fake Example)
document.getElementById('user-name').innerHTML = "John Doe"; // This would be fetched dynamically

// Call the location function when the page loads
window.onload = getUserLocation;
// Function to validate create account form
function validateCreateAccountForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // You can add more validation as needed
    return true;
}
// Function to validate create account form
function validateCreateAccountForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // You can add more validation as needed
    return true;
}
// Function to validate and handle sign-in
function handleSignIn() {
    // Perform form validation and authentication here
    // For demo purposes, redirecting directly to home page
    window.location.href = "home.html";
    return false; // Prevent actual form submission
}

// Function to validate and handle create account

function handleCreateAccount() {
    // Validate password matching
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false; // Prevent form submission
    }

    // Retrieve location input
    const location = document.getElementById('location').value;

    // You can add further processing for the location here

    // Perform form validation and account creation here
    // For demo purposes, redirecting directly to home page
    window.location.href = "home.html";
    return false; // Prevent actual form submission
}
// Initialize Google Maps API
function initMap() {
    // You can initialize Google Maps here if needed
}

// Function to handle search based on location input
function searchRooms() {
    const location = document.getElementById('location-input').value;
    if (location) {
        fetchRooms(location);
    }
}

// Function to get the current location using Geolocation API
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                fetchLocationName(lat, lng);
                fetchRooms(`${lat},${lng}`);
            },
            error => {
                console.error("Error getting location:", error);
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Fetch the location name from coordinates
function fetchLocationName(lat, lng) {
    const geocoder = new google.maps.Geocoder();
    const latLng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({ 'location': latLng }, (results, status) => {
        if (status === 'OK' && results[0]) {
            document.getElementById('location-input').value = results[0].formatted_address;
        }
    });
}

// Fetch rooms based on location
function fetchRooms(location) {
    // Replace with your actual API URL and parameters
    const apiUrl = `https://api.example.com/rooms?location=${encodeURIComponent(location)}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayRooms(data);
        })
        .catch(error => {
            console.error("Error fetching rooms:", error);
        });
}

// Display rooms on the page
function displayRooms(rooms) {
    const roomsList = document.getElementById('rooms-list');
    roomsList.innerHTML = ''; // Clear previous results
    rooms.forEach(room => {
        const roomCard = document.createElement('div');
        roomCard.className = 'room-card';
        roomCard.innerHTML = `
            <img src="${room.photo}" alt="Room Photo">
            <h3>${room.name}</h3>
            <p>Price: $${room.price}</p>
            <p>Location: ${room.location}</p>
            <p>Rating: ${room.rating} stars</p>
            <a href="room-details.html?id=${room.id}">View Details</a>
        `;
        roomsList.appendChild(roomCard);
    });
}

// Handle user logout
function logout() {
    // Implement logout functionality
    alert("Logged out successfully!");
    window.location.href = 'signin.html';
}

// Initialize Google Maps API on page load
window.onload = initMap;
// Show Buyer Form
function showBuyerForm() {
    document.getElementById('buyer-form').style.display = 'block';
    document.getElementById('seller-form').style.display = 'none';
}

// Show Seller Form
function showSellerForm() {
    document.getElementById('buyer-form').style.display = 'none';
    document.getElementById('seller-form').style.display = 'block';
}

// Handle Buyer Form Submission
function handleBuyerForm() {
    const location = document.getElementById('buyer-location').value;
    const date = document.getElementById('buyer-date').value;
    const time = document.getElementById('buyer-time').value;
    const people = document.getElementById('number-of-people').value;
   
}
