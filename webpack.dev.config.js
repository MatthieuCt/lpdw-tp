var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval',
    entry: {
        exercice3: ['webpack-dev-server/client?http://localhost:8080','webpack/hot/only-dev-server','./exercice3'],
        exercice4: ['webpack-dev-server/client?http://localhost:8080','webpack/hot/only-dev-server','./exercice4'],
        exercice5: ['webpack-dev-server/client?http://localhost:8080','webpack/hot/only-dev-server','./exercice5'],
        exercice6: ['webpack-dev-server/client?http://localhost:8080','webpack/hot/only-dev-server','./exercice6']
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: '[name].bundle.js',
        publicPath: '/static/',
        infoPath: true
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.jsx?$/,loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.scss$/,loader: 'style!css!sass', exclude: /node_modules/ }
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.jsx', '.js'],
        modulesDirectories: ['node_modules', 'src']
    }
};
