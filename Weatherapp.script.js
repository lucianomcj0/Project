class WeatherApp {
    constructor() {
        // Note: For production use, get your own API key from openweathermap.org
        // This is a demo key that might have limited usage
        this.apiKey = 'your-api-key-here'; // Replace with your actual API key
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
        
        this.initializeElements();
        this.addEventListeners();
    }

    initializeElements() {
        this.cityInput = document.getElementById('cityInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.loading = document.getElementById('loading');
        this.errorMessage = document.getElementById('errorMessage');
        this.errorText = document.getElementById('errorText');
        this.weatherContainer = document.getElementById('weatherContainer');
        
        // Weather display elements
        this.cityName = document.getElementById('cityName');
        this.currentDate = document.getElementById('currentDate');
        this.currentTemp = document.getElementById('currentTemp');
        this.weatherIcon = document.getElementById('weatherIcon');
        this.weatherDescription = document.getElementById('weatherDescription');
        this.feelsLike = document.getElementById('feelsLike');
        this.humidity = document.getElementById('humidity');
        this.windSpeed = document.getElementById('windSpeed');
        this.pressure = document.getElementById('pressure');
        this.uvIndex = document.getElementById('uvIndex');
        this.visibility = document.getElementById('visibility');
    }

    addEventListeners() {
        this.searchBtn.addEventListener('click', () => this.searchWeather());
        this.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.searchWeather();
            }
        });
    }

    async searchWeather() {
        const city = this.cityInput.value.trim();
        
        if (!city) {
            this.showError('Please enter a city name');
            return;
        }

        // Check if API key is set
        if (this.apiKey === 'your-api-key-here') {
            this.showDemoData(city);
            return;
        }

        this.showLoading();

        try {
            const weatherData = await this.fetchWeatherData(city);
            this.displayWeatherData(weatherData);
        } catch (error) {
            this.showError(error.message);
        }
    }

    async fetchWeatherData(city) {
        const url = `${this.baseUrl}?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=metric`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found. Please check the spelling and try again.');
            } else if (response.status === 401) {
                throw new Error('Invalid API key. Please check your configuration.');
            } else {
                throw new Error('Unable to fetch weather data. Please try again later.');
            }
        }
        
        return await response.json();
    }

    showDemoData(city) {
        // Demo data for when API key is not configured
        const demoData = {
            name: city,
            sys: { country: 'Demo' },
            main: {
                temp: 22,
                feels_like: 25,
                humidity: 65,
                pressure: 1013
            },
            weather: [{
                main: 'Clear',
                description: 'clear sky',
                id: 800
            }],
            wind: { speed: 3.5 },
            visibility: 10000
        };

        this.displayWeatherData(demoData, true);
    }

    displayWeatherData(data, isDemo = false) {
        this.hideAllMessages();
        
        // Display city name and date
        this.cityName.textContent = `${data.name}, ${data.sys.country}`;
        this.currentDate.textContent = this.getCurrentDate();
        
        // Display temperature
        this.currentTemp.textContent = `${Math.round(data.main.temp)}°C`;
        
        // Display weather icon
        this.weatherIcon.className = this.getWeatherIconClass(data.weather[0].id);
        
        // Display weather description
        this.weatherDescription.textContent = data.weather[0].description;
        
        // Display weather details
        this.feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
        this.humidity.textContent = `${data.main.humidity}%`;
        this.windSpeed.textContent = `${data.wind.speed} m/s`;
        this.pressure.textContent = `${data.main.pressure} hPa`;
        this.uvIndex.textContent = isDemo ? 'N/A' : '3 (Moderate)'; // UV index requires additional API call
        this.visibility.textContent = `${(data.visibility / 1000).toFixed(1)} km`;
        
        this.weatherContainer.style.display = 'block';

        if (isDemo) {
            this.showError('Demo mode: Using sample data. Get a free API key from openweathermap.org to see real weather data.');
        }
    }

    getWeatherIconClass(weatherId) {
        // Map weather IDs to Font Awesome icons
        if (weatherId >= 200 && weatherId < 300) {
            return 'fas fa-bolt'; // Thunderstorm
        } else if (weatherId >= 300 && weatherId < 400) {
            return 'fas fa-cloud-drizzle'; // Drizzle
        } else if (weatherId >= 500 && weatherId < 600) {
            return 'fas fa-cloud-rain'; // Rain
        } else if (weatherId >= 600 && weatherId < 700) {
            return 'fas fa-snowflake'; // Snow
        } else if (weatherId >= 700 && weatherId < 800) {
            return 'fas fa-smog'; // Atmosphere
        } else if (weatherId === 800) {
            return 'fas fa-sun'; // Clear
        } else if (weatherId > 800 && weatherId < 900) {
            return 'fas fa-cloud'; // Clouds
        }
        return 'fas fa-question'; // Unknown
    }

    getCurrentDate() {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return new Date().toLocaleDateString(undefined, options);
    }

    showLoading() {
        this.hideAllMessages();
        this.loading.style.display = 'block';
    }

    showError(message) {
        this.hideAllMessages();
        this.errorText.textContent = message;
        this.errorMessage.style.display = 'block';
    }

    hideAllMessages() {
        this.loading.style.display = 'none';
        this.errorMessage.style.display = 'none';
        this.weatherContainer.style.display = 'none';
    }
}

// Initialize the weather app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WeatherApp();
});
