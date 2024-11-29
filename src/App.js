
// All imports go at the top
import React, { useState, useEffect } from 'react';
import { getWeather } from './WeatherService';

import './App.css';
const App = () => {
    const [city, setCity] = useState('Toronto');
    const [weather, setWeather] = useState(null);

    const fetchWeather = () => {
        getWeather(city)
            .then(response => setWeather(response.data))
            .catch(err => console.error("Error fetching data: ", err));
    };

    return (
        <div>
            <h1>Weather App</h1>
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city" 
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {weather && (
                <div>
                    <h2>City: {weather.name}</h2>
                    <p>Temperature: {weather.main.temp}K</p>
                    <p>Condition: {weather.weather[0].description}</p>
                    <img 
                        src={`https://tse2.mm.bing.net/th?id=OIP.QiOMOyJnl7HUcTk8pYxQrgHaEL&pid=Api&P=0&h=180`} 
                        alt={weather.weather[0].description} 
                    />
                </div>
            )}
        </div>
    );
};

export default App;


