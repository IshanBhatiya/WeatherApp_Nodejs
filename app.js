// Change the name to get the desired weather report of the location
const cityName = 'canada';  

// API key
const apiKey = '8f04e3978dc22ebd15707de8ffd584ba'; 

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error('There was a problem fetching the weather data:', error);
    });


 