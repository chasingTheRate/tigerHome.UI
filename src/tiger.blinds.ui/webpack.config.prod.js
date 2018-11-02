const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge( common, {
  mode: 'production',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/templates/index.html",
      filename: "./index.html"
    })
  ]
});