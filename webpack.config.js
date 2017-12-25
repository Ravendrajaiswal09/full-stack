var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var webpack = require('webpack');
const outputPath = path.join(__dirname, 'build');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry : [
    './src/index.js'
  ],
  output: {
    path: outputPath,
    publicPath : '/',
    filename: "index.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  module : {
    loaders : [
      {
        test : require.resolve('react'),
        loader : 'expose-loader?react',
      },
      {
        test : /\.js$/,
        loaders : 'babel-loader',
        exclude : /node_modules/,
        include : __dirname
      },
      {
        test : /\.css$/,
        exclude : /node_modules/,
        loader: 'style-loader!css-loader'
      },
    ]
  }
};