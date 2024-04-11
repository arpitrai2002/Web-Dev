// Sample data for farm mapping
const farmLayout = [
    { name: 'Field A', type: 'crop', area: '5 acres', crops: ['Corn', 'Wheat'] },
    { name: 'Field B', type: 'crop', area: '3 acres', crops: ['Soybean', 'Barley'] },
    { name: 'Field C', type: 'crop', area: '7 acres', crops: ['Rice', 'Oats'] },
    // Add more fields as needed
];

// Function to render farm map
function renderFarmMap() {
    const mapContainer = document.getElementById('mapContainer');
    const mapHTML = farmLayout.map(field => `
        <div class="field">
            <h3>${field.name}</h3>
            <p>Type: ${field.type}</p>
            <p>Area: ${field.area}</p>
            <p>Crops: ${field.crops.join(', ')}</p>
        </div>
    `).join('');
    mapContainer.innerHTML = mapHTML;
}

// Function to simulate automated alerts
function checkCriticalEvents() {
    // Simulate pest outbreak
    const pestOutbreak = Math.random() < 0.3; // 30% chance of pest outbreak
    if (pestOutbreak) {
        showAlert('Pest outbreak detected!');
    }

    // Simulate adverse weather forecast
    const adverseWeather = Math.random() < 0.2; // 20% chance of adverse weather
    if (adverseWeather) {
        showAlert('Adverse weather forecast: Heavy rainfall expected!');
    }

    // Simulate irrigation needs
    const irrigationNeeded = Math.random() < 0.4; // 40% chance of irrigation needed
    if (irrigationNeeded) {
        showAlert('Irrigation needed for Field A!');
    }
}

// Function to display alerts
function showAlert(message) {
    const alertsContainer = document.getElementById('alertsContainer');
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert');
    alertElement.textContent = message;
    alertsContainer.appendChild(alertElement);
}

// Render farm map on page load
window.onload = function() {
    renderFarmMap();
    // Check for critical events every 24 hours (adjust time interval as needed)
    setInterval(checkCriticalEvents, 24 * 60 * 60 * 1000);
};
