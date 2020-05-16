import { fetchWeather } from './weatherModel.js';
import { fetchTimezone } from './timezoneModel.js';


// This function was declared as the commented version in the main method:
// notice how is linearized and declarative in the rewritten version with async-await.
export const fetchCityData = async (city) => {
    /* OLD VERSION: when piramid of doom starts forming, linearize!
    fetchWeather(city).then( weather => {
        console.log('WEATHER: ', weather);
        // now get the proper timezone code
        const {lat, lon} = weather.today.coord;
        console.log('Timezone searching: ', lat, lon);
        fetchTimezone(lat, lon).then( timezone => {
            console.log('TIMEZONE', timezone);
        });
    });
    */
   const weather = await fetchWeather(city);
   console.log('Got city weather: ', weather);

   const {lat, lon} = weather.today.coord;
   console.log('Timezone searching: ', lat, lon);

   const timezone = await fetchTimezone(lat, lon);
   console.log('Got city timezone: ', timezone);

   // Filter and compose the response of the various API as we want
   // This return object will be wrapped in a promise since the method is async
   return {
       today: weather.today,
       forecast: weather.forecast,
       timezone: timezone
    };
};