import axios from 'axios';
import {
    getGeonamesUrl
} from '../utils/endpoints.js';

// so geonamesTimestampUrl is again a function accepting the coordinates to build the complete request URL 
export const fetchTimezone = async (latitude, longitude) => {
    // Axios works on a given URL, the URL is built by the getGEonamesUrl ginven an endpoint.
    // Note: "getGeonamesUrl" is a partially curried function, 
    // Note: choosed to use "await" on the axios return promise to wait for the result
    //       this can be an option when the service is very fast and the response is simple.
    const response = await axios.get( getGeonamesUrl('timezoneJSON')(latitude, longitude) );
    return response.data;
};