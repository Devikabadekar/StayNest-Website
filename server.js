const express = require('express');
const app = express();

app.use(express.json());

// Dummy room data
const rooms = [
    { id: 1, name: 'Room 1', price: 100, location: 'New York', rating: 4.5 },
    { id: 2, name: 'Room 2', price: 80, location: 'Los Angeles', rating: 4.0 }
];

// Routes
app.get('/api/rooms', (req, res) => {
    res.json(rooms);
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'user' && password === 'pass') {
        res.json({ success: true, message: 'Login successful!' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
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
// Initialize Google Maps API
function initMap() {
    // Initialization code if needed
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
// Initialize Google Maps API
function initMap() {
    // Initialization code if needed
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

//
