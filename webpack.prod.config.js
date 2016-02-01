var webpack = require('webpack');

module.exports = {
    entry: './src/index.umd',
    module: {
        loaders: [
          { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
          { test: /\.jsx?$/,loader: 'babel', exclude: /node_modules/ }
      ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['.jsx', '.js']
    },
    externals: [{
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        },
        "react-measure": {
            root: 'react-measure',
            commonjs2: 'react-measure',
            commonjs: 'react-measure',
            amd: 'react-measure'
        },
        "react-dnd": {
            root: 'react-dnd',
            commonjs2: 'react-dnd',
            commonjs: 'react-dnd',
            amd: 'react-dnd'
        },
        "deep-equal": {
            root: 'deep-equal',
            commonjs2: 'deep-equal',
            commonjs: 'deep-equal',
            amd: 'deep-equal'
        }
    }],
    output: {
        filename: 'dist/DEDReactCarousel.min.js',
        libraryTarget: 'umd',
        library: 'DEDReactCarousel'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          compressor: {
            warnings: false
          }
        })
    ]
};
