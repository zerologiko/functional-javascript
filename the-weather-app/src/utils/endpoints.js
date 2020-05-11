import { WEATHER_API_KEY } from '../constants/const.js';
/**
 * Given an object of parameters returns a query string
 * @param {*} params 
 */
export const getParamString = (params = {}) => {
    // Object.entries returns a [key,value] enumerable https://tinyurl.com/object-entries
    return Object.entries(params).reduce(
        (acc, elem) => {
            const [key, value] = elem;
            return `${acc}&${key}=${value}`;
        }, '');
};

// We make this function curried and usa a long but simple "template literal"
export const getOpenWeatherMapUrl = 
    endpoint =>
    params =>
    city => 
    `https://api.openweathermap.org/data/2.5/` +
    `${endpoint}?q=${city}&appid=${WEATHER_API_KEY}` + 
    getParamString(params);

