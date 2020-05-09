module.exports = {
    entry  : './src/main.js',
    output : {
        path     : __dirname,
        filename : 'wheaterapp.dist.js'
    },
    module : {
        loaders: [ { 
                test   : /.js$/,
                loader : 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    }
};