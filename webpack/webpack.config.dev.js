const path = require('path');
const loaders = require('./loaders');
const cssplugins = require('./css.plugins.config');


const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

// Generate an HTML5 file for you that includes all your 
// webpack bundles in the body using script tags
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: ["./src/app.js"],  // the application entry point
  output: { // where to put bundles are and how to name these file
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "src/index.html"
    }),
    cssplugins.StyleLintPlugin
  ],
  module: {
    rules: [
      loaders.JSLoader,
      loaders.ESLintLoader,
      loaders.CSSLoader
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js"
  },
};
