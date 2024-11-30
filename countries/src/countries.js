import axios from "axios";
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const forecastUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

const APIkey = 'f1b9193cf4e81cf24d3bd88573eac0b9';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const getAllForecast = (city) => {
    const request = axios.get(`${forecastUrl}${city}&appid=${APIkey}`);
    return request.then(response => response.data);
}

export default { getAll, getAllForecast }