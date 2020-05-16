# The Weather app

A simple weather app built in "mosttly functional" style.

Key points of the exercice:
- avoid as mutch mutability (es. no vars only const)
- try to limit side effects (es. just use when needed, like rendering templates)
- keep in mind and exploit all the functional concepts (currying, partial application)
- handle asynchronous call linearizing as mutch (es. use async-await properly)
- when not funtional, OO is the second best:
  - es. divide, modularize, single responsability, loosely coupling, high cohesion 

## Build

2. Run `npm install` to install babel-loader and underscore
2. Run `npm run test`to test the code (optional)
3. Execute `npm run webpack:watch`
4. View `index.html` in a browser serving in HTTP server

## Serving the app in HTTP server

**Option 1: Visual Studio Code**
In Visual Studio Code use the "Go Live" function that start an HTTP server of the workspace folder

**Option 2: Python HTTP server (easy on Linux and Mac)**
Execute `python -m SimpleHTTPServer` in the root folder of the app this will start an HTTP server on `http://localhost:8000/`


## API Used
The app use https://api.openweathermap.org/ API, a free registration is required to get the API key.
Also Google API key is required: a Google account is enough.

Weather API
https://api.openweathermap.org/data/2.5/weather?q=CITY&appid=YOUR_APY_KEY&units=metric

Example: https://api.openweathermap.org/data/2.5/weather?q=Bologna&appid=b3f94c758df03f4f532bad4bfe1e55b1&units=metric

Forecast API
https://api.openweathermap.org/data/2.5/forecast?q=CITY&appid=YOUR_API_KEY&units=metric&cnt=NUM_RESULT

Example: https://api.openweathermap.org/data/2.5/forecast?q=Bologna&appid=b3f94c758df03f4f532bad4bfe1e55b1&units=metric&cnt=5

Timezones API 
To handle the tricky task of managing timezones http://api.geonames.org API are uese, free geristration.
See http://www.geonames.org/export/web-services.html to register and enable an account (username is the apikey)
Note: googleapis Timezone API can be used too but it needs a valid credit card to start free eavlution.
See http://www.geonames.org/export/web-services.html#timezone

Example: http://api.geonames.org/timezoneJSON?lat=47.01&lng=10.2&username=zerologiko


## Teck stack
* npm: dependencypackage manager and task runner 
* babel: transpiler for ES6 and new language futures compatibility
  * https://babeljs.io/docs/en/next/babel-preset-env.html
* Webpack: resurce builder
* Mocha and Chai: test execution and asserts
* Axios: promise based ajax library to fetch API data
* PureCSS: a super small CSS library (see https://purecss.io/)
