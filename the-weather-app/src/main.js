import { fetchCityData } from './model/cityModel.js';
import { renderCity } from './presenter/renderCity.js';

// import styles from PureCSS (Webpack will put in the page)
import { 
    basecss,
    purecss 
} from './css/styles.js';

// Add a click event handler for the search button
// here we rely on side effetcs, so is not pure functional:
// searchCity function will call API and change the DOM
document.querySelector('.js-search-city')
    .addEventListener('click', searchCity);

function searchCity() {
    const inputText = document.querySelector('.js-city-field');
    const city = inputText.value;
    console.log('Searching city: ', city);
    fetchCityData(city).then(cityResponse => renderCity(cityResponse));
    inputText.value = '';
};

