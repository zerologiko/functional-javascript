import {expect} from 'chai';
import {WEATHER_API_KEY} from '../constants/const.js';
import {
    getParamString,
    getOpenWeatherMapUrl
} from './endpoints';

// Using TDD we want a function "getParamString" to handle 
// any number of parameters for our API endopoints
describe('Endpoints', () => {
    it('Should translate undefined and {} into an empty param string', () => {
        expect( getParamString() ).to.equal('');
        expect( getParamString({}) ).to.equal('');
    });

    it('Should translate an object into query string', () => {
        const params = {
            key1: 'value1',
            key2: 'value2'
        };
        const result = '&key1=value1&key2=value2';
        expect(getParamString(params)).to.equal(result);
    });

    // When writing TDD tests focus only on input and desierd result
    // It's allowed to use building blocks already tested. 
    // After writing a test, just write the minimal code to make the test pass
    it('Should assemble the weather URL with params', () => {
        const params = {
            key1: 'value1',
            key2: 'value2'
        };
        // we imagine the function as a curried chain of functions 
        const url = getOpenWeatherMapUrl('endpoint')(params)('city');
        const paramString = getParamString(params);
        const urlPrefix = 'https://api.openweathermap.org/data/2.5/';
        const result = `${urlPrefix}endpoint?q=city&appid=` + 
            `${WEATHER_API_KEY}${paramString}`;

        expect(url).to.equal(result);
    });
});

