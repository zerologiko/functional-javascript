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

    // Get the DOM element to fill with templates
    const domElement = document.querySelector('.js-city-weather');
    // get built templates
    const todayTemplate = getTodaysTemplate(today, timezone);
    const forecastTemplate = getForecastTable(forecast, timezone)(0, 4);

    const upButton = '<button class="up-button js-up">Up</button>';
    const downButton = '<button class="down-button js-down">Down</button>';

    // insert the template in the DOM 
    domElement.innerHTML = `${todayTemplate} ${upButton} ${forecastTemplate} ${downButton}`;

    const moveUp = () => console.log('up');
    const moveDown = () => console.log('down');

    document.querySelector('.js-up').addEventListener('click', moveUp);
    document.querySelector('.js-up').addEventListener('click', moveDown);

};

