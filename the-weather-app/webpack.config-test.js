var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',  // webpack should compile node compatible code
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder

  devtool: 'inline-source-map', // set to false to exclude sourcemap from dist file (smaller but no debugging) 
  mode: 'development', // optimizations for development environment change to "production"

  output: {
    // use absolute paths in sourcemaps (important for debugging via IDE)
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  }
};