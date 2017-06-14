const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

const plugins = [
  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: 'index.template',
    inject: 'body'
  })
];

const prod = process.argv[4] === '--production';

if (prod) {
  plugins.push(new Webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
  plugins.push(new Webpack.optimize.OccurenceOrderPlugin(),new Webpack.optimize.DedupePlugin());
}
plugins.push(new Webpack.DefinePlugin({
  __PRODUCTION__: prod,
  __DEV__: !prod
}));

const config = {
  entry: {
    app: ['./client/js/app']
  },
  output: {
    path: './build',
    publicPath: 'build/',
    filename: '[name]-[hash]-bundle.js'
  },
  devtool: 'source-map',
  module: {},
  resolve: {
    extension: ['', '.js'],
    modulesDirectories: ['node_modules']
  },
  plugins: plugins
};

module.exports = config;
