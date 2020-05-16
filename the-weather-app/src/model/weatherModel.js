import axios from 'axios';
import { 
    getOpenWeatherMapUrl 
} from '../utils/endpoints.js';

// The "getOpenWeatherMapUrl" function is curried so we can partillay apply and get a useful functions!
const todayWeatherMapUrl = getOpenWeatherMapUrl('weather')({units: 'metric'});
const forecastWeatherMapUrl = getOpenWeatherMapUrl('forecast')({units: 'metric', cnt: 10});

// Now the function to retrieve the data:
// Axios makes ajax requests and returns a ES6 Promise resolved with the server response
// Note: the functions are marked as "async" but technically we don't need this as the return is a promise
//       we keep the async to remember and also we can use "await" if we want.
const getTodayWeather = async (city) => 
    axios.get( todayWeatherMapUrl(city) );

const getForcastWeather = async (city) =>
    axios.get( forecastWeatherMapUrl(city) );

// Here we use Promise.all to get all the data from all the promises
// using the "await" we wait for all to be resolved (alternative to the .then(...))
export const fetchWeather = async (city) => {
    const [today, forecast] = await Promise.all(
        [
            getTodayWeather(city), 
            getForcastWeather(city)
        ]
    )
    return {today: today.data, forecast: forecast.data};
}











