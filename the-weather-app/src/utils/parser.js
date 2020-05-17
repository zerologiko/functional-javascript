import moment from 'moment-timezone';

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

export const getSunriseSunset = (weather, timezone) => {
    const {sunrise, sunset} = weather.sys;
    // Convert from unix timestamp to javascript timestamp
    const sunriseTs = parseInt(sunrise, 10) * 1000;
    const sunsetTs = parseInt(sunset, 10) * 1000;
    const sunriseTime = moment.tz(sunriseTs, timezone.timezoneId).format('HH:mm');
    const sunsetTime = moment.tz(sunsetTs, timezone.timezoneId).format('HH:mm');
    return `Sunrise: ${sunriseTime} Sunset: ${sunsetTime}`;
};

export const getTodaysTemplate = (weather, timezone) =>
    `<div>${getCity(weather)}, ${getCountry(weather)}: ${getWeatherData(weather)}</div>` +
    `<div>${getTodaysTemperature(weather)}</div>` +
    `<div>${getSunriseSunset(weather, timezone)}</div>`;

// Make a partially applied function, it's handy to take the rowNumber apart
export const getForecastRow = (weather, timezone) =>
        rowNumber => {
            const row = weather.list[rowNumber];
            // Convert from unix timestamp to javascript timestamp with TZ
            const date = moment.tz(row.dt * 1000, timezone.timezoneId).format('MMM Do');
            const temp = row.main.temp;
            const {main, description} = row.weather[0];
            return `<tr> <td>${date}</td> <td>${temp}</td> <td>${main}</td> <td>${description}</td> </tr>`
        };

// Do not export this function, will be available only in the module
// Using a recursive function to extract all the rows
const getForcastTableBody = (rowTemplateFunction, firstRow, lastRow, accumulator) => {
    if (firstRow <= lastRow) {
        const templateAcc = `${accumulator}\n${rowTemplateFunction(firstRow)}`;
        return getForcastTableBody(rowTemplateFunction, firstRow + 1, lastRow, templateAcc);
    }
    return accumulator;
};

export const getForecastTable = (weather, timezone) => 
        (firstRow, lastRow) => {
            // This is partially evaluated to be reused with different indexes
            const rowTemplate = getForecastRow(weather, timezone);
            const tableBody = getForcastTableBody( rowTemplate, firstRow, lastRow, '');
            // Templating can be imporved also
            return `<table class="pure-table">\n` +
                        `<tr> <th>Day</th> <th>Temp</th> <th>Weather</th> <th>description</th> </tr>` +
                         `${tableBody}\n` +
                   `</table>\n`;
        };