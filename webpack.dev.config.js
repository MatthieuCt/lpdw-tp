var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/demo'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
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
        modulesDirectories: ['node_modules', 'src', 'src/demo']
    }
};
