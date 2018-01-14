import express from 'express';
import path from 'path';
import http from 'http';
import bodyParser from 'body-parser'
import route from '../router/index'
import mongoose from 'mongoose'

const app = express();
const port = process.env.PORT || 8081;

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjao')
mongoose.Promise = global.Promise



app.use(bodyParser.json())
app.use('/api', route)

// error Handeling

app.use(function(err, req, res, next){
  console.log(err)
  res.send({error: err._message})
})


/*

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../webpack.config');

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, '../..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});
*/
console.log(`Server is listening to port: ${port}`);
app.listen(port); 