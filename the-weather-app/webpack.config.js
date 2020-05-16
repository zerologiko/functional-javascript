module.exports = {
    entry  : './src/main.js',
    output : {
        path     : __dirname,
        filename : 'weatherapp.dist.js'
    },
    
    mode: 'development', // optimizations for 'development' environment change to 'production' to reduce dist size.
    devtool: 'inline-source-map', // set to false to exclude sourcemap from dist file (smaller but no debugging) 
    
    module : {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
        ]
    }
};