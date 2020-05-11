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
    getForecatRow,
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
        const input =  {
            sys: {
                sunrise: 1589169069,
                sunset: 1589221814
            }
        };
        const output = 'Sunrise: 1589169069 Sunset: 1589221814';
        expect( getSunriseSunset(input) ).to.equal(output);
    });

    it('Should return todays today template', () => {
        const input = {
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
                sunrise: 1589169069,
                sunset: 1589221814
            }
        };
        const output = `<div>City, COUNTRY_CODE: Clouds (scattered clouds)</div>` +
            `<div>Temperature: 15 (min: 10 max: 25)</div>` +
            `<div>Sunrise: 1589169069 Sunset: 1589221814</div>`;
        expect( getTodaysTemplate(input) ).to.equal(output);

    });

    xit('Should return todays forecast row', () => {

    });

    xit('Should return todays forecast table', () => {

    });


});