var webpack = require('webpack');
var path = require('path');
//var nodeExternals = require('webpack-node-externals');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: [
        'react-hot-loader',
        'webpack-hot-middleware/client?path=http://localhost:3005/__webpack_hmr',
        'webpack/hot/dev-server',
        'babel-polyfill', APP_DIR + '/index.tsx'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP_DIR,
            loaders: ['react-hot', 'babel']
        }, {
            test: /\.json$/,
            loader: "json-loader"
        }, {
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }],
        preLoaders: [ // All output '.js' files will have any sourcemaps re-processed by
            // 'source-map-loader'.
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
            '.css',
            '.scss'
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new webpack.HotModuleReplacementPlugin()

    ],
    cache: true,
    debug: true
};
/*
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        })
    )
}*/

module.exports = config;