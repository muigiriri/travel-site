var path = require('path');

module.exports = {
    entry: './app/assets/scripts/app.js',
    output: {
        path: path.resolve(__dirname, './app/temp/scripts'),
        filename: 'app.js'
    },
    module: {
    rules: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" }
    ]
}
};

