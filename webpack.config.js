var path = require('path');
var webpack = require('webpack');
const outputPath = path.join(__dirname, 'build');

module.exports = {
  context: __dirname,
  devtool: "inline-sourcemap",
  entry : [
    './src/index.js'
  ],
  output: {
    path: outputPath,
    publicPath : '/',
    filename: "index.js"
  },
  plugins: [],
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