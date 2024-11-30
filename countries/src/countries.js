import axios from "axios";
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const forecastUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

const APIkey = import.meta.env.VITE_SOME_KEY

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const getAllForecast = (city) => {
    const request = axios.get(`${forecastUrl}${city}&appid=${APIkey}`);
    return request.then(response => response.data);
}

export default { getAll, getAllForecast }

