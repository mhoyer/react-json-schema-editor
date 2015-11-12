var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: ['source-map'],
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.tsx', '.js', '.ts']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.tsx$/, 
      loader: 'babel!ts',
      include: path.join(__dirname, 'src')
    }]
  }
}
