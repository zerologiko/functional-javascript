# The Weather app

A simple weather app built in "mosttly functional" style.

Build:

1. Make sure you have `webpack` installed (`npm install -g webpack`)
2. Run `npm install` to install babel-loader and underscore
3. Execute `webpack`
4. View `index.html` in a browser

Branches:

- `master`
- `mocha-chai`: automated testing setup with Mocha, Chai, and Webpack. Place your tests in the `src` folder in `.test.js` files. Run your tests with the command `npm run test`. 



API Used

The app use https://api.openweathermap.org/ API, a free registration is required to get the API key.

Weather API
https://api.openweathermap.org/data/2.5/weather?q=Bologna&appid=b3f94c758df03f4f532bad4bfe1e55b1&units=metric

Forecast API
https://api.openweathermap.org/data/2.5/forecast?q=Bologna&appid=b3f94c758df03f4f532bad4bfe1e55b1&units=metric&cnt=5
