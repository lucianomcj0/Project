# Weather App

A modern, responsive weather application built with HTML, CSS, and JavaScript that displays current weather information for any city worldwide.

## Features

- 🌤️ Current weather display with temperature, description, and weather icons
- 📍 Search for any city worldwide
- 💨 Detailed weather information including:
  - Feels like temperature
  - Humidity
  - Wind speed
  - Atmospheric pressure
  - Visibility
- 📱 Fully responsive design that works on desktop, tablet, and mobile
- ⚡ Modern, animated UI with smooth transitions
- 🎨 Beautiful gradient background and glassmorphism effects

## Getting Started

### Prerequisites

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
   - Create an account at openweathermap.org
   - Go to API keys section
   - Generate a free API key

### Installation

1. Clone or download this project
2. Open `script.js` file
3. Replace `'your-api-key-here'` with your actual OpenWeatherMap API key:
   ```javascript
   this.apiKey = 'your-actual-api-key-here';
   ```
4. Open `index.html` in your web browser

### Demo Mode

The app includes a demo mode that works without an API key. It will show sample weather data for any city you search. To see real weather data, you must configure your API key as described above.

## Usage

1. Enter a city name in the search box
2. Click the search button or press Enter
3. View the current weather information for that city

## File Structure

```
weather-app/
│
├── index.html      # Main HTML structure
├── styles.css      # CSS styling and responsive design
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling, animations, and responsive design
- **JavaScript (ES6+)** - API integration and dynamic functionality
- **OpenWeatherMap API** - Weather data source
- **Font Awesome** - Icons for weather conditions and UI elements

## API Information

This app uses the OpenWeatherMap Current Weather Data API:
- Base URL: `https://api.openweathermap.org/data/2.5/weather`
- Free tier includes: 1,000 API calls per day
- Data includes: temperature, humidity, wind, pressure, visibility, and more

## Browser Support

This app works in all modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- Fetch API

## Customization

### Changing the Color Scheme
Edit the CSS custom properties in `styles.css`:
- Background gradient colors
- Button colors
- Text colors
- Accent colors

### Adding Features
You can extend the app by:
- Adding a 5-day forecast
- Including weather alerts
- Adding geolocation support
- Saving favorite cities
- Adding more detailed weather maps

## Troubleshooting

### Common Issues

1. **"Demo mode" message appears**
   - You need to set up your API key in `script.js`

2. **"Invalid API key" error**
   - Check that your API key is correct
   - Ensure there are no extra spaces
   - Wait a few hours after creating a new API key (activation delay)

3. **"City not found" error**
   - Check the spelling of the city name
   - Try using the format "City, Country Code" (e.g., "London, UK")

4. **Weather data not loading**
   - Check your internet connection
   - Verify the API key is active
   - Check browser console for error messages

## Contributing

Feel free to fork this project and submit pull requests for:
- Bug fixes
- Feature enhancements
- UI/UX improvements
- Code optimizations

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [Font Awesome](https://fontawesome.com/)
- Inspiration from modern weather app designs
