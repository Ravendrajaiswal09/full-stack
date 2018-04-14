var path = require('path');
const outputPath = path.join(__dirname, 'build');

console.log(`run webpack now`);

var config = {
  context: __dirname,
  devtool: "inline-sourcemap",
  entry : [
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: outputPath,
    publicPath : '/',
    filename: "index.js"
  },
  resolve : {
    root : path.resolve('./src'),
    alias : {
      actions : path.resolve('./src/users'),
    },
    extensions : ['', '.js', '.jsx', '.json'],
    modulesDirectories : [
      'node_modules'
    ] 
  },

  module : {
    loaders : [
      {
        test : require.resolve('react'),
        loader : 'expose-loader?react',
      },
      {
        test : /\.js$/,
        loaders : ['react-hot-loader/webpack', 'babel'],
        exclude : /node_modules/,
        include : __dirname
      }
    ]
  },
  devServer : {
    outputPath : outputPath,
    contentBase : './',
    colors : true,
    inline : true,
    publicPath : '/',
    historyApiFallback : true,
    hot : true,
    quiet : false,
    hash : false,
    version : false,
    timings : false,
    assets : false,
    chunks : false,
    modules : false,
    reasons : false,
    children : false,
    source : false,
    errors : false,
    errorDetails : false,
    noInfo : false,
    warnings : false,
    stats : 'minimal'
  }
};

module.exports = config;