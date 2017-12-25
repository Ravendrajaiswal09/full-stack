import express from 'express';
import path from 'path';
import http from 'http';

const app = express();
const port = process.env.PORT || 8081;

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../webpack.config');

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, config.devServer));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, '../..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

console.log(`Server is listening to port: ${port}`);
app.listen(port);