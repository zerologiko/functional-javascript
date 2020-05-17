import {
    getTodaysTemplate,
    getForecastTable
} from '../utils/parser.js';

const renderForecast = (forecastTeable, firstIndex, lastIndex) => {
    const domElement = document.querySelector('.js-city-forecast');
    const forecastTemplate =  forecastTeable(firstIndex, lastIndex)
    domElement.innerHTML = `${forecastTemplate}`;
};

/**
 * A presenter in this example is a controller responsable to present the data.
 * Note: templating and rendering can be acheived with a lot of framework/libraries, in this example
 *       just doing the simplest thing, modify the DOM.
 */
export const renderCity = ( {today, forecast, timezone} ) => {
    // Get the DOM elements to fill with templates
    const domElement = document.querySelector('.js-city-weather');
    // Get and render today weather built template and insert in the DOM 
    const todayTemplate = getTodaysTemplate(today, timezone);
    domElement.innerHTML = `${todayTemplate}`;
    
    // Adding navbar for forecast up and down button
    const domNavElement = document.querySelector('.js-forecast-nav');
    const nextButton = '<button class="js-next pure-button"> next </button>';
    const prevButton = '<button class="js-prev pure-button"> prev </button>';
    domNavElement.innerHTML = `${prevButton} ${nextButton}`;

    // the "forecastTeable" is partially applied: this function will be
    // used passing the two indexes arguments to build the template
    let firstPage = 0;     // this are not a constants: we have to accept it
    let numberOfPages = 5; // templating is a side effect activity, also we modify the DOM so...
    const forecastTable = getForecastTable(forecast, timezone);
    const wrappedRenderForecase = () => renderForecast(forecastTable, firstPage, firstPage + numberOfPages - 1);
    wrappedRenderForecase();

    const moveNext = () => {
        console.log('next');
        firstPage = Math.min(5, firstPage + 1);
        wrappedRenderForecase();
    };

    const movePrev = () => {
        console.log('prev');
        firstPage = Math.max(0, firstPage - 1)
        wrappedRenderForecase();
    }

    document.querySelector('.js-next').addEventListener('click', moveNext);
    document.querySelector('.js-prev').addEventListener('click', movePrev);
};

