const path = require('path')
const express = require('express');
const app = express();
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.dev.js');
const compiler = webpack(webpackConfig);
const config = require('./config');

const PORT = config.port;
const ENV = config.env;

console.log(`ENV: ${ ENV }`);

if (ENV == 'development') {
  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));
  app.use(require("webpack-hot-middleware")(compiler));
}

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('*', (req, res) => {
  console.log('sending file...');
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(PORT, () => console.log(`Tiger Blinds App listening on port ${PORT}!`));
