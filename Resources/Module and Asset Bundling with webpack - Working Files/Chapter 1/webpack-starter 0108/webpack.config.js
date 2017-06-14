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
  module: {},
  resolve: {
    extension: ['', '.js'],
    modulesDirectories: ['node_modules']
  }
};

module.exports = config;
