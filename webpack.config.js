var path = require('path');

module.exports = {
  devtool: ['source-map'],
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.tsx', '.ts', '.js']
  },
  module: {
    loaders: [{
      test: /\.tsx$/, 
      loader: 'ts',
      include: path.join(__dirname, 'src')
    }]
  }
}
