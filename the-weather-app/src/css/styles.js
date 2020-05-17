// This files loads all the needed CSS using the css-loader Webpack loader
// Webpack understand CSS using a previousely installed loader:
// "npm install --save-dev style-loader css-loader" (already installed, see package.json)

// CSS files can be in the project 
import basic from './basic.css';
export const basecss = basic;

// Or in any npm package installed for example, to load and use PureCSS library:
// 1. install the npm pacakge with "npm install purecss --save"
// 2. import the CSS with "import purecss from 'purecss';"
import pureMin from 'purecss/build/pure-min.css';
export const purecss = pureMin;