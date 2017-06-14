const Autoprefixer = require('autoprefixer-stylus');
const Path = require('path');

const config = {
  entry: {
    app: ['./client/js/app']
  },
  output: {
    path: './build',
    publicPath: 'build/',
    filename: '[name]-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.styl$/,
      include: [
        Path.resolve(process.cwd(), 'client/style/stylus')
      ],
      loader: 'style!css!stylus'
    }, {
      test: /\.(png|jpg)$/,
      include: [
        Path.resolve(process.cwd(), 'client/style')
      ],
      loader: 'file',
      query: {
        name: '[hash].[ext]'
      }
    }]
  },
  resolve: {
    extension: ['', '.js'],
    modulesDirectories: ['node_modules']
  },
  stylus: {
    use: [Autoprefixer({
      browsers: ['last 2 versions’]
    })]
  }
};

module.exports = config;
