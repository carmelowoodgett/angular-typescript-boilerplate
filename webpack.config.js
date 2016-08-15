var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
      app: './app/bootstrap.ts'
    },
    output: {
      path: path.resolve(__dirname, 'app/dist'),
      filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.ts$/, exclude: 'node_modules', loader: 'ts-loader' },
            { test: /\.css$/, exclude: 'node_modules', loader: 'style-loader!css-loader!postcss-loader' }
        ]
    },
    postcss: function() {
        return [autoprefixer({ browsers: ['last 2 versions']})];
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.html', '.css']
    },
    ts: {
        configFileName: 'tsconfig.json'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}
