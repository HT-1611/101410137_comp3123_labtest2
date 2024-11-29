import axios from 'axios';

const API_URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeather = (city) => {
    return axios.get(`${API_URL}?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
};
