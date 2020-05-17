import { expect } from 'chai';
// the parser utility will provide data for the interface getting the proper fields from the response
// This function are tought before: in TDD bottom up design we imagine what function will need

import {
    getCity,
    getCountry,
    getWeatherData,
    getTodaysTemperature,
    getSunriseSunset,
    getTodaysTemplate,
    getForecastRow,
    getForecastTable
} from './parser'

// We can use "it" to define a test, also use "xit" to define a "pending" not yet implemented test
// And once again, think in term of input and result for each peice of the interface
describe( 'Parser util tests', () => {
    it('Should return the city', () => {
        const input = { name: 'City' };
        expect( getCity(input)).to.equal('City')
    });

    it('Should return country', () => {

        const input = {
            sys: {
                country: 'COUNTRY_CODE'
            }
        };
        expect(getCountry(input)).to.equal('COUNTRY_CODE');
    });

    it('Should return weather data', () => {
        const input = {
            weather: [
                {
                    main: 'Weather',
                    description: 'description'
                }
            ]
        };
        const output = 'Weather (description)'
        expect( getWeatherData(input) ).to.equal(output);
    });

    it('Should return todays temperature', () => {
        const input =  {
            main: {
                temp: 10,
                temp_min: 0,
                temp_max: 20
            }
        };
        const output = 'Temperature: 10 (min: 0 max: 20)';
        expect( getTodaysTemperature(input) ).to.equal(output);
    });

    it('Should return sunrise and sunset time', () => {
        const weather =  {
            sys: {
                sunrise: 1589514396,
                sunset: 1589567691
            }
        };
        const timezone = {
            timezoneId: 'Europe/Vienna',
        };
        const output = 'Sunrise: 05:46 Sunset: 20:34';
        expect( getSunriseSunset(weather, timezone) ).to.equal(output);
    });

    it('Should return todays today template', () => {
        const weather = {
            name: 'City', 
            weather: [
                {
                    main: 'Clouds',
                    description: 'scattered clouds'
                }
            ],
            main: {
                temp: 15,
                temp_min: 10,
                temp_max: 25
            },
            sys: {
                country: 'COUNTRY_CODE',
                sunrise: 1589514396,
                sunset: 1589567691
            }
        };
        const timezone = {
            timezoneId: 'Europe/Vienna',
        };
        const output = `<div>City, COUNTRY_CODE: Clouds (scattered clouds)</div>` +
            `<div>Temperature: 15 (min: 10 max: 25)</div>` +
            `<div>Sunrise: 05:46 Sunset: 20:34</div>`;
        expect( getTodaysTemplate(weather, timezone) ).to.equal(output);
    });

    it('Should return todays forecast row', () => {
        // Some simplified data from forecast API response
        const weatherForecastResp = {
            list: [
                {
                    dt: 1589533200,
                    main: {temp: 20.49, temp_min: 20.49, temp_max: 21.79},
                    weather: [{main: "Clouds", description: "few clouds"}]
                },
                {
                    dt: 1589544000,
                    main: {temp: 22.10, temp_min: 21.19, temp_max: 22.81},
                    weather: [{main: "Rain", description: "light rain"}]
                }
            ]
        };
        const timezone = {
            timezoneId: 'Europe/Vienna',
        };
        const firstRow = getForecastRow(weatherForecastResp, timezone)(0);
        const secondRow = getForecastRow(weatherForecastResp, timezone)(1);
        const expectedRow1 = `<tr> <td>May 15th</td> <td>20.49</td> <td>Clouds</td> <td>few clouds</td> </tr>`;
        const expectedRow2 = `<tr> <td>May 15th</td> <td>22.1</td> <td>Rain</td> <td>light rain</td> </tr>`;
        // you can make as many asertion you need
        expect(firstRow).to.equal(expectedRow1);
        expect(secondRow).to.equal(expectedRow2);
    });

    it('Should return todays forecast table', () => {
         // Some simplified data from forecast API response
         const weatherForecastResp = {
            list: [
                {
                    dt: 1589533200,
                    main: {temp: 20.49, temp_min: 20.49, temp_max: 21.79},
                    weather: [{main: "Clouds", description: "few clouds"}]
                },
                {
                    dt: 1589544000,
                    main: {temp: 22.10, temp_min: 21.19, temp_max: 22.81},
                    weather: [{main: "Rain", description: "light rain"}]
                }
            ]
        };
        const timezone = {
            timezoneId: 'Europe/Vienna',
        };
        const tableResult = getForecastTable(weatherForecastResp, timezone)(0, 1);
        // Now, check for "exact templates format" is not the best way, should be done checking the DOM
        // This is just a simple solution to focus on TDD and functional programming, should be improved
        const expectedResult = 
            `<table class="pure-table">\n` +
                `<tr> <th>Day</th> <th>Temp</th> <th>Weather</th> <th>description</th> </tr>\n` +
                `<tr> <td>May 15th</td> <td>20.49</td> <td>Clouds</td> <td>few clouds</td> </tr>\n` +
                `<tr> <td>May 15th</td> <td>22.1</td> <td>Rain</td> <td>light rain</td> </tr>\n` +
            `</table>\n`;
        
        expect(tableResult).to.equal(expectedResult);
    });


});