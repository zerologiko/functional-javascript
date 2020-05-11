export const getCity = response => {
    return response.name;
};

export const getCountry = response => {
    return response.sys.country;
};

export const getWeatherData = response => {
    return `${response.weather[0].main} (${response.weather[0].description})`;
};

export const getTodaysTemperature = response => {
    return `Temperature: ${response.main.temp} (min: ${response.main.temp_min} max: ${response.main.temp_max})`;
};

export const getSunriseSunset = response => {
    return `Sunrise: ${response.sys.sunrise} Sunset: ${response.sys.sunset}`;
};

export const getTodaysTemplate = resp =>
    `<div>${getCity(resp)}, ${getCountry(resp)}: ${getWeatherData(resp)}</div>` +
    `<div>${getTodaysTemperature(resp)}</div>` +
    `<div>${getSunriseSunset(resp)}</div>`;
