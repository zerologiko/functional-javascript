import {
    getTodaysTemplate,
    getForecastTable
} from '../utils/parser.js';

/**
 * A presenter in this example is a controller responsable to present the data.
 * 
 * Note: templating and rendering can be acheived with a lot of framework/libraries, in this example
 *       just doing the simplest thing, modify the DOM.
 */
export const renderCity = ( {today, forecast, timezone} ) => {

    const domElement = document.querySelector('.js-city-weather');
    const todayTemplate = getTodaysTemplate(today, timezone);
    const forecastTemplate = getForecastTable(forecast, timezone)(0, 4);

    // insert the template in the DOM 
    domElement.innerHTML = `${todayTemplate} ${forecastTemplate}`;
};

