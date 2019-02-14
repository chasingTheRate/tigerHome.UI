const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

console.log(`test: ${process.env.TIGER_BLINDS_API}`);

module.exports = merge( common, {
  mode: 'production',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: "./src/templates/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({           
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),      
      TIGER_BLINDS_API: JSON.stringify(process.env.TIGER_BLINDS_API)
    })
  ]
});